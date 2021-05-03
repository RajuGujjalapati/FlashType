import React from 'react';
import "./TestContainer.css";
import Tryagain from "../TryAgain/TryAgain";
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
// const TimeRemaining = 1;
const TestContainer = ({selectedParagraph, 
    timeStarted,timeRemaining, words, characters, wpm}) =>{
    return(
        <div className="test-container">
            {
                timeRemaining > 0 ? (<div data-aos="fade-up" className="typing-challenge-cont">
                {/* <h1>This is Test</h1> */}
                < TypingChallengeContainer selectedParagraph={selectedParagraph} 
                        timeStarted = {timeStarted}
                        timeRemaining = {timeRemaining}
                        words={words} 
                        characters={characters} 
                        wpm={wpm} />
            </div>) : (<div className="try-again-con">
                < Tryagain words={words} characters = {characters} wpm = {wpm}/>
            </div>)
            }
        </div>
    )
};

export default TestContainer;