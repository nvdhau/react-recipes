import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

// think component as IO function
describe('<Header />', () => {
  test('Should render correctly', () => {
    // because Header has NavLink, and NavLink needs to be inside BrowserRouter
    const component = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
