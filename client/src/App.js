import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import OtherPage from "./pages/OtherPage";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Link to="/">Home</Link>
            <Link to="/other">Other</Link>
          </header>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/other" component={OtherPage} />
        </div>
      </Router>
    );
  }
}

export default App;
