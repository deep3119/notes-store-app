import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
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
                                <p className='p-0 m-0'>Not registerd? <Link to={'/Signup'}>Signup</Link></p>
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
