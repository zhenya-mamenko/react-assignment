import React from 'react';
import PropTypes from 'prop-types';
import { API_LOOKUP } from './consts.jsx';
import Cocktail from './Cocktail.jsx';
import './ExtendedCard.css';

class ExtendedCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktail: null,
            isLoaded: false,
            error: null,
        };
    }

    componentDidMount() {
        fetch(API_LOOKUP + this.props.id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        cocktail: result.drinks[0],
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error,
                    });
                },
            );
    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div className="alert alert-danger w-100">Error: {error.message}</div>;
        }
        if (!isLoaded) {
            return <div className="container-fluid"><div className="row"><div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"><div className="alert alert-info w-100">Loading...</div></div></div></div>;
        }
        const ingredients = [];
        for (let i = 1; i <= 15; i += 1) {
            const name = this.state.cocktail[`strIngredient${i}`];
            if (name === '') break;
            const measure = this.state.cocktail[`strMeasure${i}`];
            ingredients.push({ name, measure });
        }
        return <Cocktail data={this.state.cocktail} ingredients={ingredients} />;
    }
}

ExtendedCard.propTypes = {
    id: PropTypes.string.isRequired,
};

export default ExtendedCard;
