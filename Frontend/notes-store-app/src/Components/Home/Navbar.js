import React from 'react'
import '../../Style/Navbar.css';
import { IoSearch } from "react-icons/io5";
import darkImg from "../../images/dark.png";
import lightImg from "../../images/light.png";
import Login from '../Login';
import Button from 'react-bootstrap/Button';
import Logout from '../Logout';
import { useAuth } from '../../Context/AuthProvider';

const Navbar = ({ toggleMode, mode }) => {

    const [authuser, setAuthuser] = useAuth()

    const [modalShow, setModalShow] = React.useState(false);
    return (
        <nav className={`navbar sticky-top navbar-expand-lg navbar-${mode} bg-${mode}`}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    Notes Store
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Course">
                                Course
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <div className="input-group mx-2">
                            <input type="text" style={{ border: '1px solid', outline: 'none' }} className={`form-control bg-${mode === 'light' ? 'light' : 'secondary'} text-${mode === 'light' ? 'dark' : 'light'}`} placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className={`input-group-text bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`} style={{ border: '1px solid', cursor: 'pointer' }} id="basic-addon2"><IoSearch /></span>
                        </div>
                        <button className={`btn btn-outline-${mode === 'light' ? 'dark' : 'light'} bg-${mode} text-${mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={toggleMode} type="button">
                            <img style={{ width: '30px' }} src={mode === 'light' ? darkImg : lightImg} alt="" />
                        </button>

                        {
                            authuser ? <Logout /> :
                                <div className="">

                                    <Button style={{ padding: '10px 12px', fontWeight: '500' }} variant="outline-success" onClick={() => setModalShow(true)}>
                                        Login
                                    </Button>

                                    <Login
                                        show={modalShow}
                                        mode={mode}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                        }
                    </form>
                </div>
            </div>
        </nav>


    )
}

export default Navbar;
