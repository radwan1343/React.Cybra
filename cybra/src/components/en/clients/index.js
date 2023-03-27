import React from 'react';
import maviyol from '../imgs/maviyol.svg';
import platinum from '../imgs/platinum.svg';
import robolab from '../imgs/robolab.svg';
import Layer2 from '../imgs/Layer 2.svg';
import { } from './style.css'

const Clients = () => {
    return (
        <div className="clients">
            <div className="clients-top">
                <h1 className="clients-title">
                    Clients
                </h1>
                <p className="paragraph" >
                Got the chance to work with a variety of customers and fields, such as: Robotics, medical clinics, NGOs, local businesses, shops, etc.
                </p>
            </div>
            <div className="clients-bottom">
                <div className="row">
                    <div className="col-md-4 logo1"><img src={Layer2} alt=""></img></div>
                    <div className="col-md-4 logo1"><img src={robolab} alt=""></img></div>

                    <div className="col-md-4 logo1"><img src={platinum} alt=""></img></div>

                </div>
                <div className="row">
                    <div className="col-md-12 logo1"><img src={maviyol} alt=""></img></div>

                </div>
            </div>
        </div>
    )
}
export default Clients;