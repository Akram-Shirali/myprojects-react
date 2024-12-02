import React from "react";
import "./App.css";
// import Navbar from "./Components/Navbar/Navbar.js";
import Layout from "./Components/Layout/Layout.jsx";
import Products from "./Components/Products/Products.jsx";
import About from "./Components/About/About.jsx";
import Home from "./Components/Home/Home.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Layout>
                <Products />
              </Layout>
            }
          />
          {/* <Navbar />  */}

          <Route
            path="/About"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          <Route
            path="/Home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route
            path="/Contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
