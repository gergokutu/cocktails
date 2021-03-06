import React, { Component } from 'react';
import CocktailsImages from './CocktailsImages';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

export default class CocktailsImagesContainer extends Component {
  state = {
    cocktails: [],
    cocktailsPerPage: 6,
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

  prevPage = () => { 
    const { pageNumber, cocktails, cocktailsPerPage } = this.state;
    const allPages = Math.floor(cocktails.length / cocktailsPerPage);

    if (pageNumber < 2 ) {
      this.setState({ pageNumber: 1})
    } else if (pageNumber > allPages) {
      this.setState({ pageNumber: allPages})
    } else {
      this.setState({ pageNumber: pageNumber - 1 })
    }
  };

  nextPage = () => { 
    const { pageNumber, cocktails, cocktailsPerPage } = this.state;
    const allPages = Math.ceil(cocktails.length / cocktailsPerPage);

    if (pageNumber > allPages - 1) {
      this.setState({ pageNumber: allPages })
    } else if (pageNumber < 1) {
      this.setState({ pageNumber: 1 });
    } else {
      this.setState({ pageNumber: pageNumber + 1});
    }
   };

  showPage = () => {
    const { cocktails, cocktailsPerPage, pageNumber } = this.state;
    return cocktails.slice((pageNumber - 1) * cocktailsPerPage, pageNumber * cocktailsPerPage);
  };

  render() {
    const categoryName = this.props.location.pathname.slice(12);
    // change the / to space with regex
    const cocktailName = categoryName.replace(/_/g," ");
    const cocktailsOnPage = this.showPage();
    // console.log("cocktails on page:", cocktailsOnPage)

    return (
      <div>
        <CocktailsImages category={cocktailName} cocktails={cocktailsOnPage} />
        <Pagination
          pageNumbers={this.paginate()}
          updatePageNumber={this.updatePageNumber}
          nextPage={this.nextPage}
          prevPage={this.prevPage}
        />
        <div className="back-to-index">
          {/* to index page cat ID */}
          <Link to="/">Go back to the index</Link>
        </div>
      </div>
    );
  }
}