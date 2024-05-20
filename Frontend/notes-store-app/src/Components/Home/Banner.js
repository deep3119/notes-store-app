import React from 'react';
import { IoMdMail } from "react-icons/io";
import banner from "../../images/banner.png";

const Banner=({mode}) =>{
    return (
        <>
            <div className={`container  text-${mode === 'light' ? 'dark' : 'light'}`}>
                <div className="d-flex flex-column flex-md-row">
                    <div className="left col w-100  md-w-50">
                        <div className="my-5">
                            <h1 className={`text-4xl py-2 text-${mode === 'light' ? 'dark' : 'light'}`}>Hello, welcome here to learn somethig <br />
                                <span className='' style={{ color: '#d63384' }}> new everyday!!!</span>
                            </h1>
                            <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Esse, sapiente laborum. Similique facilis repellendus enim quia.
                                Voluptatum accusantium sit qui.</p>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <button style={{cursor:'pointer' , border:'1px solid'}} className={`btn btn-outline-secondary bg-${mode} text-${mode==='light'?'dark':'light'}`} type="button"><IoMdMail /></button>
                                </div>
                                <input style={{border:'1px solid'}} type="text" className={`form-control bg-${mode==='light'?'light':'secondary'} text-${mode==='light'?'dark':'light'}`} placeholder="Enter your email to login" aria-label="" aria-describedby="basic-addon1" />
                            </div>
                            <button type="button" style={{backgroundColor:'#d63384' , fontWeight : '500'}} className={`btn my-3 text-${mode==='light'?'light':'light'}`}>Get Started</button>
                        </div>
                    </div>
                    <div className="right col w-100  md-w-50">
                        <img style={{width:'100%'}} src={banner} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
