import React from 'react';
import { } from './style.css'
import Footer from './../footer';
import Navbar from "./../navbar";
import instagram from '../../../imgs/Icon awesome-instagram.svg'
import twitter from '../../../imgs/Icon awesome-twitter.svg'
import linked from '../../../imgs/Icon awesome-facebook-f.svg'
import facebook from '../../../imgs/Icon awesome-linkedin-in.svg'
import maps from '../../../imgs/1_13kxuB-O0iXC9T7yq7_4eA.png'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};


const Contact = () => {
    return (
        <div>
            <Map
         google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
            <Navbar />
            <div class="container">
                <div>
                    <p class="h1">Let's talk</p>
                    <p class="h6">LLorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div>
                

                </div> 

                <div className="maps">
                    <img src={maps}></img>
                </div>

                
                <div class="row" >
                    <div class="col-md-4" >
                        <span className="icon2"><a to="https://www.twitter.com/"><img src={twitter} alt=""></img></a></span>
                        <span className="icon2"><a to="https://www.instagram.com/"><img src={instagram} alt=""></img></a></span>
                        <span className="icon2"><a to="https://www.facebook.com/"><img src={facebook} alt=""></img></a></span>
                        <span className="icon2 facebook"><a to="https://www.linked.com/"><img src={linked} alt=""></img></a></span>
                    </div>

                    <div class="col-md-4 text" >
                        <a className="gray" href="tel:+905425414114">+905425414114</a>
                    </div>
                    <div class="col-md-4 text" >
                        <a className="gray" href="mailto:info@cybra.io">info@cybra.io</a>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyB6gLODFveI1J2_FVHrZgTA0uSFFJzxusc'
})(Contact);
