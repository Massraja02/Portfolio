import './About.css'

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from 'react';
import aboutimg from '../assets/me/aboutimg22.jpg'

import Aos from 'aos';
import 'aos/dist/aos.css'

function About() {

    useEffect(()=>{
              Aos.init();
    },[]);


    const [tab, settab] = useState(1)

    function abouttabs(id)
     {
         settab(id)
    }

  return (
    <div className='container aboutcontainer' id='About'>
        <div className="row">
            <div data-aos="zoom-in" className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 aboutimgcol">
                <div className='aboutimgdiv'>
                    <img src={aboutimg} className='img-fluid' alt="" />
                </div>
            </div>

            <div data-aos="zoom-in-up" className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 aboutcontentcol">
                <h1 className='mb-5'>About Me</h1>
                <ul className='mb-5'>
                    <li onClick={()=>abouttabs(1)}>INFO</li>
                    <li onClick={()=>abouttabs(2)}>College</li>
                    <li onClick={()=>abouttabs(3)}>School</li>
                </ul>

                <div className={tab === 1 ? "abouttabsdiv":"hidetabs"}>  
                    <p className='mb-0'>Raja B</p>
                    <p>Web Developer</p>
                    <p className=''>Hi, I am Raja, I'm 22-year-old, I am pursuing a Master of Computer Applications (MCA) degree at RGCET. I have a strong interest in the IT field and am dedicated to enhancing my coding skills and knowledge. Through developing various projects, I continuously strive to improve my technical expertise and practical experience</p>
                     <ul>
                        <li><a href="https://wa.me/9342086309" className="whatsapp"><FaWhatsapp /></a></li>
                        <li><a href="https://www.instagram.com/_._._call_me_raja_._._?igsh=MnRhM2ZnemtmZHp1" className="instagram"><FaInstagram /></a></li>
                        <li><a href="https://www.facebook.com/share/16gTXQ9Q7i/" className="facebook"><FaFacebook /></a></li>
                        <li><a href="https://x.com/RAJA25722264924?t=yKjXrtL0EfusNJW32BJEfA&s=09" className="twitter"><FaXTwitter /></a></li>
                        <li><a href="#" className="linkin"><FaLinkedin /></a></li>
                    </ul>
                </div>

                <div className={tab === 2 ? "abouttabsdiv":"hidetabs"}>  
                    <p className='mb-1'>PG</p>
                    <p className='mb-0'>Master Of Computer Applications</p>
                    <p className='mb-0'>Rajiv Gandhi College of Engineering and Technology</p>
                    <p>2023 - 2025</p>

                    <p className='mb-1'>UG</p>
                    <p className='mb-0'>Bachlor Of Computer Applications</p>
                    <p className='mb-0'>Rajiv Gandhi Arts and Science College </p>
                    <p>2020 - 2023</p>
                </div>

                <div className={tab === 3 ? "abouttabsdiv":"hidetabs"}>  
                    <p className='mb-1'>HSC</p>
                    <p className='mb-0'>12th Standard</p>
                    <p className='mb-0'>Jeevanandam Govt. Boys Higher Secondary School</p>
                    <p>2019 - 2020</p>

                    <p className='mb-1'>SLC</p>
                    <p className='mb-0'>10th Standard</p>
                    <p className='mb-0'>Thillaiyadi Valliammai Govt. High School </p>
                    <p>2017 - 2018</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
