import React from 'react';
import CocktailsList from './CocktailsList.jsx';
import './App.css';


const App = () => (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className="display-4 ml-3 mb-3">The Cocktails Database
                    <small className="text-muted App-small"> by Evgenii Mamenko</small>
                </h1>
            </div>
        </div>
        <CocktailsList />
    </div>
);

export default App;
