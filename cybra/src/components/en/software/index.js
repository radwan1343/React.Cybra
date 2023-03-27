import React from 'react';
import Footer from './../footer';
import { } from './style.css';
import arrow from '../imgs/arrow.svg';
import software from '../imgs/software.svg';
import software1 from '../imgs/software1.svg';
import Navbar from "./../navbar";


import { Link } from 'react-router-dom';

const Software = () => {
    return (
        <div className="software">
                  <Navbar />

             <div className="container">

                <div className="services-back">
                <Link className="back" to="/services">
                <img className="arrow" src={arrow} alt=""></img>services
                </Link>
                </div>
                <div className="it-up">
                    <h1 className="it-title">
                    Software Development
                    </h1>
                    <p className="paragraph">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam Infrastructre
                    </p>
                    </div>
                    </div>
                    <div className="boxes">
                <div className="container2 row">
                    <div className="col-md-6">
                        <div className="box2">
                            <Link to="/mobile">
                                <h2>Mobile App</h2>
                                <img src={software1} alt=""></img><br/> 
                                <span className="span-services">Fill up the questionnaire</span><br/>                                
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box2">
                            <Link to="/web">
                                <h2>Website - Web App</h2>
                               <img src={software} alt=""></img>
                               <br/> 
                                <span className="span-services">Fill up the questionnaire</span>
                               
                               <br/>
                            </Link>
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
            </div>
            <Footer />
        </div>
    )
}
export default Software;