import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExtendedCard from './ExtendedCard.jsx';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExtendedCard id="13060" />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('loads data from API', () => {
    const extendedCard = shallow(<ExtendedCard id="13060" />);
    expect(extendedCard.state.cocktail).not.toBeNull();
});

