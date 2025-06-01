import './Contact.css'
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Contact() {

            useEffect(()=>{
                      Aos.init();
            },[]);


  return (
        <div className="container mt-3 p-sm-5 contactcontainer" id='Contact'>
            <div className="row contactmaprow">
                <div data-aos="fade-up"
     data-aos-duration="3000" className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="contactmapdiv">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3903.383579119971!2d79.78761717505955!3d11.947922888281207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDU2JzUyLjUiTiA3OcKwNDcnMjQuNyJF!5e0!3m2!1sen!2sin!4v1748534034069!5m2!1sen!2sin" loading="lazy"></iframe>
                    </div>
                </div>

                <div  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"  className="col-12 col-md-6  col-lg-6 col-xl-6 col-xxl-6 ">
                    <div className="row contactinforow">
                        <div  data-aos="flip-left" data-aos-delay="100" className="col-12 contactaddressdiv">
                                <span><SlLocationPin /></span> 
                                <div>
                                    <h1>Address : </h1>
                                    <h4>No : 22 Murugan Koil Street, priyadarshini nagar, Shanmugapuram, Puducherry 605009
                                </h4>
                                </div>
                                
                        </div>

                        <div data-aos="flip-right" data-aos-delay="100" className="col-12 contactmobilediv">
                                <span><FiPhoneCall /></span> 
                                <div>
                                <h1>Mobile : </h1>
                                <h4>+91 9342086309</h4>
                                </div>
                        </div>

                        <div data-aos="zoom-in" data-aos-delay="100" className="col-12 contactgmaildiv">
                                <span><IoIosMail /></span> 
                                <div>
                                    <h1>Gmail : </h1>
                                    <h4>massraja625@gmail.com</h4>
                                </div>
                                
                        </div>

                        <div  
                        data-aos="fade-up" data-aos-delay="100" className="col-12 contacttelegramdiv">
                                <span><FaTelegramPlane /></span> 
                                <div>
                                    <h1>Telegram</h1>
                                <   h4>+91 9342086309</h4>
                                </div>
                        </div>

                        <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"  className="col-12 my-4 contactsocialmediadiv">
                                <ul>
                                    <li><a href="https://wa.me/9342086309" className="whatsapp"><FaWhatsapp /></a></li>
                                    <li><a href="https://www.instagram.com/_._._call_me_raja_._._?igsh=MnRhM2ZnemtmZHp1" className="instagram"><FaInstagram /></a></li>
                                    <li><a href="https://www.facebook.com/share/16gTXQ9Q7i/" className="facebook"><FaFacebook /></a></li>
                                    <li><a href="https://x.com/RAJA25722264924?t=yKjXrtL0EfusNJW32BJEfA&s=09" className="twitter"><FaXTwitter /></a></li>
                                    <li><a href="#" className="linkin"><FaLinkedin /></a></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>             
        </div>                  
  )
}

export default Contact