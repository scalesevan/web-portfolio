import React from "react";
import "../App.css"

import Navigation from '../Navigation';

function PhotoGallery() {
    return (
        <>
            <Navigation currActive={"photo"}/>
            <h1>Home</h1>
            <button>Sign Out</button>
        </>
    )
};

export default PhotoGallery;