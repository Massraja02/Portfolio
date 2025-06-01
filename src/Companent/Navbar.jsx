import { useState } from 'react'
import './Navbar.css'
import navimg from '../assets/me/homeimg.png'     
import resumedoc from '../assets/Raja resume.pdf'

function Navbar() {
    const [icons,seticons] = useState(true);

    function openmenu(id) {

        seticons(id)
        
        
    }
    
  return (
    <>
    <div className="container-fluied navbarcontainer">
        <div className="row containerrow ">
            <div className="col-2 col-sm-2 col-md-2 toggleicondiv">
               {icons? 
                <span onClick={()=>{openmenu(false)}}><i className="bi bi-list"></i></span> 
                : 
                <span onClick={()=>{openmenu(true)}}><i className="bi bi-x-lg"></i></span>
               }
            </div>
            <div className="col-7 col-sm-8 col-md-8 col-lg-2  logobox ">
                <a href="#"><img src={navimg} alt="" /> </a>
                <a href="#"> <h1>Raja</h1> </a>
                
            </div>
            <div className=" col-lg-8  navbardiv ">
                <ul className="">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
            <div className="col-3 col-sm-2 col-md-2 col-lg-2  resumebtndiv">
            <a href={resumedoc} download="Resume.pdf">  <button className='resumebtn'> Resume </button>   </a>             
            </div>
        </div>

            <div className={ icons === false ? "shownavbar" : "hidenavbar" }>
                <ul className="">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
    </div>
    
    
    
    </>
  )
}

export default Navbar
