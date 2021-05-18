import React from 'react';
import Nav from "../Nav/Nav"
import Landing from "../LandingPage/LandingPage"
import Footer from "../Footer/Footer"
import "./App.css"
import ChallengeSection from '../ChallengeSection/ChallengeSection'
const TotalTime = 60;
const serviceUrl = "https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text"
class MyApp extends React.Component{
  state = {
    selectedParagraph:"Hello World",
    timeStarted:false,
    timeRemaining: TotalTime,
    words:0,
    characters:0,
    wpm:0,
    testInfo: [],
  };
  // // Life cycle methods
  componentDidMount(){
  //   fetch(serviceUrl).then(response => response.text())
  //   .then(data => {
  //     console.log(data);
  //     this.setState({selectedParagraph: data});
  //   });
  const selectedParagraphArray = this.state.selectedParagraph.split("");
  const testInfo = selectedParagraphArray.map((selectedLetter) =>{
    return {
      testLetter: selectedLetter,
      status : "notAttempted",
    };
  });
  this.setState({testInfo});// if the key and value has same name we can use single name as well.
  }


  startTime = () =>{
    this.setState({timeStarted : true});
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0){
        this.setState({
          timeRemaining: this.state.timeRemaining -1,
        });
        
      }
      else {
        clearInterval(timer);
      }
    }, 1000);
  }


  handleUserInput = (inputValue)=>{
    console.log(inputValue)
    if (! this.state.timeStarted)
    {this.startTime()};

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
       onInputChange = {this.handleUserInput} />
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
