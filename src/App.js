import React, { Component } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Contact } from "./Contact";
import { About } from "./About";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { Portfolio } from "./Portfolio";
import myJson from "./projects.json";
import Dots from "./Dots";

class App extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    this.mounted = true;
    if (this.mounted) {
      this.setState({
        projects: myJson.projects,
      });
    }
  }

  render() {
    console.log(this.state.projects);
    return (
      <div className="App">
        <NavBar />
        <Dots />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/portfolio"
            element={<Portfolio projects={this.state.projects} />}
          />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
