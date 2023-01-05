import React, { useEffect } from "react";
import "./app.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ReactGA from 'react-ga';

const trackingID = "G-DTNW0PWFKR";
ReactGA.initialize(trackingID);

const App = () => {

  useEffect(()=> {
    ReactGA.pageview(window.location.pathname)
  }, [])
  
  return (
    <div className="app">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
