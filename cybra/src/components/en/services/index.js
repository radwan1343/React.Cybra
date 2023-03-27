import React from 'react';
import { Link } from 'react-router-dom';
import services from '../imgs/services.svg'
import services2 from '../imgs/services2.svg'
import Footer from './../footer';
import Navbar from "./../navbar";

import { } from './style.css'

const Services = () => {
    return (
        <div className="services">
      <Navbar />

            <h1 className="sevices-title">
                Services
            </h1>
            <div className="boxes">
                <div className="container2 row">
                    <div className="col-md-6">
                        <div className="box">
                            <Link to="/it">
                                <h2>IT  <br />
                            Support</h2>
                                <span className="span-services">Systems, Networks, Surveillance Cameras</span><br/>
                                <br/>
                                
                                <img src={services} alt=""></img>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box">
                            <Link to="/software">
                                <h2>Software
                                <br />
                                    Development</h2>
                                <span className="span-services">Mobile Apps, Websites</span>
                               <br/> 
                               <br/>
                               <img src={services2} alt=""></img>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default Services;
