import  './Gettouch.css'

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function Gettouch() {

              useEffect(()=>{
                        Aos.init();
              },[]);

              
  return (
    <div className='container py-4 gettouchcontainer'>
        <div className="row">
            <div data-aos="zoom-in-up" className="col-12  gettouchdiv">
                    <h1>Get in Touch</h1>
                    <form action="">
                      <label htmlFor="" className='mb-2'>Name</label>
                    <input type="text" className='mb-3' placeholder='Enter Your Name'  required/>
                     <label htmlFor="" className='mb-2'>Email</label>
                    <input type="email" className='mb-3' placeholder='Enter Your Email' required/>
                     <label htmlFor="" className='mb-2'>Message</label>
                    <textarea name="" className='mb-3' id="" required></textarea>
                    <button>Submit</button>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Gettouch