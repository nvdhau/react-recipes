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
  <div style={style}>
    <h2 className="h2">Recipes</h2>

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
  </div>
);

RecipeList.propTypes = {
  style: PropTypes.object,
  recipes: PropTypes.array,
  onClick: PropTypes.func,
  onFavorited: PropTypes.func,
  favorites: PropTypes.array,
};

export default RecipeList;
