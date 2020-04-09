import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList';

const Favorites = ({ state, toggleFavorite }) => (
  <div className="px4">
    <h2>Favorites</h2>
    <RecipeList
      recipes={state.recipes.filter(r => state.favorites.includes(r.id))}
      favorites={state.favorites}
      // style={{ flex: 3 }}
      // onClick={this.onRecipeClick}
      // [2]
      // onFavorited={this.toggleFavorite}
      onFavorited={toggleFavorite}
    />
  </div>
);

Favorites.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func,
};

export default Favorites;
