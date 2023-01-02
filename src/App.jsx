import React from 'react'
import './app.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ReactGA from 'react-ga';
ReactGA.initialize('G-DTNW0PWFKR');
ReactGA.pageview(window.location.pathname + window.location.search);


const App = () => {
  return (
  <div className='app'>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
  )
}

export default App