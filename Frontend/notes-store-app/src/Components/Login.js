import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

import toast from 'react-hot-toast';


const Login = (props ,localhost) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios.post(`http://${props.localhost}:5001/user/login`, userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Login Successfully!');
                    setTimeout(() => {
                        localStorage.setItem("Users", JSON.stringify(res.data.user));
                        window.location.reload();
                    }, 1000);
                }
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                    setTimeout(() => {
                        
                    }, 2000);
                }
            });
    }
    return (
        <div className=''>
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className=''
            >
                <Modal.Header closeButton>
                    <Modal.Title className='' id="contained-modal-title-vcenter">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=''>
                            <div className='py-3'>
                                <span>Email:</span>
                                <br />
                                <input type="email"
                                    className='w-100 px-3 shadow-none'
                                    placeholder='Enter your Email'
                                    {...register("email", { required: true })}
                                    style={{ outline: 'none' }} />
                                {errors.email && <span className='text-danger'>*This email is required</span>}
                                <br />
                            </div>

                            <div className='py-3'>
                                <span>Password:</span>
                                <br />
                                <input type="password"
                                    className='w-100 px-3 shadow-none'
                                    placeholder='Enter your Password'
                                    {...register("password", { required: true })}
                                    style={{ outline: 'none' }} />
                                {errors.password && <span className='text-danger'>*This password is required</span>}
                                <br />
                            </div>

                            <hr />

                            <div className='py-2 d-flex justify-content-between align-items-center'>
                                <button style={{ fontWeight: '500' }} type='submit' className='btn px-3 btn-outline-success'>Login</button>
                                <p className='p-0 m-0'>Not registerd? <Link to={'/Signup'} localhost={localhost}>Signup</Link></p>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                {/* <Modal.Footer> */}
                {/* <Button onClick={props.onHide}>Close</Button> */}
                {/* </Modal.Footer> */}
            </Modal>
        </div>
    );
}

export default Login
