import React, { Component } from 'react';
import CocktailDetails from './CocktailDetails';

export default class CocktailDetailsContainer extends Component {
  state = {
    cocktail: null
  };

  componentDidMount() {
    const { cocktailID } = this.props.match.params;
    
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(cocktailID)}`)
      .then(response => response.json())
      .then(data => this.updateCocktail(data.drinks))
      .catch(console.error);
  }

  updateCocktail = (cocktailToUpdate) => this.setState({ cocktail: cocktailToUpdate });

  getIngredients = () => {
    const { cocktail } = this.state;
    const ingredients = [];

    if (cocktail !== null) {
      for (let i = 1; i < 16; i++) {
        const propName = `strIngredient${i}`;

        for (const property in cocktail[0]) {
          if (property === propName && (cocktail[0][property] !== null)) {
            ingredients.push(cocktail[0][property])
          }
        }
      }
    }

    return ingredients;
  };

  render() {
    return (
      <CocktailDetails cocktail={this.state.cocktail} ingredients={this.getIngredients()} />
    );
  }
}