import React from 'react';
import './TypingChallengeContainer.css'
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard"
const TypingChallengeContainer = ({words, characters, wpm}) => {
    return (
    <div className="typing-challenge-container">
        {/* Details Section */}
        <div className="details-container">
            {/* words tyoed */}
          
            <ChallengeDetailsCard  cardName="words" cardValue={words}/>
            {/* <p>1</p> */}

            {/* characters typed */}
            <ChallengeDetailsCard  cardName="characters" cardValue={characters}/>

            {/* <p>2</p> */}

            {/* speed */}
            <ChallengeDetailsCard  cardName="wpm" cardValue={wpm}/>

            {/* <p>4</p> */}
        </div>
        {/* The real challenge */}
        <div className="typewriter-challenge">
            <p>This is the real challenge</p>
        </div>
    </div>
    )
}

export default TypingChallengeContainer;