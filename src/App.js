import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Login from "./page/Login";
import LandingPage from "./components/LandingPage";

import Dashboard from "./page/Dashboard";
import Berita from "./page/Berita";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="" element={<Dashboard />} />
            <Route path="berita" element={<Berita />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}
