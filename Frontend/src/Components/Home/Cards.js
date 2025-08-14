import { useState, useEffect } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import axios from "axios";

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import toast from 'react-hot-toast';
const Cards = ({ item, mode }) => {
    const [showModal, setShowModal] = useState(false);
    const [gpayNumber, setGpayNumber] = useState("");
    const [email, setEmail] = useState("");
    const [userOrders, setUserOrders] = useState([]);
    const [showPdf, setShowPdf] = useState(false);

    // for pdf 
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            fullScreenPlugin: { enableShortcuts: false },
            printPlugin: { enableShortcuts: false },
            downloadPlugin: { enableShortcuts: false },
            openPlugin: { enableShortcuts: false },
        },
    });

    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;


    useEffect(() => {
        const user = localStorage.getItem('Users');
        if (user) {
            const parsedUser = JSON.parse(user);
            const storedEmail = parsedUser.email;
            if (storedEmail) {
                setEmail(storedEmail);
                // Fetch orders
                axios.get(`http://localhost:5001/order/user/${storedEmail}`)
                    .then(res => setUserOrders(res.data))
                    .catch(err => console.error("Failed to fetch orders", err));
            }
        }
    }, []);

    const isConfirmed = userOrders.some(
        (order) => order.noteId === item._id && order.status === "confirmed"
    );

    const isFree = String(item.categeroy).toLowerCase() === 'free';

    const handleBuyClick = () => {
        setShowModal(true);
    };

    const handleCreateOrder = async () => {
        if (!gpayNumber || !email) {
            alert("Please enter your GPay number.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5001/order/create", {
                email,
                noteId: item._id,
                noteName: item.name,
                gpayNumber,
                status: "pending"
            });

            if (response.status === 200) {
                toast.success("Order submitted. Please wait for admin confirmation.");
                setShowModal(false);
                setGpayNumber("");
            }
        } catch (error) {
            console.error("Order creation failed", error);
            toast.error("Failed to create order.");
        }
    };


    return (
        <div className={`container my-3 text-${mode === 'light' ? 'dark' : 'light'}`}>
            <div
                className={`card bg-${mode} text-${mode === 'light' ? 'dark' : 'light'} shadow rounded-4`}
                style={{ border: '2px solid', height: '500px', overflow: 'hidden' }}
            >
                <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                    style={{ height: '250px', width: '100%', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                    <hr className={`m-0 py-2 w-100 text-${mode === 'light' ? 'dark' : 'light'}`} />
                    <h5 className="card-title d-flex justify-content-between align-items-center">
                        {item.name}
                        <span className="badge bg-danger">{item.categeroy}</span>
                    </h5>

                    {!isFree && (
                        <p className="my-2">
                            <strong>Price: </strong>
                            <span className="badge bg-warning text-dark">₹{Number(item.price || 0).toFixed(2)}</span>
                        </p>
                    )}

                    <p className="card-text" style={{ fontSize: '0.95rem' }}>{item.title}</p>

                    <div className="d-flex justify-content-between mt-auto">
                        {isFree ? (
                            <a href={item.file} target="_blank" rel="noopener noreferrer" download>
                                <button className="btn btn-primary fw-semibold px-4" style={{ border: '2px solid' }}>
                                    Download
                                </button>
                            </a>
                        ) : isConfirmed ? (
                            <button
                                className="btn btn-info fw-semibold px-5"
                                onClick={() => setShowPdf(true)}
                            >
                                Read
                            </button>
                        ) : (
                            <button
                                className="btn btn-success fw-semibold px-3"
                                style={{ border: '2px solid' }}
                                onClick={handleBuyClick}
                                disabled={!email}
                                title={email ? '' : 'Please login to buy'}
                            >
                                Buy for ₹{Number(item.price || 0).toFixed(2)}
                            </button>
                        )}



                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <button
                                className={`btn btn-outline-${mode === 'light' ? 'dark' : 'light'} fw-semibold px-4`}
                                style={{ border: '2px solid' }}
                            >
                                Read More
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {showPdf && (
                <div className={`position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-${mode === 'light' ? 'dark' : 'light'}`}
                    style={{ background: 'rgba(0,0,0,0.6)', zIndex: 1050 }}>
                    <div className="bg-white p-3 rounded shadow" style={{ width: '90%', height: '90%' }}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0 text-black">Reading: {item.name}</h5>
                            <button
                                className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                                onClick={() => setShowPdf(false)}
                                style={{ borderRadius: '20px', padding: '5px 10px' }}
                            >
                                <IoMdCloseCircleOutline size={18} />
                                <span>Close</span>
                            </button>
                        </div>
                        <hr style={{ color: "black" }} />

                        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                            <Viewer
                                fileUrl={item.file}
                                plugins={[toolbarPluginInstance]}
                                renderToolbar={() => null}
                            />
                        </Worker>
                    </div>
                </div>
            )}


            {/* Modal */}
            {showModal && (
                <div
                    className={`position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center`}
                    style={{ background: 'rgba(0, 0, 0, 0.5)', zIndex: 1000 }}
                >
                    <div className="bg-white text-black p-4 rounded shadow" style={{ maxWidth: '400px', width: '100%' }}>
                        <h5 className="mb-3 text-black">Pay via QR Code</h5>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src="/qrcode.png" alt="QR Code" className="img-fluid mb-3" />
                        </div>
                        <input
                            type="tel"
                            className="form-control mb-3"
                            placeholder="Enter your GPay number"
                            value={gpayNumber}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d{0,10}$/.test(value)) {
                                    setGpayNumber(value);
                                }
                            }}
                            maxLength={10}
                        />
                        <button className="btn btn-success w-100" onClick={handleCreateOrder}>
                            Paid
                        </button>
                        <button className="btn btn-secondary w-100 mt-2" onClick={() => setShowModal(false)}>
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cards;
