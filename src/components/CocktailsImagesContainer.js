import React, { Component } from 'react';
import CocktailsImages from './CocktailsImages';
import Pagination from './Pagination';

export default class CocktailsImagesContainer extends Component {
  state = {
    cocktails: [],
    cocktailsPerPage: 8,
    pageNumber: 1 
  };

  componentDidMount() {
    // const { categoryName } = this.props.match.params;
    // I have to use the this.props.location to get the right format
    // for the fetch URL easily...
    const categoryName = this.props.location.pathname.slice(12);

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(categoryName)}`)
      .then(response => response.json())
      .then(data => this.updateCocktails(data.drinks))
      .catch(console.error);
  };

  updateCocktails = cocktailsToUpdate => this.setState({ cocktails: cocktailsToUpdate });

  paginate = () => {
    const pageNumbers = [];
    const { cocktails, cocktailsPerPage } = this.state;

    for (let i = 1; i <= Math.ceil(cocktails.length / cocktailsPerPage); i++) {
     pageNumbers.push(i);
    }

    return pageNumbers;
  };

  updatePageNumber = (number) => this.setState({ pageNumber: number});

  showPage = () => {
    const { cocktails, cocktailsPerPage, pageNumber } = this.state;
    return cocktails.slice((pageNumber - 1) * cocktailsPerPage, pageNumber * cocktailsPerPage);
  };

  render() {
    const categoryName = this.props.location.pathname.slice(12);
    // change the / to space with regex
    const cocktailName = categoryName.replace(/_/g," ");
    const cocktailsOnPage = this.showPage();
    console.log("cocktails on page:", cocktailsOnPage)

    return (
      <div>
        <CocktailsImages category={cocktailName} cocktails={cocktailsOnPage} />
        <Pagination
          pageNumbers={this.paginate()}
          updatePageNumber={this.updatePageNumber}
        />
      </div>
    );
  }
}