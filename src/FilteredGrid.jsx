import React from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid.jsx';
import Select from './Select.jsx';
import { SORT_FIELDS } from './consts.jsx';
import Utils from './utils.jsx';
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
        };
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
    }

    handleFilterChange(field, value) {
        const filter = { ...this.state.filter };
        filter[field] = value !== '---null---' ? value : null;
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
                const v = Utils.properCase(drink[`strIngredient${i}`]);
                if (v === '') return false;
                if (v === ingredient) return true;
            }
            return false;
        }

        const result = [];
        const { category, ingredient } = this.state.filter;
        this.props.items.map((drink) => {
            if ((!category || drink.strCategory === category)
                && (!ingredient || checkIngredient(drink, Utils.properCase(ingredient)))
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
                const category = Utils.properCase(d.strCategory);
                if (existsCategories.indexOf(category) === -1) existsCategories.push(category);
                for (let i = 1; i <= 15; i += 1) {
                    const ingredient = Utils.properCase(d[`strIngredient${i}`]);
                    if (ingredient === '') break;
                    if (existsIngredients.indexOf(ingredient) === -1) existsIngredients.push(ingredient);
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
                            items={existsCategories}
                            onChange={this.handleFilterChange}
                        />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                        <Select
                            field="Ingredient"
                            items={existsIngredients}
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
