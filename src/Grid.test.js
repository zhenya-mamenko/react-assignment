import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './Grid.jsx';

it('renders without crashing', () => {
    const items = [{ idDrink: '13060', strDrink: 'Margarita', strDrinkES: null, strDrinkDE: null, strDrinkFR: null, 'strDrinkZH-HANS': null, 'strDrinkZH-HANT': null, strVideo: null, strCategory: 'Ordinary Drink', strIBA: 'Contemporary Classics', strAlcoholic: 'Alcoholic', strGlass: 'Cocktail glass', strInstructions: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.', strInstructionsES: null, strInstructionsDE: null, strInstructionsFR: null, 'strInstructionsZH-HANS': null, 'strInstructionsZH-HANT': null, strDrinkThumb: 'https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wpxpvu1439905379.jpg', strIngredient1: 'Tequila', strIngredient2: 'Triple sec', strIngredient3: 'Lime juice', strIngredient4: 'Salt', strIngredient5: '', strIngredient6: '', strIngredient7: '', strIngredient8: '', strIngredient9: '', strIngredient10: '', strIngredient11: '', strIngredient12: '', strIngredient13: '', strIngredient14: '', strIngredient15: '', strMeasure1: '1 1\/2 oz ', strMeasure2: '1\/2 oz ', strMeasure3: '1 oz ', strMeasure4: '', strMeasure5: '', strMeasure6: '', strMeasure7: '', strMeasure8: '', strMeasure9: '', strMeasure10: '', strMeasure11: '', strMeasure12: '', strMeasure13: '', strMeasure14: '', strMeasure15: '', dateModified: '2015-08-18 14:42:59' }];
    const div = document.createElement('div');
    ReactDOM.render(<Grid items={items} sort="strDrink" />, div);
    ReactDOM.unmountComponentAtNode(div);
});
