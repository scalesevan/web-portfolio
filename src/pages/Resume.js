import React from "react";
import "../assets/stylesheets/App.css"

import Navigation from '../visible/Navigation';
import Social from '../visible/Social';

function Resume() {
    
    return (  
        
        <div>  
            <Navigation currActive={"resume"}/>
            <iframe title="Resume" class="resume" src="https://drive.google.com/file/d/1tNeTVyuXPyb34gYehUvgDCMlHD2bBXF_/preview" />
            <Social/>
        </div>  
    ); 
    
};



export default Resume;