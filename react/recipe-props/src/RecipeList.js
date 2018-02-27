import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    return (
      <div className="recipe-list">
        {this.props.recipes.map(recipe => (
          <Recipe key={recipe.id} {...recipe} />
        ))}
      </div>
    );
  }
}

export default RecipeList;
