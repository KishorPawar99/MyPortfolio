import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Aos from 'aos'
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
