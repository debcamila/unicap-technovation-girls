
import React from 'react';
import SlideComponent from '../components/SlideComponent';
import ApoioComponent from '../components/ApoioComponent';
import MentoresComponent from '../components/MentoresComponent';
import Footer from '../components/Footer';
import AboutComponent from '../components/AboutComponent';
import NavBar from '../components/NavBar';
import "./style.css";

export default (function HomePage() {
    return (
        <div className="homepage">
            <NavBar />
            <SlideComponent />
            <div className="container">
                <AboutComponent />
            </div>
            <MentoresComponent />
            <div className="container">
                <ApoioComponent />
            </div>
            <Footer />
        </div>
    )
})