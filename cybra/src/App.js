import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./components/en/contact";
import Navbar from "./components/en/navbar";
import Services from "./components/en/services";
import Index from "./components/en/index";
import IT from "./components/en/it";
import Software from "./components/en/software";
import Web from "./components/en/web";
import WebQuestionnaire from "./components/en/web-questionnaire";
import OldWeb from "./components/en/old-web";



class App extends Component {
  render() {
    return (  
      <BrowserRouter>
        
        <Route exact path="/" component={Index} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/it" component={IT} />
        <Route path="/software" component={Software} />
        <Route path="/web" component={Web} />
        <Route path="/web-questionnaire" component={WebQuestionnaire} />
        <Route path="/old-web" component={OldWeb} />
        
      </BrowserRouter>
    );
  }
}

export default App;
