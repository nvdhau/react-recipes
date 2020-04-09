import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetail from './RecipeDetail';

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
    };
  }

  componentDidMount() {
    // get id from URL, React Router pass the prop match to all child
    const { match } = this.props;
    const { id } = match.params;

    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => {
        this.setState({
          recipe,
        });
      });
  }

  render() {
    const { recipe } = this.state;

    return (
      <div className="px4">
        <RecipeDetail recipe={recipe} />
      </div>
    );
  }
}

Recipe.propTypes = {
  match: PropTypes.object,
};

export default Recipe;
