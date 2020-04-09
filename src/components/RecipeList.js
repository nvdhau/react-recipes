import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem';

// py: padding bot and top
// [1]
// const RecipeList = ({ style, recipes, onClick, onFavorited, favorites
// }) => (
const RecipeList = ({
  style,
  recipes,
  favorites,
  ...props // = [1]
}) => (
  <ul className="list-reset">
    {recipes.map(recipe => (
      <RecipeListItem
        key={recipe.id}
        favorited={favorites.includes(recipe.id)}
        recipe={recipe}
        // [1]
        // onClick={onClick}
        // onFavorited={onFavorited}
        {...props}
      />
    ))}
  </ul>
);

RecipeList.propTypes = {
  style: PropTypes.object,
  recipes: PropTypes.array,
  onClick: PropTypes.func,
  onFavorited: PropTypes.func,
  favorites: PropTypes.array,
};

RecipeList.defaultProps = {
  recipes: [],
  favorites: [],
};

export default RecipeList;
