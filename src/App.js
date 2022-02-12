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
           <Route exact path="/My_Portfolio" component={Home}/>
           <Route exact path="/About" component={About}/>
           <Route exact path="/Project" component={Project}/>
           <Route exact path="/Contact" component={Contact}/>
      </BrowserRouter>
    </>
  )
}

export default App
