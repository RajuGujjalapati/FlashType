import React from 'react';
import './ChallengeSection.css';
import TestCon from '../TestContainer/TestContainer'
const ChallengeSection =() =>{
    return(
        <div className="challenge-section-container">
            <h1 data-aos="zoom-in-up" className="challenge-section-header">
                Take a speed test Now!
            </h1>
            < TestCon words={4} characters={14} wpm={9}/>
        </div>
    )
}

export default ChallengeSection;