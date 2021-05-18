import React from 'react';
import Nav from "../Nav/Nav"
import Landing from "../LandingPage/LandingPage"
import Footer from "../Footer/Footer"
import "./App.css"
import {SAMPLE_PARAGRAPHS} from "./../../data/SampleData"
import ChallengeSection from '../ChallengeSection/ChallengeSection'
const TotalTime = 60;
const serviceUrl = "https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text"
const DefaultState = {
  selectedParagraph:"",
  timeStarted:false,
  timeRemaining: TotalTime,
  words:0,
  characters:0,
  wpm:0,
  testInfo: [],
};
class MyApp extends React.Component{
  state = DefaultState;
  // // Life cycle methods
  fetchNewParagraphFallback = () => {
    const data = SAMPLE_PARAGRAPHS[ Math.floor(Math.random()* SAMPLE_PARAGRAPHS.length)]
      const selectedParagraphArray = data.split("");
      const testInfo = selectedParagraphArray.map((selectedLetter) => 
      {
      return {
        testLetter: selectedLetter,
        status : "notAttempted",
      };
  }
  );
  this.setState({...DefaultState, testInfo, selectedParagraph: data});
// if the key and value has same name we can use single name as well.
  };

  fetchNewParagraph = () => {
    fetch(serviceUrl).then(response => response.text())
    .then(data => {
      const selectedParagraphArray = data.split("");
      const testInfo = selectedParagraphArray.map((selectedLetter) => 
      {
      return {
        testLetter: selectedLetter,
        status : "notAttempted",
      };
  }
  );
  this.setState({...DefaultState, testInfo, selectedParagraph: data});
// if the key and value has same name we can use single name as well.
  });
  }
  componentDidMount(){
    this.fetchNewParagraphFallback();
  }
    


  startTime = () =>{
    this.setState({timeStarted : true});
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0){
        //change the wpm
        const timespent = TotalTime - this.state.timeRemaining;
        const wpm = timespent > 0 
        ? (this.state.words / timespent) * TotalTime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining -1,
          wpm : parseInt(wpm)
        });
        
      }
      else {
        clearInterval(timer);
      }
    }, 1000);
  }

  startAgain = () => this.fetchNewParagraphFallback();
  handleUserInput = (inputValue)=>{
    console.log(inputValue)
    if (! this.state.timeStarted)
    {this.startTime()};
    const characters = inputValue.length;
        const words = inputValue.split(" ").length;
        const index = characters - 1;

        if (index < 0) {
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notAttempted",
                    },
                    ...this.state.testInfo.slice(1),
                ],
                characters,
                words,
            });

            return;
        }

        if (index >= this.state.selectedParagraph.length) {
            this.setState({
                characters,
                words,
            });
            return;
        }

        // Make a copy
        const testInfo = this.state.testInfo;
        if (!(index === this.state.selectedParagraph.length - 1))
            testInfo[index + 1].status = "notAttempted";

        // Check for mistake
        const isMistake = inputValue[index] === testInfo[index].testLetter;

        // Update the testInfo
        testInfo[index].status = isMistake ? "correct" : "incorrect";

        // Update the state
        this.setState({
            testInfo,
            words,
            characters,
        });

  }

 

  render(){
    // if we keep life cycle method in this render(), it will call multiple times
    // which going to affect the performance of code.
    // console.log(this.state.testInfo)
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
       timeStarted = {this.state.timeStarted}
       testInfo = {this.state.testInfo}
       onInputChange = {this.handleUserInput} 
       startAgain = {this.startAgain}/>
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
