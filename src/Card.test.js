import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card.jsx';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card id="13060" image="test.jpg" name="Margarita" category="Cocktail" ingredients="Tequila, Salt" />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should show Extended card', () => {
    const card = shallow(<Card id="13060" image="test.jpg" name="Margarita" category="Cocktail" ingredients="Tequila, Salt" />);
    card.find('.Card').simulate('click', { preventDefault: () => {} });
    card.find('.Card').simulate('keydown', { key: 'Esc', preventDefault: () => {} });
});
