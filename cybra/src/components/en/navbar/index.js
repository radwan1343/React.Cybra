import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../imgs/Icon awesome-instagram.svg'; // Tell webpack this JS file uses this image
import { } from './style.css';
import instagram from '../../../imgs/Icon awesome-instagram.svg';
import twitter from '../../../imgs/Icon awesome-twitter.svg';
import { bubble as Menu } from 'react-burger-menu';
import global from '../../../imgs/Icon_material-language.svg'



class Example extends React.Component {
  showSettings(event) {
    event.preventDefault();

  }

  render() {
    return (
      <div>
      <Menu >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/services">Services</a>
        <a id="contact" className="menu-item" href="/contact">Talk to us</a>
        <div class="row" >
      <div class="social-nav">
          <span className="icon2"><a to="https://www.twitter.com/"><img src={twitter} alt=""></img></a></span>
          <span className="icon2 "><a to="https://www.instagram.com/"><img src={instagram} alt=""></img></a></span>
          </div>
          </div>
          <Link className="global" ><img src={global} alt=""></img>AR</Link>
      </Menu>
      </div>

      
    );
  }
}

const NavBar = () => {
  return (

    <div class="navbar sticky-top navbar-white bg-white">

        <Example></Example>
        <span>
          <Link className="logo" to="/"><img src={logo} alt="Logo" /></Link>
        </span>
        <span>
          <Link className="services-gatalog" to="/services">Service Catalogue</Link>
          <Link className="services-gatalog res" to="/services">Services</Link>
        </span>
      </div>


  )
}
export default NavBar;



