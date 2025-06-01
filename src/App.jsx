import './App.css'
import About from './Companent/About'
import Home from './Companent/Home'
import Contact from './Companent/Contact'
import Footer from './Companent/Footer'
import Gettouch from './Companent/Gettouch'
import Navbar from './Companent/Navbar'
// import Project from './Companent/Project'
import SkillBuild from './Companent/SkillBuild'
import Skills from './Companent/Skills'

import { useEffect, useState } from 'react'
import Loader from './Companent/Loader'


function App() {

    const [loader, setloader] = useState(false)
    
    useEffect(()=>{
        setloader(true);
        setTimeout(()=>{
            setloader(false);
    
        },2000);
    },[]);


  return (
    <>
      { 
        loader ?

        <Loader/>

        :
        <>
       <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <SkillBuild/>
      {/* <Project/> */}
      <Contact/>
      <Gettouch/>
      <Footer/>
        </>
      }
    </>
  )
}

export default App
