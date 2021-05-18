import React from 'react';
import './TypingChallengeContainer.css'
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard"
import TypingChallenge from "../TypingChallenge/TypingChallenge"

const TypingChallengeContainer = ({selectedParagraph, 
    timeStarted,timeRemaining, 
    words, 
    characters,
     wpm, 
     testInfo,
     onInputChange}) => {
    return (
    <div className="typing-challenge-container">
        {/* Details Section */}
        <div className="details-container">
            {/* words typed */}
          
            <ChallengeDetailsCard  cardName="words" cardValue={words}/>

            {/* characters typed */}

            <ChallengeDetailsCard  cardName="characters" cardValue={characters}/>


            {/* speed */}
            <ChallengeDetailsCard  cardName="wpm" cardValue={wpm}/>

        </div>
        {/* The real challenge */}
        <div className="typewriter-challenge">
            {/* <p>This is the real challenge</p> */}
            < TypingChallenge  
            testInfo = {testInfo} 
            timeRemaining={timeRemaining} 
            timeStarted={timeStarted} 
            selectedparagraph={selectedParagraph}
            onInputChange = {onInputChange}/>
        </div>
    </div>
    )
}

export default TypingChallengeContainer;