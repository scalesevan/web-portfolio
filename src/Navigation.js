
import React from 'react';
import {
  Link,
} from "react-router-dom";

import './App.css';
import dolf from './assets/dolf-square.jpeg'

class Navigation extends React.Component {

    changeActive(){
        var elem = document.getElementById(this.props.currActive);
        elem.classList.add('active');
    }

    componentDidMount() {
        this.changeActive();
    }

    render() {
        return (
            <div class="menubar">
            
                <div class="header">
                    <img className="logo" src={dolf} alt="dolf"/>
                    <text className="title">Evan Scales</text>
                </div>
                <div class="menubar-right">
                    {/*<a  href="#home"><FontAwesomeIcon icon={faHome}/> Home</a>*/}
                    <Link id="home" to="/">Home</Link>
                    <a href="#resume">Resume</a>          
        
                    <div class="dropdown">
                    <button class="dropbtn" href="#projects"> Projects</button>
                    <div className="dropdown-content">
                        <a href="#project1">Project 1</a>
                        <a href="#project2">Project 2</a>
                        <a href="#project3">Project 3</a>
                    </div>
                    </div>
                    <Link id="photo" to="/photo" >Photo Gallery</Link>
                    <a href="#about">About</a>
        
                </div>
            </div>
        );
    }
}

export default Navigation;