import React from 'react';
import './App.css';
import portrait from './assets/portrait-square.jpeg'
import dolf from './assets/dolf-square.jpeg'

function App() {
  return (
    <div className="App">
      
      {/*<div><text className="header">Evan Scales</text></div>*/}

      <div class="menubar">
        
          <img className="logo" src={dolf} alt="dolf"/>
          <text className="title">Evan Scales</text>
        

        <div class="menubar-right">
          <a class="active" href="#home">Home</a>
          
          <a href="#resume">Resume</a>
          
          <div class="dropdown">
            <button class="dropbtn" href="#projects"> Projects</button>
            <div className="dropdown-content">
              <a href="#project1">Project 1</a>
              <a href="#project2">Project 2</a>
              <a href="#project3">Project 3</a>
            </div>
          </div>
          <a href="#resume">Photo Gallary</a>

          <a href="#about">About</a>
        </div>
      </div>
      <img className="portrait" src={portrait} alt="portrait"/>
       
      <div style={{"margin-top": '210px', padding:'15px 15px 2500px', 'font-size':'30px'}}>
        <p><b>This example demonstrates how to shrink a navigation bar when the user starts to scroll the page.</b></p>
        <p>Scroll down this frame to see the effect!</p>
        <p>Scroll to the top to remove the effect.</p>
        <p><b>Note:</b> We have also made the navbar responsive, resize the browser window to see the effect.</p>
        <p>Lorem ipsum dolor dummy text to enable scrolling, sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div> 



      
       {/*<div class="container">
        <div><img className="portrait" src={portrait} alt="portrait"/></div>
        <div class="overlay">
          <div class="text">Evan Scales</div>
        </div>
  </div>*/}

      {/*<div class="box">
        <div>One</div>
        <div>Two</div>
        <div class="selected">Three</div>
        <div>Four</div>
    </div>*/}
    </div>



       /*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */
  ); 
}

export default App;
