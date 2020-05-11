import React, { Component } from 'react';
import CocktailsImages from './CocktailsImages';

export default class CocktailsImagesContainer extends Component {
  state = {
    cocktails: [] 
  };

  componentDidMount() {
    // const { categoryName } = this.props.match.params;
    const categoryName = this.props.location.pathname.slice(12);
    console.log("categoryName:", categoryName);

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(categoryName)}`)
      .then(response => response.json())
      .then(data => this.updateCocktails(data.drinks))
      .catch(console.error);
  };

  updateCocktails = cocktailsToUpdate => this.setState({ cocktails: cocktailsToUpdate });

  render() {
    const categoryName = this.props.location.pathname.slice(12);
    // change the / to space with regex
    const cocktailName = categoryName.replace(/_/g," ");

    return (
      <CocktailsImages category={cocktailName} cocktails={this.state.cocktails} />
    );
  }
}