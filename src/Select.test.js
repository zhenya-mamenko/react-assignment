import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select.jsx';

it('renders without crashing', () => {
    const items = ['Ice', 'Salt'];
    const div = document.createElement('div');
    ReactDOM.render(<Select items={items} field="ingredient" onChange={e => e} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
