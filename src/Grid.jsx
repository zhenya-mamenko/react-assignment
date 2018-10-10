import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.jsx';
import Utils from './utils.jsx';
import './Grid.css';

const Grid = ({ items, sort }) => {
    items.sort((a, b) => {
        if (a[sort] < b[sort]) {
            return -1;
        } else if (a[sort] > b[sort]) {
            return 1;
        } else if (sort !== 'strDrink') {
            return a.strDrink > b.strDrink ? 1 : -1;
        }
        return 0;
    });
    return (
        <div className="row">{
            items.map((drink) => {
                let ingredients = '';
                for (let i = 1; i <= 15; i += 1) {
                    const v = Utils.properCase(drink[`strIngredient${i}`]);
                    if (v === '') break;
                    ingredients += (ingredients !== '' ? ', ' : '') + v;
                }
                return (
                    <Card
                        key={drink.idDrink}
                        id={drink.idDrink}
                        image={drink.strDrinkThumb}
                        name={drink.strDrink}
                        category={drink.strCategory}
                        ingredients={ingredients}
                    />
                );
            })}
        </div>
    );
};

Grid.propTypes = {
    items: PropTypes.array.isRequired,
    sort: PropTypes.string.isRequired,
};

export default Grid;
