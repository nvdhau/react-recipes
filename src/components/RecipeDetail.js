import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// classNames: deal with case props.className = null
const RecipeDetail = ({ recipe, style, className }) => {
  // zero state element
  if (!recipe) {
    return (
      <p
        style={style}
        className={classNames('h3 p2 bg-white italic center', className)}
      >
        Please select a recipe
      </p>
    );
  }

  // have data element
  return (
    <div style={style} className={classNames('p2 bg-white', className)}>
      <h2 className="h2">{recipe.name}</h2>
      <img className="fit" src={recipe.image} alt={recipe.name} />
      <div>
        <span>{recipe.category}</span>
        <span>{recipe.calories}</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map(step => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <Link to={`/recipe/${recipe.id}`}>See more</Link>
    </div>
  );
};

RecipeDetail.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  recipe: PropTypes.object,
};

export default RecipeDetail;
