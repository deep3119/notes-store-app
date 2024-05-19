import React from 'react';
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer(props) {
    return (
        <>
            <div className={`bg-${props.mode} py-4`}>
                <div className={`container text-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <div className="row py-2">
                        <div className="col">
                            <nav className="d-flex justify-content-center">
                                <a href="" className={`mx-4 text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>About us</a>
                                <a href="" className={`mx-4 text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>Contact</a>
                                <a href="" className={`mx-4 text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>Jobs</a>
                                <a href="" className={`mx-4 text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}>Press kit</a>
                            </nav>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col">
                            <ul className='m-0 p-0 d-flex justify-content-center'>
                                <li style={{listStyle:'none'}}>
                                    <a style={{fontSize:'25px'}} href="" className={`mx-4 text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}><FaTwitter /></a>
                                </li>
                                <li style={{listStyle:'none'}}>
                                    <a style={{fontSize:'25px'}} href="" className={`mx-4 text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}><FaYoutube /></a>
                                </li>
                                <li style={{listStyle:'none'}}>
                                    <a style={{fontSize:'25px'}} href="" className={`mx-4 text-${props.mode === 'light' ? 'dark' : 'light'} text-decoration-none`}><FaFacebookF /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col">
                            Copyright © 2024 - All right reserved by Notes Store 
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
