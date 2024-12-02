import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = ({children}) => (
  <div>
    <Navbar />
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
