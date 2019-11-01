import React from "react";
import Header from './Header.js';
import RecipeList from './RecipeList.js';
import RecipeDetail from './RecipeDetail.js';

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            recipes: [],
            currentRecipe: null
        };

        //bind the onRecipeClick to this object
        this.onRecipeClick = this.onRecipeClick.bind(this);
    
    }

    componentDidMount(){
        //API_URL config with webpack and .env
        fetch(API_URL + '/v1/recipes')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    recipes: json
                })
            });
    }

    render(){
        const {recipes, currentRecipe} = this.state;//get recipes from state

        return (
        <div>
            <Header />
            <main style={{display: 'flex'}}>
                <RecipeList 
                    recipes={recipes} 
                    style={{flex:3}}
                    onClick={this.onRecipeClick}
                />
                <RecipeDetail 
                    recipe={currentRecipe}
                    style={{flex:5}}/>
            </main>
        </div>
        )
    }

    onRecipeClick(id)  {
        console.log(id);
        fetch(`${API_URL}/v1/recipes/${id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    currentRecipe: json
                })
            });
    }
};

export default App