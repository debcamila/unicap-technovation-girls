
import React from 'react';
import TopBar from '../components/TopBar';
import SlideComponent from '../components/SlideComponent';
import ApoioComponent from '../components/ApoioComponent';
import MentoresComponent from '../components/MentoresComponent';
import ProgramacaoComponent from '../components/ProgramacaoComponent';
import Footer from '../components/Footer';
import AboutComponent from '../components/AboutComponent';
import "./style.css";

export default (function HomePage() {
    return (
        <div className="homepage">
            <TopBar />
            <SlideComponent />
            <div className="container">
                <AboutComponent />
            </div>
            <ProgramacaoComponent />          
            <div className="container">
                <ApoioComponent />
            </div>
            <MentoresComponent />
            <Footer />
        </div>
    )
})