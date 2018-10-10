import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card id="13060" image="test.jpg" name="Margarita" category="Cocktail" ingredients="Tequila, Salt" />, div);
    ReactDOM.unmountComponentAtNode(div);
});
