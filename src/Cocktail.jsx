import React from 'react';
import PropTypes from 'prop-types';
import IngredientsList from './IngredientsList.jsx';
import './Cocktail.css';


const Cocktail = ({ data, ingredients }) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <h1 className="display-4 mb-3">{data.strDrink}</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 mb-3">
                <img
                    src={data.strDrinkThumb}
                    className="rounded img-fluid"
                    alt={`${data.strCategory} ${data.strDrink}`}
                    title={`${data.strCategory} ${data.strDrink}`}
                />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">
                <dl className="row">

                    <dt className="col-4">Category</dt>
                    <dd className="col-8">{data.strCategory}</dd>

                    <dt className="col-4">Alcohol</dt>
                    <dd className="col-8">{data.strAlcoholic}</dd>

                    <dt className="col-4">Serve</dt>
                    <dd className="col-8">{data.strGlass}</dd>

                </dl>

                <IngredientsList items={ingredients} />

                <p>Use {ingredients.map((ingredient, index) =>
                    `${(index !== 0 ? ', ' : '') + ingredient.measure} ${ingredient.name}`)}.
                </p>
                <p>{data.strInstructions}</p>

            </div>
        </div>
    </div>
);

Cocktail.propTypes = {
    data: PropTypes.object.isRequired,
    ingredients: PropTypes.array.isRequired,
};

export default Cocktail;
