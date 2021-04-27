import React from 'react';
import './landingPage.css';
import flash from "../../../src/assets/hero.png"

const Landing = () =>{
    return <div className="landing-container">
        <div className="landing-left">
            <h1 className="landing-header">Can you type....</h1>
            <h1>Fast</h1>
            <h1>Correct</h1>
        </div>
        <div className="landing-right">
            <img src={flash} alt="hero" className="flash-image"/>
        </div>
    </div>
}

export default Landing;