import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import PhotoGallery from "./pages/PhotoGallery";
import Resume from "./pages/Resume";
import About from "./pages/About"

function App() {

    return (

            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <Route exact path={"/"} component={Home} />
                    <Route exact path={"/photo"} component={PhotoGallery} />
                    <Route exact path={"/resume"} component={Resume} />
                    {/*<Route path="/#about" /> */}
                    <Route exact path={"/about"} component={About} />
                </div>
            </Router>

    );
}

export default App;
