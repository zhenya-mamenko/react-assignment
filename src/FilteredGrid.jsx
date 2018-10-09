import React from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid.jsx';
import Select from './Select.jsx';
import { SORT_FIELDS, API_CATEGORIES_LIST, API_INGREDIENTS_LIST } from './consts.jsx';
import './FilteredGrid.css';

class FilteredGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {
                category: null,
                ingredient: null,
            },
            sort: 'strCategory',
            categories: [],
            ingredients: [],
        };
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    componentDidMount() {
        fetch(API_CATEGORIES_LIST)
            .then(res => res.json())
            .then(
                (result) => {
                    const drinks = result.drinks ? result.drinks : [];
                    this.setState({
                        categories: drinks.map(v => v.strCategory).sort(),
                    });
                },
                (error) => {
                    this.setState({
                        categories: [error.message],
                    });
                },
            );

        fetch(API_INGREDIENTS_LIST)
            .then(res => res.json())
            .then(
                (result) => {
                    const drinks = result.drinks ? result.drinks : [];
                    this.setState({
                        ingredients: drinks.map(v => v.strIngredient1).sort(),
                    });
                },
                (error) => {
                    this.setState({
                        ingredients: [error.message],
                    });
                },
            );
    }

    handleFilterChange(field, value) {
        const filter = { ...this.state.filter };
        filter[field] = value !== '' ? value : null;
        this.setState({ filter });
    }

    handleSortChange(ssort) {
        let sort = '';
        SORT_FIELDS.map((f) => {
            if (f.show === ssort) sort = f.json;
            return false;
        });
        this.setState({ sort });
    }

    filterItems() {
        function checkIngredient(drink, ingredient) {
            for (let i = 1; i <= 15; i += 1) {
                const v = drink[`strIngredient${i}`];
                if (v === '') return false;
                if (v === ingredient) return true;
            }
            return false;
        }

        const result = [];
        const { category, ingredient } = this.state.filter;
        this.props.items.map((drink) => {
            if ((!category || drink.strCategory === category)
                && (!ingredient || checkIngredient(drink, ingredient))
            ) {
                result.push(drink);
            }
            return true;
        });
        return result;
    }

    render() {
        const existsCategories = [];
        const existsIngredients = [];
        if (this.props.items.length > 0) {
            this.props.items.map((d) => {
                if (existsCategories.indexOf(d.strCategory) === -1) existsCategories.push(d.strCategory);
                for (let i = 1; i <= 15; i += 1) {
                    const v = d[`strIngredient${i}`];
                    if (v === '') break;
                    if (existsIngredients.indexOf(v) === -1) existsIngredients.push(v);
                }
                return false;
            });
            existsCategories.sort();
            existsIngredients.sort();
        }

        const items = this.filterItems();

        const notFound = (
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                    <div className="alert alert-warning w-100">Not found</div>
                </div>
            </div>
        );

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                        <Select
                            field="Category"
                            items={this.state.categories.filter(v => existsCategories.indexOf(v) !== -1)}
                            onChange={this.handleFilterChange}
                        />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                        <Select
                            field="Ingredient"
                            items={this.state.ingredients.filter(v => existsIngredients.indexOf(v) !== -1)}
                            onChange={this.handleFilterChange}
                        />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                        <Select
                            field="Sort by"
                            items={SORT_FIELDS.map(v => v.show).sort()}
                            onChange={this.handleSortChange}
                        />
                    </div>
                </div>
                { (items.length === 0) && notFound }
                { (items.length !== 0) && <Grid items={items} sort={this.state.sort} /> }
            </div>
        );
    }
}

FilteredGrid.propTypes = {
    items: PropTypes.array.isRequired,
};

export default FilteredGrid;
