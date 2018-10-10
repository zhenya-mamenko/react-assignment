import React from 'react';
import ReactDOM from 'react-dom';
import Ingredient from './Ingredient.jsx';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Ingredient name="Ice" />, div);
    ReactDOM.unmountComponentAtNode(div);
});
