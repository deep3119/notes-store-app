import React from 'react';
import Navbar from '../Home/Navbar';
import Banner from '../Home/Banner';
import Footer from '../Home/Footer';
import Freebook from '../Home/Freebook';

const Home = ({mode , toggleMode ,localhost})=> {
    return (
        <>
            <>
                <Navbar mode={mode} toggleMode={toggleMode} localhost={localhost}/>
                <Banner mode={mode} />
                <Freebook mode={mode} localhost={localhost}/>
                <Footer mode={mode} />
            </>
        </>
    )
}

export default Home
