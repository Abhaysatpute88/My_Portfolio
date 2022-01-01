import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Project from "./Component/Project";
import Navbar from "./Component/Navbar";

function App() {
  return(
    <>
      <BrowserRouter>
           <Navbar/>
           <Route exact path="/" component={Home}/>
           <Route exact path="/About" component={About}/>
           <Route exact path="/Contact" component={Project}/>
           <Route exact path="/Project" component={Contact}/>
      </BrowserRouter>
    </>
  )
}

export default App
