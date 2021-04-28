import React from 'react';
import './landingPage.css';
import flash from "../../../src/assets/hero.png";
import Typewriter from 'typewriter-effect';

const Landing = () =>{
    return <div className="landing-container">
        <div data-aos="fade-up" className="landing-left">
            <p className="landing-header">Can you type....</p>
            <div className="typewriter-container">
            <Typewriter
            options={{
                strings: ['Fast', 'Correct?', 'Quick?'],
                autoStart: true,
                loop: true,
            }}
            />
            </div>

        </div>
        <div className="landing-right">
            <img data-aos="fade-down" src={flash} alt="hero" className="flash-image"/>
        </div>
    </div>
}

export default Landing;