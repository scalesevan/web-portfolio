
import React from 'react';
import {
  Link,
} from "react-router-dom";

import '../assets/stylesheets/App.css';
import dolf from '../assets/images/dolf-square.jpeg'

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
                    <Link id="resume" to="/resume">Resume</Link>    
                    {/*
                    <Link to="/about#projects">Proj</Link>     
                    <a href="/about#projects">Projects</a>
                    
                    <div class="dropdown">
                        <button class="dropbtn" href="#projects"> Projects</button>
                        <div className="dropdown-content">
                            <a href="#project1">Habitat App</a>
                            <a href="#project2">This Website</a>
                        </div>
                    </div> */}

                    <Link id="photo" to="/photo" >Photos</Link>
                    {/*<a href="/#about">About</a> */}
                    <Link id="about" to="/about" >About</Link>
        
                </div>
            </div>
        );
    }
}

export default Navigation;