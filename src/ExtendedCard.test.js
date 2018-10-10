import React from 'react';
import ReactDOM from 'react-dom';
import ExtendedCard from './ExtendedCard.jsx';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExtendedCard id="13060" />, div);
    ReactDOM.unmountComponentAtNode(div);
});
