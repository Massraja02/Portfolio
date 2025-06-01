import './Footer.css'
import { SlLocationPin } from "react-icons/sl";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='container-fluied container-xxl footercontainer'>
        <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 footermee">
               <span>
                <img src="src\assets\me\homeimg.png" alt="" />
                <h1>Raja..</h1>
                </span>
                <p>Thank you for visiting my portfolio. I appreciate your time and interest!. If you have any questions or would like to collaborate, feel free to reach out.</p>
            </div>
            
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 footerabout">
                <h3>About</h3>
                <h5>
                   <span><SlLocationPin style={{color:'aqua'}} /></span> 
                   <p className='footeraddressptag'>No : 22 Murugan Koil Street, priyadarshini nagar, Shanmugapuram, Puducherry 605009</p>
                </h5>

                <h5>
                     <span><FiPhoneCall style={{color:'lightgreen'}}  /></span> 
                     <p>+91 9342086309</p>
                </h5>
                   
                <h5>
                     <span><IoIosMail  style={{color:'#F7374F'}} /></span> 
                    <p>massraja625@gmail.com</p>
                </h5>
                
            </div>

            <div className="col footernavlinks">
                <h3>NavLinks</h3>
                <p>Home</p>
                <p>About</p>
                <p>Skill</p>
                <p>Project</p>
                <p>Contact</p>
            </div>

            <div className="col footerhelp">
                <h3>Help</h3>
                <p>FAQ</p>
                <p>Support</p>
                <p>Maintenance</p>
                <p>Quality</p>
                <p>24/7</p>
            </div>
        </div>

        <div className="row">
            <div className="col-12 col-md-6 footerprivacydiv">
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
            <div className="col-12 col-md-6 footersocialmediadiv ">
                    <ul>
                        <li><a href="https://wa.me/9342086309" className="whatsapp"><FaWhatsapp /></a></li>
                        <li><a href="https://www.instagram.com/_._._call_me_raja_._._?igsh=MnRhM2ZnemtmZHp1" className="instagram"><FaInstagram /></a></li>
                        <li><a href="https://www.facebook.com/share/16gTXQ9Q7i/"  className="facebook"><FaFacebook /></a></li>
                        <li><a href="https://x.com/RAJA25722264924?t=yKjXrtL0EfusNJW32BJEfA&s=09" className="twitter"><FaXTwitter /></a></li>
                        <li><a href="#" className="linkin"><FaLinkedin /></a></li>
                    </ul>
            </div>
        </div>

        <div className="row">
            <div className="col footercopyright">
                <p>Copyright &copy; 2025 Raja.. All Rights are Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer