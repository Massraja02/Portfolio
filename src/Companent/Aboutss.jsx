import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


import './About.css'
import { useState } from "react";

function About() {

    const [tabs,settabs] = useState(1);

    function abouttabs(id) {
        settabs(id)
    }



  return (
        <div className="container-fluid aboutcontainer">
            <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 aboutimgdiv">
                    <img src="src\assets\1747469108188.jpg" alt="" />
                    </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 aboutcontentdiv">
                    <h1>About Me</h1>
                        <div className="aboutcontenttabsdiv">
                            <h2 onClick={()=>abouttabs(1)}>Info</h2>
                            <h2 onClick={()=>abouttabs(2)}>PG</h2>
                            <h2 onClick={()=>abouttabs(3)}>UG</h2>
                            <h2 onClick={()=>abouttabs(4)}>HSC</h2>
                            <h2 onClick={()=>abouttabs(5)}>SSC</h2>
                        </div>

                    <div className="row abouttabsrowdiv">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 abouttabscarddiv">
                             <div className={tabs === 1 ? "showtabs abouttabsinfocarddiv ":"hidetabs"}>
                                <h1>Raja B</h1>
                                <p>Web Developer</p>   
                                <p>I am a Full-Stack Web developer. I am  Master Of Computer Applications Post Graduate from Pondicherry University.</p>                       
                                <div className=" socialmediadiv">
                                    <ul>
                                        <li><a href="" className="whatsapp"><FaWhatsapp /></a></li>
                                        <li><a href="" className="instagram"><FaInstagram /></a></li>
                                        <li><a href="" className="facebook"><FaFacebook /></a></li>
                                        <li><a href="" className="twitter"><FaXTwitter /></a></li>
                                        <li><a href="" className="linkin"><FaLinkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={tabs ===2 ? "showtabs row abouttabscarddiv":"hidetabs"}>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 abouttabscardimgdiv ">
                                <img src="src\assets\1747469108188.jpg" alt="" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 abouttabscardcontdiv">
                                <h1>Master of Computer Applications</h1>
                                <p>Rajiv Gandhi College of Engineering and Technology Kirumapakkam Puducherry</p>
                                <p>2023 - 2025 Present</p>
                            </div>
                        </div>

                        <div className={tabs ===3 ? "showtabs row abouttabscarddiv":"hidetabs"}>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 abouttabscardimgdiv ">
                                <img src="src\assets\1747469108188.jpg" alt="" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 abouttabscardcontdiv">
                                <h1>Bachlor of Computer Applications</h1>
                                <p>Rajiv Gandhi Arts and Science College Thavalakuppam Puducherry</p>
                                <p>2020 - 2023 Present</p>
                            </div>
                        </div>

                        <div className={tabs ===4 ? "showtabs row abouttabscarddiv":"hidetabs"}>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 abouttabscardimgdiv ">
                                <img src="src\assets\1747469108188.jpg" alt="" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 abouttabscardcontdiv">
                                <h1>12th Standard</h1>
                                <p>Jeevanantham Boys Hr Sec School Karamanikuppam Puducherry</p>
                                <p>2019 - 2020 Present</p>
                            </div>
                        </div>

                        <div className={tabs ===5 ? "showtabs row abouttabscarddiv":"hidetabs"}>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 abouttabscardimgdiv ">
                                <img src="src\assets\1747469108188.jpg" alt="" />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 abouttabscardcontdiv">
                                <h1>10th Standard</h1>
                                <p>Thilliyadi Valliyammai Govt High School Kadhirkamam Puducherry</p>
                                <p>2017 - 2018 Present</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About