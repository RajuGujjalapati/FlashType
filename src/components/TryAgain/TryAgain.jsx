import React from 'react';
import './TryAgain.css'

const TryAgain = ({words, characters, wpm}) =>{
    return(
        <div className="try-again-container">
            <h1>Test Result</h1>
            <div className="result-container">
                <p>
                    <b>Characters:</b> {characters}
                </p>
                <p>
                <b>WPM:</b> {wpm}
                </p>
                <p>
                <b>Speed:</b> {words} wpm
                </p>
        <button className="end-buttons start-again-btn"> Re-Try</button>
        <button 
        onClick = {
            () => {
                window.open(
                    "https://facebook.com",
                    "GoogleCheck",
                    "width=800, height=600"
                );
            }
        } className="end-buttons share-btn"> Share</button>
        <button 
        onClick = {
            () => {
                window.open(
                    "https://twitter.com",
                    "GoogleCheck",
                    "width=800, height=600"
                );
            }
        }
            className="end-buttons tweet-btn"> Tweet</button>
        </div>

        </div>
    )
}

export default TryAgain;