import React from 'react';
import { Link } from 'react-router-dom';
import it1 from '../imgs/it-1.svg'
import it2 from '../imgs/it-2.svg'
import it3 from '../imgs/it-3.svg'
import Footer from './../footer';
import { } from './style.css';
import Navbar from "./../navbar";
import arrow from '../imgs/arrow.svg';




const IT = () => {
    return (
        
        <div className="it">
                  <Navbar />

            <div className="container">
                <div className="services-back">
                <Link className="back" to="/services">
                <img className="arrow" src={arrow} alt=""></img>Services
                </Link>
                </div>
                <div className="it-up">
                    <h1 className="it-title">
                    IT Support
                    </h1>
                    <p className="paragraph">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam Infrastructre
                    </p>
                    <Link className="contact-us" to="/contact">Talk to us</Link>
                </div>
                </div>

                <div className="it-middle">
                    <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                        <img src={it1} alt=""></img>
                            <br/>
                            <p>Networking <br/> and Cabling</p>
                        </div>
                        
                        <div className="col-md-4"> <img src={it3} alt=""></img>
                            <br/>
                            <p>Server <br/>and System Management   </p>
                        </div>
                        
                        <div className="col-md-4"><img src={it2} alt=""></img>
                            <br/>
                            <p>

                            Surveillance <br/>Cameras and Sensors
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
                    <div className="it-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <h1>Overview</h1>
                                </div>
                                <div className="col-md-9">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos</p>
                                </div>
                            </div>
                        </div>
                    </div>
            <Footer />
        </div>
    )
}
export default IT;