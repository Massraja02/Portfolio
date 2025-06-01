import  './SkillBuild.css'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

import webimg from '../assets/web.png'
import softimg from '../assets/software.png'
import appimg from '../assets/app.png'
import qualityimg from '../assets/quality.png'
import maintenimg from '../assets/maintenance.png'
import perforimg from '../assets/performance.png'

function SkillBuild() {

        useEffect(()=>{
                  Aos.init();
        },[]);


  return (
    <div className='container skillbuildcontainer' id='Services'>
        <h1 className='mb-5 pt-5'>Services</h1>
        <div className="row skillbuildrow">
            <div data-aos="zoom-out-right" className="col-12 col-md-6 col-lg-4 mb-5">
                <div className="skillbuilddiv">
                    <img src={webimg} alt=""  className='skillbuildwebimg'/>
                    <h1>Web Developer</h1>
                    <p>Web development is the process of building, programming, and maintaining websites and web applications. Website developers use various programming languages, like HTML, CSS, and JavaScript, to develop websites and web applications</p>
                </div>
            </div>
             <div data-aos="zoom-in-up"  className="col-12 col-md-6 col-lg-4 mb-5">
                <div className="skillbuilddiv">
                    <img src={softimg} alt="" className='skillbuildsoftimg'/>
                    <h1>Software Developer</h1>
                    <p>Software development is the process of designing, building, testing, and maintaining computer programs and applications. It involves creating software solutions that meet specific user needs, from simple mobile apps to complex enterprise systems</p>
                </div>
            </div>
             <div data-aos="fade-down" className="col-12 col-md-6 col-lg-4 mb-5">
                <div className="skillbuilddiv">
                    <img src={appimg} alt="" className='skillbuildsoftimg'/>
                    <h1>App Developer</h1>
                    <p>A mobile app developer uses programming languages and development skills to create, test, and develop applications on mobile devices. They work in popular operating system environments like iOS and Android</p>
                </div>
            </div>
        </div>




        <div className="row  qmprow">
            <div data-aos="zoom-in-right" className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5 mx-5 qmpcol ">
                <div className="skillbuildqualitydiv skillbuilddivss">
                    <img src={qualityimg} alt=""/>
                    <h1>Quality</h1>
                    <p>It involves key factors like portability, usability, correctness, and efficiency, A product is reliable, maintainable, and user-friendly</p>
                </div>
            </div>
            <div data-aos="fade-down" className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5 mx-5 qmpcol">
                <div className="skillbuildmaintendiv skillbuilddivss">
                    <img src={maintenimg} alt=""/>
                    <h1>Maintenance</h1>
                    <p>Maintenance involves modifying and updating software after its initial deployment to correct errors and adapt to new environments</p>
                
                </div>
            </div>
            <div  data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mb-5  mx-5 qmpcol">
                <div className="skillbuildperformdiv skillbuilddivss">
                    <img src={perforimg} alt=""/>
                    <h1>Performance</h1>
                    <p>Software that focuses on ensuring the system's efficiency, responsiveness, optimization,stability, performance and user experience</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default SkillBuild
