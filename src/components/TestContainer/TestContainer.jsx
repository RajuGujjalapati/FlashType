import React from 'react';
import "./TestContainer.css"
import Tryagain from "../TryAgain/TryAgain"
const TestContainer = ({words, characters, wpm}) =>{
    return(
        <div className="test-container">
            <div className="try-again-con">
                < Tryagain words={words} characters = {characters} wpm = {wpm}/>
            </div>
        </div>
    )
}

export default TestContainer;