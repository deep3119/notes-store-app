import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Signup = ({ mode }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data);

    const inputStyle = {
        outline: 'none',
        fontWeight: '500',
        border: '1px solid'
    }
    return (
        <div className={`bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}>
            <div style={{ height: '100vh' }} className="container align-items-center d-flex justify-content-center">
                <div className="px-5 py-3" style={{ border: '1px solid', boxShadow: '0 0 9px grey', borderRadius: '20px' }}>
                    <div className=" modal-dialog">
                        <div className="modal-content">
                            <div className="d-flex align-items-center justify-content-between py-3">
                                <h4 className="modal-title">Sign up</h4>
                                <Link to={'/'} type="button" className={`btn-close carousel-dark bg-${mode === 'light' ? 'dark' : 'light'}`} ></Link>
                            </div>
                            <hr className='m-0 p-0' />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="modal-body py-3">
                                    <div className='py-2 px-3'>
                                        <span>Name:</span>
                                        <br />
                                        <input type="text"
                                            className={`w-100 form-control px-3 shadow-none bg-${mode === 'light' ? 'light' : 'secondary'} text-${mode === 'light' ? 'dark' : 'light'}`}
                                            placeholder='Enter your fullname'
                                            style={inputStyle}
                                            {...register("name", { required: true })}
                                        />
                                        {errors.name && <span className='text-danger'>*This name is required</span>}
                                    </div>

                                    <div className='py-2 px-3'>
                                        <span>Email:</span>
                                        <br />
                                        <input type="email"
                                            className={`w-100 form-control px-3 shadow-none bg-${mode === 'light' ? 'light' : 'secondary'} text-${mode === 'light' ? 'dark' : 'light'}`}
                                            placeholder='Enter your Email'
                                            style={inputStyle}
                                            {...register("email", { required: true })}
                                        />
                                        {errors.email && <span className='text-danger'>*This email is required</span>}
                                    </div>

                                    <div className='py-2 px-3'>
                                        <span>Password:</span>
                                        <br />
                                        <input type="password"
                                            className={`w-100 form-control px-3 shadow-none bg-${mode === 'light' ? 'light' : 'secondary'} text-${mode === 'light' ? 'dark' : 'light'}`}
                                            placeholder='Enter your Password'
                                            style={inputStyle}
                                            {...register("password", { required: true })}
                                        />
                                        {errors.password && <span className='text-danger'>*This password is required</span>}
                                    </div>
                                </div>
                                <hr className='m-0 p-0' />
                                <div className="modal-footer d-flex justify-content-between py-3">
                                    <button type="submit" style={{ fontWeight: '500' }} className="btn btn-outline-success">Signup</button>
                                    <p>
                                        Have account?{" "}
                                        <Link to={'/'} style={{ fontWeight: '500' }}>
                                            Login
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
