import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import { Switch, Route, Link , Redirect} from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
    <Navbar />
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/service">Service</Link> */}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
};
export default App;
