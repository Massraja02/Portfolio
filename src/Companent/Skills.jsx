import  './Skills.css';

import { useEffect, useState } from 'react';
import reactimg from '../assets/svg/react-svgrepo-com.svg'
import angularimg from '../assets/svg/angular-svgrepo-com.svg'
import nodeimg from '../assets/svg/node-js-svgrepo-com.svg'
import phpimg from '../assets/svg/php-svgrepo-com.svg'
import sqlimg from '../assets/svg/sql-database-sql-azure-svgrepo-com.svg'
import javaimg from '../assets/svg/java-svgrepo-com.svg'
import pythonimg from '../assets/svg/python-svgrepo-com.svg'
import bootstrap from '../assets/svg/bootstrap-fill-svgrepo-com.svg'

import Aos from 'aos';
import 'aos/dist/aos.css'


function Skills() {

                useEffect(()=>{
                          Aos.init();
                },[]);


  return (
    <div className='container mt-5 mb-4'>
        <div className="row">
            <div data-aos="fade-up" className="col-6 col-md-3 col-lg-3">
                <div className="skilldiv react">
                    <img src={reactimg} alt="" />
                    <h1>React</h1>
                </div>
            </div>

             <div data-aos="fade-down" className="col-6 col-md-3 col-lg-3">
                <div className="skilldiv react">
                    <img src={angularimg} alt="" />
                    <h1>Angular</h1>
                </div>
            </div>

             <div data-aos="fade-right"  className="col-6 col-md-3 col-lg-3">
                <div className="skilldiv react">
                    <img src={nodeimg} alt="" />
                    <h1>Node.js</h1>
                </div>
            </div>

             <div data-aos="flip-left" className="col-6 col-md-3 col-lg-3">
                <div className="skilldiv react">
                    <img src={phpimg} alt="" />
                    <h1>PHP</h1>
                </div>
            </div>

             <div  data-aos="flip-right" className="col-6 col-md-3 col-lg-3">
                <div className="skilldiv react">
                    <img src={sqlimg} alt="" />
                    <h1>SQL</h1>
                </div>
            </div>

             <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="col-6 col-md-3 col-lg-3">
                <div className="skilldiv react">
                    <img src={javaimg} alt="" />
                    <h1>Java</h1>
                </div>
            </div>

             <div data-aos="zoom-in" className="col-6 col-md-3 col-lg-3">
                <div className="skilldiv react">
                    <img src={pythonimg} alt="" />
                    <h1>Python</h1>
                </div>
            </div>

             <div data-aos="fade-up"
     data-aos-duration="3000" className="col-6 col-md-3 col-lg-3">
                <div className="skilldiv bootstrap">
                    <img src={bootstrapimg} />
                    <h1>Bootstrap</h1>
                </div>
            </div>


        </div>

    </div>

  )
}

export default Skills
