import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {
  static defaultProps = {
    onNewRecipe() {}
  }

  static propTypes = {
    onNewRecipe: PropTypes.func
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <a className="navbar-brand">Recipe App</a>
        </div>
        <nav className="navbar-right">
          <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact Us</a></li>
        </nav>
      </div>
    );
  }
}

export default Navbar;
