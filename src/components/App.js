import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Favorites from './Favorites';
import NotFound from './NotFound';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      favorites: [],
    };
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

  // [2]: Share state between Home and Favorites
  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            {/* [2] */}
            {/* <Route exact path="/" component={Home} /> */}
            <Route
              exact
              path="/"
              render={() => (
                <Home state={this.state} toggleFavorite={this.toggleFavorite} />
              )}
            />
            {/* [2] */}
            {/* <Route path="/favorites" component={Favorites} /> */}
            <Route
              path="/favorites"
              render={() => (
                <Favorites
                  state={this.state}
                  toggleFavorite={this.toggleFavorite}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
