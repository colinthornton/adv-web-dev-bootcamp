import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: 'Spaghetti',
    ingredients: ['flour', 'water'],
    instructions: 'Mix ingredients',
    img: 'spaghetti.jpg',
  };

  render() {
    const { title, img, instructions } = this.props;
    const ingredients = this.props.ingredients.map((ingredient, idx) => (
      <li key={idx}>{ingredient}</li>
    ));

    return (
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-card-title">{title}</h3>
          <h4>Ingredients: </h4>
          <ul>
            {ingredients}
          </ul>
          <h4>Instructions: </h4>
          <p>{instructions}</p>
        </div>
      </div>
    );
  }
}

export default Recipe;
