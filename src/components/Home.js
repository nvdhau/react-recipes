import React from 'react';
// import Header from "./Header";
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      favorites: [],
      currentRecipe: null,
    };

    // bind the onRecipeClick to this object
    // this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  componentDidMount() {
    // API_URL config with webpack and .env
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          recipes: json,
        });
      });
  }

  // using arrow function, do not need to bind
  onRecipeClick = id => {
    // console.log(id);
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          currentRecipe: json,
        });
      });
  };

  toggleFavorite = id => {
    this.setState(({ favorites, ...state }) => {
      const idx = favorites.indexOf(id);

      if (idx !== -1) {
        return {
          // clone old state
          ...state,
          // override favorites by removing id
          favorites: favorites.filter(f => f !== id),
        };
      }

      return {
        // clone old state
        ...state,
        // override favorites by adding id
        favorites: [...favorites, id],
      };
    });
  };

  render() {
    const { recipes, currentRecipe, favorites } = this.state; // get recipes from state

    // px4: padding lefd and right
    return (
      <div>
        {/* <Header /> */}
        <main className="px4 flex">
          <RecipeList
            recipes={recipes}
            favorites={favorites}
            style={{ flex: 3 }}
            onClick={this.onRecipeClick}
            onFavorited={this.toggleFavorite}
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
}

export default Home;
