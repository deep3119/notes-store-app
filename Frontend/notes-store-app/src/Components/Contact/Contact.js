import React from 'react'
import { IoIosSend } from "react-icons/io";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from 'react-hot-toast';

const Contact = ({ mode , localhost}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

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
        <div className={`container my-5 text-${mode === 'light' ? 'dark' : 'light'}`}>
            <div style={{ border: '1px solid', borderRadius: '20px' }} className='px-5 py-3'>
                <h1 className='text-center  py-3'>Contact Form</h1>
                <form id="contact_form" name="contact_form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-5 row">
                        <div className="col">
                            <label>First Name</label>
                            <input
                                type="text"
                                required=""
                                maxLength={50}
                                className={`form-control text-${mode === 'light' ? 'dark' : 'light'} bg-${mode === 'dark' ? 'secondary' : 'light'}`}
                                id="first_name"
                                name="first_name"
                                placeholder='Enter First Name'
                                style={{ fontWeight: '500' }}
                                {...register("firstName", { required: true })}
                            />
                            {errors.firstName && <span className='text-danger'>*This Firstname is required</span>}
                        </div>
                        <div className="col">
                            <label>Last Name</label>
                            <input
                                type="text"
                                required=""
                                maxLength={50}
                                className={`form-control text-${mode === 'light' ? 'dark' : 'light'} bg-${mode === 'dark' ? 'secondary' : 'light'}`}
                                id="last_name"
                                name="last_name"
                                placeholder='Enter Last Name'
                                style={{ fontWeight: '500' }}
                                {...register("lastName", { required: true })}
                            />
                            {errors.lastName && <span className='text-danger'>*This Lastname is required</span>}
                        </div>
                    </div>
                    <div className="mb-5 row">
                        <div className="col">
                            <label htmlFor="email_addr">Email address</label>
                            <input
                                type="email"
                                required=""
                                maxLength={50}
                                className={`form-control text-${mode === 'light' ? 'dark' : 'light'} bg-${mode === 'dark' ? 'secondary' : 'light'}`}
                                id="email_addr"
                                name="email"
                                placeholder="name@example.com"
                                style={{ fontWeight: '500' }}
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-danger'>*This email is required</span>}
                        </div>
                        <div className="col">
                            <label htmlFor="phone_input">Phone</label>
                            <input
                                type="tel"
                                required=""
                                maxLength={10}
                                className={`form-control text-${mode === 'light' ? 'dark' : 'light'} bg-${mode === 'dark' ? 'secondary' : 'light'}`}
                                id="phone_input"
                                name="Phone"
                                placeholder="Enter Phone Number"
                                style={{ fontWeight: '500' }}
                                {...register("phone", { required: true })}
                            />
                            {errors.phone && <span className='text-danger'>*This phone is required</span>}
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className={`form-control text-${mode === 'light' ? 'dark' : 'light'} bg-${mode === 'dark' ? 'secondary' : 'light'}`}
                            id="message"
                            name="message"
                            rows={5}
                            defaultValue={""}
                            placeholder="Message"
                            style={{ fontWeight: '500' }}
                            {...register("message", { required: true })}
                        />
                        {errors.message && <span className='text-danger'>*This message is required</span>}
                    </div>
                    <button style={{ fontWeight: '500', margin: 'auto auto', display: 'block' }} type="submit" className="btn my-3 btn-primary px-4 btn-lg">
                        Send &nbsp;
                        <IoIosSend />
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Contact
