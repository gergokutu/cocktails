import React from 'react';

const Pagination = (props) => {
  const pageNumbers = [];
  // const totalCocktails = 12;
  const cocktailsPerPage = 8;
  const { totalCocktails, paginate } = props;

  for (let i = 1; i <= Math.ceil(totalCocktails / cocktailsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <nav>
       
          <button>« Next</button>
          {/* { !pageNumbers.length && "" } */}
          { pageNumbers.map(number => {
            return (

                <button key={number} onClick={() => paginate(number)}>
                  {number}
                </button>
              )
            })
          }
          <button>Prev »</button>
       
      </nav>
    </div>
  );
}

export default Pagination;
