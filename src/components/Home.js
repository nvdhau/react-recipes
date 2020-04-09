import React from 'react';
import PropTypes from 'prop-types';
// import Header from "./Header";
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends React.Component {
  constructor(props) {
    super(props);

    // [2] in order to share these state between Home and Favorite => move these state to App
    this.state = {
      // recipes: [],
      // favorites: [],
      currentRecipe: null,
    };

    // bind the onRecipeClick to this object
    // this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  // [2]
  // componentDidMount() {
  //   // API_URL config with webpack and .env
  //   fetch(`${API_URL}/v1/recipes`)
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         recipes: json,
  //       });
  //     });
  // }

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

  // [2]
  // toggleFavorite = id => {
  //   this.setState(({ favorites, ...state }) => {
  //     const idx = favorites.indexOf(id);

  //     if (idx !== -1) {
  //       return {
  //         // clone old state
  //         ...state,
  //         // override favorites by removing id
  //         favorites: favorites.filter(f => f !== id),
  //       };
  //     }

  //     return {
  //       // clone old state
  //       ...state,
  //       // override favorites by adding id
  //       favorites: [...favorites, id],
  //     };
  //   });
  // };

  render() {
    // [2]
    // const { recipes, currentRecipe, favorites } = this.state; // get recipes from state
    const { currentRecipe } = this.state;
    const { state, toggleFavorite } = this.props;
    const { recipes, favorites } = state;

    // px4: padding lefd and right
    return (
      <div>
        {/* <Header /> */}
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h2 className="h2">Recipe</h2>
            <RecipeList
              recipes={recipes}
              favorites={favorites}
              onClick={this.onRecipeClick}
              // [2]
              // onFavorited={this.toggleFavorite}
              onFavorited={toggleFavorite}
            />
          </div>
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

Home.propTypes = {
  state: PropTypes.object,
  toggleFavorite: PropTypes.func,
};

export default Home;
