import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './../footer';
import Navbar from "./../navbar";

import { } from './style.css'


const Web = () => {
    return (
     <div className="web">
               <Navbar />

        <div className="container">

            <div className="scratch">
                <h1 className="scratch-title">
                Website Development Questionnaire
                </h1>
                <br/>
                <p className="paragraph">
                We would like to get a better idea of the scope of your project. Fill out the questionnaire below to the best of your ability. A member of our team will reach out to discuss the details of your requirements:
                </p>
                <br/>
                <div className="row">
                    <div className="col-md-6 tabele">
                    <input type="text" id="fname" name="firstname" placeholder="Full Name"/>

                    </div>
                    <div className="col-md-6 tabele" >
                    <input type="text" id="fname" name="firstname" placeholder="Phone"/>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 tabele">
                    <input type="text" id="fname" name="firstname" placeholder="Email"/>

                    </div>
                    <div className="col-md-6 tabele" >
                    <input type="text" id="fname" name="firstname" placeholder="Business"/>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 tabele">
                    <input type="text" id="fname" name="firstname" placeholder="Website name"/>

                    </div>
                </div>
                <br/>

                <div className="row">
                    <div className="col-md-6 ">
                    <Link className="" to="/web-questionnaire">
                    <span className="span-services">I want to build a new website from scratch </span>
                </Link>
                    </div>
                    <div className="col-md-6 " >
                    <Link className="" to="/old-web">
                    <span className="span-services">I already have a website, I need a new one </span>
                </Link>
                    </div>
                </div>
                
            
          
                
        </div>
    </div>
   
      
            <Footer />
    </div>
    )
}
export default Web;