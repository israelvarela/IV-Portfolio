import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
// import Home from "/";
import About from "./Pages/About";
import Contact from "./Pages/Contact.js";
import Projects from "./Pages/Projects.js";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// basename={process.env.PUBLIC_URL}

function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/,  /about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



export default App;