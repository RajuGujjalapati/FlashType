import React from 'react';
import Nav from "../Nav/Nav"
import Landing from "../LandingPage/LandingPage"
import "./App.css"

class MyApp extends React.Component{
  render(){
    return (
      <div className="app">
        {/* Nav Section */}
        <Nav />
        {/* Landing Page */}
        <Landing />
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
