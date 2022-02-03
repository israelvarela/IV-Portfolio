import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import About from "./Pages/About";
import Contact from "./Pages/Contact.js";
import Projects from "./Pages/Projects.js";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={["/", "/about"]} >< About /></Route>
          <Route exact path="/projects" >< Projects /></Route>
          <Route exact path="/contact" >< Contact /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}



export default App;