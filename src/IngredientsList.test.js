import React from 'react';
import ReactDOM from 'react-dom';
import IngredientsList from './IngredientsList.jsx';

it('renders without crashing', () => {
    const items = [{ name: 'Ice', measure: '' }, { name: 'Salt', measure: '1 oz' }];
    const div = document.createElement('div');
    ReactDOM.render(<IngredientsList items={items} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
