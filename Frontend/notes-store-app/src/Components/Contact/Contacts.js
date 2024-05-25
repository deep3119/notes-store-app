import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import Contact from './Contact';



const Contacts = ({ mode , toggleMode ,localhost }) => {
    return (
        <>
            <Navbar mode={mode} toggleMode={toggleMode} />
            <Contact mode={mode} localhost={localhost}/>
            <Footer mode={mode} />
        </>
    )
}

export default Contacts
