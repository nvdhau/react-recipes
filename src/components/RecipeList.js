import React from "react";

const RecipeList = (props) => (
    <div style={props.style}>
        <h2>Recipes</h2>

        <ul>
            <li>
                <span>Creepy Halloween Skull Cupcakes</span> 
                <span>Desert</span>
            </li>
            <li>
                <span>Blueberry Sour Cream</span> 
                <span>Desert</span>
            </li>
            <li>
                <span>Amazing Pork Tenderloin</span> 
                <span>Meat</span>
            </li>
        </ul>
    </div>
)

export default RecipeList;