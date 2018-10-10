/*
UI Component for ingredient
*/

import React from 'react';
import PropTypes from 'prop-types';
import { API_INGREDIENT_IMAGE } from './consts.jsx';
import './Ingredient.css';

const Ingredient = ({ name }) => (
    <div className="text-center">
        <img
            src={API_INGREDIENT_IMAGE.replace(/###/ig, name.replace(/[ ]/ig, '%20'))}
            className="rounded"
            alt={name}
            title={name}
        />
        <p className="Ingredient-name text-center">{name}</p>
    </div>
);

Ingredient.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Ingredient;
