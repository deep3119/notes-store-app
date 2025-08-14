import React from 'react'
import { IoIosSend } from "react-icons/io";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from 'react-hot-toast';

const Contact = ({ mode, localhost }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const inputStyle = () => ({
        backgroundColor: mode === 'light' ? '#fff' : '#495057',
        color: mode === 'light' ? '#000' : '#fff',
        border: '1px solid #ced4da',
        borderRadius: '10px',
        padding: '10px 15px',
        fontWeight: '500',
        outline: 'none',
        transition: 'all 0.2s ease-in-out'
    });


    const onSubmit = async (data) => {
        const userInfo = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            message: data.message
        }
        await axios.post(`http://${localhost}:5001/contact`, userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('"Message Sent Successfully"!');
                    setTimeout(() => {

                        window.location.reload();
                    }, 1000)
                }
            }).catch((err) => {
                if (err.response) {
                    console.log(err.message);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };

    return (
        <div
            className={`container my-5 ${mode==="light"?"lighto":"darko"}`}
            style={{
                color: mode === 'light' ? '#212529' : '#f8f9fa',
            }}
        >
            <div
                className="p-5"
                style={{
                    borderRadius: '20px',
                    background: mode === 'light'
                        ? 'rgba(255, 255, 255, 0.9)'
                        : 'rgba(33, 37, 41, 0.85)',
                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 8px 32px',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgb(221, 221, 221)',
                    transition: 'all 0.3s ease-in-out'
                }}
            >
                <h1 className="text-center mb-4 fw-bold" style={{ color: 'rgb(214, 51, 132)' }}>Get in Touch</h1>

                <form id="contact_form" name="contact_form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mb-4">
                        <div className="col">
                            <label className="mb-2 fw-semibold">First Name</label>
                            <input
                                type="text"
                                placeholder="John"
                                className="form-control"
                                style={inputStyle()}
                                {...register("firstName", { required: true })}
                            />
                            {errors.firstName && <span className="text-danger small">*Required</span>}
                        </div>
                        <div className="col">
                            <label className="mb-2 fw-semibold">Last Name</label>
                            <input
                                type="text"
                                placeholder="Doe"
                                className="form-control"
                                style={inputStyle()}
                                {...register("lastName", { required: true })}
                            />
                            {errors.lastName && <span className="text-danger small">*Required</span>}
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                            <label className="mb-2 fw-semibold">Email</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="form-control"
                                style={inputStyle()}
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-danger small">*Required</span>}
                        </div>
                        <div className="col">
                            <label className="mb-2 fw-semibold">Phone</label>
                            <input
                                type="tel"
                                placeholder="1234567890"
                                className="form-control"
                                style={inputStyle()}
                                {...register("phone", { required: true })}
                            />
                            {errors.phone && <span className="text-danger small">*Required</span>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="mb-2 fw-semibold">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Write your message here..."
                            className="form-control"
                            style={inputStyle()}
                            {...register("message", { required: true })}
                        ></textarea>
                        {errors.message && <span className="text-danger small">*Required</span>}
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-primary px-4 py-2 fw-semibold"
                            style={{
                                borderRadius: '8px',
                                fontSize: '1rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                backgroundColor: '#0d6efd',
                                border: 'none',
                                transition: 'background 0.3s ease'
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#0b5ed7')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#0d6efd')}
                        >
                            Send <IoIosSend style={{ fontSize: '1.2rem' }} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Contact
