import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RecipeDetail from '../components/RecipeDetail';

// think component as IO function
describe('<RecipeDetail />', () => {
  let testRecipe;

  beforeEach(() => {
    testRecipe = {
      id: 1,
      name: 'Test Recipe',
      category: 'Test Category',
      ingredients: ['Ing 1', 'Ing 2', 'Ing 3'],
      steps: ['Step 1', 'Step 2', 'Step 3'],
    };
  });

  test('Should render zero state', () => {
    // because RecipeDetail has Link, and Link needs to be inside BrowserRouter
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should correctly render', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should correctly assign a className', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} className="classname-test" />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render recipe without ingredients', () => {
    delete testRecipe.ingredients;
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Should render recipe without steps', () => {
    delete testRecipe.steps;
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
