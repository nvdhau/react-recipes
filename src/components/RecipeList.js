import React from 'react';
import PropTypes from 'prop-types';

// py: padding bot and top
const RecipeList = ({ style, recipes, onClick }) => (
  <div style={style}>
    <h2 className="h2">Recipes</h2>

    <ul className="list-reset">
      {recipes.map(recipe => (
        <li
          id={recipe.id}
          className="py2 border-bottom border-bottom-dashed pointer"
          onClick={() => onClick(recipe.id)}
        >
          <span>{recipe.name}</span>
          <span>{recipe.category}</span>
        </li>
      ))}
    </ul>
  </div>
);

RecipeList.propTypes = {
  style: PropTypes.object,
  recipes: PropTypes.array,
  onClick: PropTypes.func,
};

export default RecipeList;
