import { FaReact } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import Typewriter from 'typewriter-effect'
import './Home.css'
function Home() {
  const typewritereffect =   <Typewriter
                options={{
                strings:["Software Developer","Web Developer","App Developer"],
                autoStart:true,
                loop:true,
                delay:70,
                deleteSpeed:70,
                }}/>

  return (
    <div className='container-fluid homecontainer'>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 homecontentdiv">
               <h1 className='hello'>Hello,</h1>
               <h1 className='iamraja'>I'm Raja</h1>
               <h1 className='typewritecontent'>I Am  <span> { typewritereffect}</span>  </h1>
               <p>A web developer is a professional who specializes in the development of applications and features for the World Wide Web.
                Web developers typically work with a variety of programming languages and technologies.
               </p>
               <button>Hire Me</button>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 imgcol">
                <div className="imgboxdiv">
      
                        <img src="src\assets\1747469146710.png" alt="" />

                        <span className='react'><FaReact /></span>
                        <span className='angular'><FaAngular /></span>
                        <span className='java'><FaJava /></span>
                        <span className='python'><FaPython /></span>
                </div>
            </div>       
        </div>
    </div>
  )
}

export default Home