/*
UI component for ingredients list
*/

import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from './Ingredient.jsx';
import './IngredientsList.css';

const IngredientsList = ({ items }) => (
    <div className="row">
        { items.map(ingredient => <div key={ingredient.name.replace(/\s+/ig, '')} className="col-md-4 col-lg-3 col-xl-3 text-center d-none d-sm-none d-md-block"><Ingredient name={ingredient.name} /></div>) }
    </div>
);

IngredientsList.propTypes = {
    items: PropTypes.array.isRequired,
};

export default IngredientsList;
