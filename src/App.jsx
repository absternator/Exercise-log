import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import components
import Navbar from "./components/Navbar";
import ExersizeList from "./components/ExersizeList";
import EditExersize from "./components/EditExersize";
import CreateExersize from "./components/CreateExersize";
import CreateUser from "./components/CreateUser";


function App() {
  return (
    <Router>
      <br />
      <Navbar />
      <Route path="/" exact component={ExersizeList} />
      <Route path="/edit/:id" component={EditExersize} />
      <Route path="/create" component={CreateExersize} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
