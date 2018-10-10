import React from 'react';
import ReactDOM from 'react-dom';
import CocktailsList from './CocktailsList.jsx';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CocktailsList />, div);
    ReactDOM.unmountComponentAtNode(div);
});
