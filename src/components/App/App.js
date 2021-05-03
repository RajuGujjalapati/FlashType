import React from 'react';
import Nav from "../Nav/Nav"
import Landing from "../LandingPage/LandingPage"
import Footer from "../Footer/Footer"
import "./App.css"
import ChallengeSection from '../ChallengeSection/ChallengeSection'
const TotalTime = 16;
const serviceUrl = "https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text"
class MyApp extends React.Component{
  state = {
    selectedParagraph:"Hello World",
    timeStarted:false,
    timeRemaining: TotalTime,
    words:0,
    characters:0,
    wpm:0,
  }
  render(){
    // fetch(serviceUrl).then(response => response.text())
    // .then(information => {
    //   console.log("API Response:", information)
    // });
    return (
      <div className="app">
        {/* Nav Section */}
        <Nav />
        {/* Landing Page */}
        <Landing />
      {/* Challenge Section */}
      < ChallengeSection 
      selectedParagraph = {this.state.selectedParagraph}
      words = { this.state.words}
       characters = { this.state.characters }
       wpm = {this.state.wpm}
       timeRemaining = {this.state.timeRemaining}
       timeStarted = {this.state.timeStarted}/>
      {/* Footer Section */}
        <Footer/>
      </div>
    ) 
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default MyApp;
