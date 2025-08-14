import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Home/Navbar";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const AdminPanel = ({ mode, toggleMode }) => {
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");

    const fetchOrders = async () => {
        try {
            const res = await axios.get("http://localhost:5001/order/all");
            setOrders(res.data);
        } catch (error) {
            console.error("Failed to fetch orders", error);
        }
    };

    const updateStatus = async (id, status) => {
        try {
            await axios.patch(`http://localhost:5001/order/status/${id}`, { status });
            fetchOrders();
        } catch (error) {
            console.error("Failed to update status", error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const filteredOrders = orders.filter(
        (order) =>
            order.email.toLowerCase().includes(search.toLowerCase()) ||
            order.noteName.toLowerCase().includes(search.toLowerCase()) ||
            order.gpayNumber.includes(search)
    );

    return (
        <>
            <Navbar mode={mode} toggleMode={toggleMode} />
            <div className={`container mt-4 text-${mode === 'light' ? 'dark' : 'light'}`}>
                <h3 className="mb-4">All Orders</h3>

                <div className="mb-3">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search by Email, Note, or GPay Number"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="card shadow">
                    <div className="table-responsive" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                        <table className="table table-hover table-bordered align-middle mb-0">
                            <thead className={`table-${mode === 'light' ? 'light' : 'dark'}`}>
                                <tr>
                                    <th>Sr No</th>
                                    <th>Email</th>
                                    <th>Note</th>
                                    <th>GPay Number</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.length === 0 && (
                                    <tr>
                                        <td colSpan="7" className="text-center py-4">
                                            No orders found.
                                        </td>
                                    </tr>
                                )}

                                {filteredOrders.map((order, index) => {
                                    let rowClass = "";
                                    if (order.status === "confirmed") rowClass = "table-success";
                                    else if (order.status === "rejected") rowClass = "table-danger";

                                    
                                    const orderDate = order.createdAt
                                        ? new Date(order.createdAt).toLocaleDateString("en-GB")
                                        : "N/A";

                                    return (
                                        <tr key={order._id} className={rowClass}>
                                            <td>{index + 1}</td> 
                                            <td>{order.email}</td>
                                            <td>{order.noteName}</td>
                                            <td>{order.gpayNumber}</td>
                                            <td>{orderDate}</td>
                                            <td>
                                                <span
                                                    className={`badge bg-${
                                                        order.status === "pending"
                                                            ? "warning"
                                                            : order.status === "confirmed"
                                                            ? "success"
                                                            : "danger"
                                                    }`}
                                                >
                                                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                                </span>
                                            </td>
                                            <td className="text-center">
                                                {order.status === "pending" ? (
                                                    <>
                                                        <button
                                                            className="btn btn-success btn-sm me-2"
                                                            title="Confirm Order"
                                                            onClick={() => updateStatus(order._id, "confirmed")}
                                                        >
                                                            <FaCheckCircle />
                                                        </button>
                                                        <button
                                                            className="btn btn-danger btn-sm"
                                                            title="Reject Order"
                                                            onClick={() => updateStatus(order._id, "rejected")}
                                                        >
                                                            <FaTimesCircle />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <em className="text-muted">No actions</em>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;
