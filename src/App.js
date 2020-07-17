import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import PhotoGallery from "./pages/PhotoGallery";

function App() {

    return (

            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/photo" component={PhotoGallery} />
                    <Route exact path="/Resume" component={Home} />
                </div>
            </Router>

    );
}

export default App;
