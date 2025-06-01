import './Home.css';
import Typewriter from 'typewriter-effect'
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Home() {

    const [scrollHide, setScrollHide] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setScrollHide(true);
            } else {
                setScrollHide(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    

    function scrolltop()
     {
        window.scrollTo(0, 0)        
     }


        useEffect(()=>{
                  Aos.init();
        },[]);

    const typewritereffect =   <Typewriter
                options={{
                strings:["Software Developer","Web Developer","App Developer"],
                autoStart:true,
                loop:true,
                delay:70,
                deleteSpeed:70,
                }}/>

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center homecontainer' id='Home'>          
        <div className="row d-flex justify-content-center align-items-center ">
            
            <div data-aos="fade-right" className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 homecontentcol">
                <h1 className='hello'>Hello,</h1>
                <h1 className='iamraja'>I'm Raja</h1>
                <h1 className='typewritecontent'>I Am {typewritereffect}</h1>
                
                <p>
                    I am a full-stack developer proficient in React, Node.js, and Python, dedicated to building dynamic and responsive web applications. My passion lies in creating seamless user experiences and efficient back-end solutions.
                </p>
                <button className='btn'>Hire Me</button>
            </div>

            <div data-aos="zoom-in" className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 homeimgcol">
                <div className='homeimgdiv'>
                <img src=".././src/assets/me/homeimg.png" alt=""/>

                <img src="src\assets\svg\react-svgrepo-com.svg" alt="" />
                <img src="src\assets\svg\node-js-svgrepo-com.svg" alt="" />
                <img src="src\assets\svg\python-svgrepo-com.svg" alt="" />
                <img src="src\assets\svg\angular-svgrepo-com.svg" alt="" />
                </div>
            </div>
        </div>
        {
            scrollHide ?
            <div className='clicktopbox'>
                <span >
                    <FaArrowUp onClick={scrolltop} />
                </span>
            </div>
            :
            ""
        }
    </div>

  )
}

export default Home
