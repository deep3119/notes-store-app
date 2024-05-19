import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import Course from './Course';


const Courses=({mode ,toggleMode})=> {
    
    return (
        <>
            <Navbar mode={mode} toggleMode={toggleMode}/>
            <Course mode={mode}/>
            <Footer mode={mode}/>
        </>
    )
}

export default Courses
