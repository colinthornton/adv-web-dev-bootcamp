import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
  static propTypes = {
    recipes: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        ingredients: PropTypes.arrayOf(PropTypes.string),
        instructions: PropTypes.string,
        img: PropTypes.string,
      }),
    ).isRequired,
  };

  static defaultProps = {
    recipes: [
      {
        title: 'Spaghetti',
        ingredients: ['pasta', '8 cups water', '1 box spaghetti'],
        instructions: 'Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.',
        img: 'spaghetti.jpg',
      },
      {
        title: 'Milkshake',
        ingredients: ['2 Scoops Ice cream', '8 ounces milk'],
        instructions: 'Combine ice cream and milk. Blend until creamy.',
        img: 'milkshake.jpg',
      },
      {
        title: 'Avocado Toast',
        ingredients: ['2 sclices of bread', '1 avocado', '1 tablespoon olive oil', '1 pinch of salt', 'pepper'],
        instructions: 'Toast bread. Sclie avocado and spread on bread. Add salt, oil, and pepper to taste.',
        img: 'avocado-toast.jpg',
      },
    ],
  };

  render() {
    return (
      <div className="recipe-list">
        {this.props.recipes.map((recipe, idx) => (
          <Recipe key={idx} {...recipe} />
        ))}
      </div>
    );
  }
}

export default RecipeList;
