import React from 'react';
import check from '../imgs/Icon awesome-check-square.svg';
import handshake from '../imgs/Icon awesome-handshake.svg';
import wallet from '../imgs/Icon awesome-wallet.svg'
import { } from './style.css'

const About = () => {
    return (
        
        <div class="about">
            
            <div class="about-head">
                <h1 class="about-head-title">Cybra</h1>
                <p class="about-head-paragraph">A team of programmers and IT specialists who can offer custom technology solutions for businesses and individuals. A complete technical department for your project.</p>
            </div>
            <div class="about-promise">
                <h1 class="about-promise-title">we promise...</h1>
                <div class="row about-promise-h3">
                    <div class="col-md-4">
                        <span> <img src={check} alt=""></img></span>
                        <br />
                        <h3>Reliability</h3>
                    </div>
                    <div class="col-md-4">
                        <span> <img src={handshake} alt=""></img></span>
                        <br />
                        <h3>Commitment</h3>
                    </div>
                    <div class="col-md-4">
                        <span> <img src={wallet} alt=""></img></span>
                        <br />
                        <h3>Affordability</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About;