import React from 'react';
import './TypingChallengeContainer.css'
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard"
import TypingChallenge from "../TypingChallenge/TypingChallenge"

const TypingChallengeContainer = ({selectedParagraph, 
    timeStarted,timeRemaining, words, characters, wpm}) => {
    return (
    <div className="typing-challenge-container">
        {/* Details Section */}
        <div className="details-container">
            {/* words tyoed */}
          
            <ChallengeDetailsCard  cardName="words" cardValue={words}/>

            {/* characters typed */}

            <ChallengeDetailsCard  cardName="characters" cardValue={characters}/>


            {/* speed */}
            <ChallengeDetailsCard  cardName="wpm" cardValue={wpm}/>

        </div>
        {/* The real challenge */}
        <div className="typewriter-challenge">
            {/* <p>This is the real challenge</p> */}
            < TypingChallenge timeRemaining={timeRemaining} timeStarted={timeStarted} selectedparagraph={selectedParagraph}/>
        </div>
    </div>
    )
}

export default TypingChallengeContainer;