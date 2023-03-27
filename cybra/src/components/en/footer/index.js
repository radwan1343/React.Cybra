import React from 'react';
import { } from './style.css'
import logo from '../imgs/all.svg'
import instagram from '../imgs/Icon awesome-instagram.svg'
import twitter from '../imgs/Icon awesome-twitter.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="row footer1 ">
                    <div className=" col-md-3 cybra-logo"><Link to="/"><img src={logo} alt=""></img></Link>
                    <br/>
                        <span className="icon"><Link to="https://www.instagram.com/"><img src={instagram} alt=""></img></Link></span>
                        <span className="icon"><img src={twitter} alt=""></img></span>
                    </div>
                    <div className="footer-services col-md-3">
                        <h4 ><Link to="/services">Services</Link></h4>
                        <span className="same"><Link to="/it">IT</Link></span>
                        <br />
                        <span className="same"><Link to="/software">Software</Link></span>
                    </div>
                    <div className=" col-md-3"
                    >
                        <h4 >Company</h4>
                        <span className="same"><Link to="/contact">Talk to us</Link></span>

                    </div>
                    <div className=" col-md-3">
                        <h4 >cybra updates</h4>
                        <input type="text" id="email" name="email" placeholder="your@email.com" />
                    </div>
                </div>
                <div className="footer2">
                    <span className="col-xs-12">Get in the cyber game.     © 2020     Terms     Privacy Policy</span>
                </div>
            </div>
        </div>
    )
}
export default Footer;