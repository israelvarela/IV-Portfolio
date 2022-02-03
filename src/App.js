import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import About from "./Pages/About";
import Contact from "./Pages/Contact.js";
import Projects from "./Pages/Projects.js";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/, /about" element={About} />
          <Route exact path="/projects" element={Projects} />
          <Route exact path="/contact" element={Contact} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



export default App;