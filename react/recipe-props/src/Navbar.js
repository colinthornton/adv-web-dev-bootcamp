import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <a className="navbar-brand" href="#">Recipe App</a>
        </div>
        <div className="navbar-right">
          <li><a href="#">New Recipe</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact Us</a></li>
        </div>
      </div>
    );
  }
}

export default Navbar;
