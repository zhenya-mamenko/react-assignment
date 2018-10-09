import React from 'react';
import CocktailsList from './CocktailsList.jsx';
import './App.css';


const App = () => (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className="display-4 ml-3 mb-3">Cocktail Database</h1>
            </div>
        </div>
        <CocktailsList />
    </div>
);

export default App;
