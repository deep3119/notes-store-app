import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import Course from './Course';


const Courses=({mode ,toggleMode , localhost})=> {
    
    return (
        <>
            <Navbar mode={mode} toggleMode={toggleMode}/>
            <Course mode={mode} localhost={localhost}/>
            <Footer mode={mode}/>
        </>
    )
}

export default Courses
