import React from 'react';
import { } from './style.css'
import home from '../imgs/home.png'; // Tell webpack this JS file uses this image
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <div className="home-text">
                    <h1>Get in the cyber game</h1>
                    <Link to="" >Start Now</Link>
                </div>
                </div>
                <div className="col-md-6">
                <div className="home-img">
                    <img src={home} alt=""></img>
                </div>
                </div>
              
            </div>

            <div className="row">
            <div className="col-md-12">
                <div className="home-img res">
                    <img src={home} alt=""></img>
                </div>
                </div>
            <div className="col-md-12">
                <div className="home-text res">
                    <h1>Get in the cyber game</h1>
                    <Link to="" >Start Now</Link>
                </div>
                </div>
               
            </div>
        </div>
    )
}
export default Home;


// <img src={Logo} class="home-img" alt="Responsive image"></img>
