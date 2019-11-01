import React from "react";

//py: padding bot and top
const RecipeList = (props) => (
    <div style={props.style}>
        <h2 className="h2">Recipes</h2>

        <ul className="list-reset">
            {props.recipes.map(recipe => (
                <li 
                id={recipe.id} 
                className="py2 border-bottom pointer"
                onClick={() => props.onClick(recipe.id)}>
                    <span>{recipe.name}</span> 
                    <span>{recipe.category}</span>
                </li>
            ))}
        </ul>
    </div>
)

export default RecipeList;