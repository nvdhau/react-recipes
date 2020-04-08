import React from "react";
// import Header from "./Header";
import RecipeList from "./RecipeList";
import RecipeDetail from "./RecipeDetail";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      currentRecipe: null
    };

    //bind the onRecipeClick to this object
    //this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  componentDidMount() {
    //API_URL config with webpack and .env
    fetch(API_URL + "/v1/recipes")
      .then(res => res.json())
      .then(json => {
        this.setState({
          recipes: json
        });
      });
  }

  render() {
    const { recipes, currentRecipe } = this.state; //get recipes from state

    console.log("added git hook ...");
    //px4: padding lefd and right
    return (
      <div>
        {/* <Header /> */}
        <main className="px4 flex">
          <RecipeList
            recipes={recipes}
            style={{ flex: 3 }}
            onClick={this.onRecipeClick}
          />
          <RecipeDetail
            recipe={currentRecipe}
            className="ml4"
            style={{ flex: 5 }}
          />
        </main>
      </div>
    );
  }

  //using arrow function, do not need to bind
  onRecipeClick = id => {
    console.log(id);
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          currentRecipe: json
        });
      });
  };
}

export default Home;
