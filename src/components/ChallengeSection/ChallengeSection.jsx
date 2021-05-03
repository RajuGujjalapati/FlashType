import React from 'react';
import './ChallengeSection.css';
import TestCon from '../TestContainer/TestContainer'
const ChallengeSection =({selectedParagraph, 
    timeStarted,timeRemaining, words, characters, wpm}) =>{
    return(
        <div className="challenge-section-container">
            <h1 data-aos="zoom-in-up" className="challenge-section-header">
                Take a speed test Now!
            </h1>
            < TestCon selectedParagraph={selectedParagraph} 
                timeStarted={timeStarted}
                timeRemaining={timeRemaining} 
                words={words} 
                characters={characters} 
                wpm={wpm}/>
        </div>
    )
}

export default ChallengeSection;