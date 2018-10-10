/*
Component for cocktails list. Manage search.
*/

import React from 'react';
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
import { API_SEARCH } from './consts.jsx';
import FilteredGrid from './FilteredGrid.jsx';
import './CocktailsList.css';

class CocktailsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            items: [],
            isLoaded: false,
            error: null,
        };
        this.isUnmount = false;
        this.controller = new AbortController();
        this.signal = this.controller.signal;
    }

    componentDidMount() {
        this.loadItems('');
    }

    componentWillUnmount() {
        this.isUnmount = true;
        if (this.controller) this.controller.abort();
        this.signal = undefined;
        this.controller = undefined;
    }

    handleChange(search) {
        this.setState({
            search,
        });
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.loadItems(this.state.search);
        }
    }

    loadItems(search) {
        if (!this.isUnmount) {
            this.setState({
                items: [],
                isLoaded: false,
            });
        }
        fetch(API_SEARCH + search, { signal: this.signal })
            .then(res => res.json())
            .then(
                (result) => {
                    this.signal = undefined;
                    this.controller = undefined;
                    if (!this.isUnmount) {
                        this.setState({
                            isLoaded: true,
                            items: result.drinks ? result.drinks : [],
                        });
                    }
                },
                (error) => {
                    this.signal = undefined;
                    this.controller = undefined;
                    if (!this.isUnmount) {
                        this.setState({
                            isLoaded: true,
                            error,
                        });
                    }
                },
            );
    }

    render() {
        const { error, isLoaded } = this.state;
        if (error) {
            return <div className="alert alert-danger w-100">Error: {error.message}</div>;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Search for</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cocktail name or part"
                                onChange={e => this.handleChange(e.target.value)}
                                onKeyPress={e => this.handleKeyPress(e)}
                                value={this.state.search}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <button
                            type="button"
                            className="btn btn-primary w-100"
                            onClick={() => this.loadItems(this.state.search)}
                        >
                                GO
                        </button>
                    </div>
                    <div className="d-sm-block d-md-none w-100 m-2" />
                </div>
                <div className="row">
                    { !isLoaded && <div className="col"><div className="alert alert-info w-25">Loading...</div></div> }
                    { isLoaded && <FilteredGrid items={this.state.items} /> }
                </div>
            </div>
        );
    }
}

export default CocktailsList;
