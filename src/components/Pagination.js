import React from 'react';

const Pagination = (props) => {
  const { updatePageNumber, pageNumbers } = props

  return (
    <nav className="pagination">
      <button>« Next</button>
      { !pageNumbers.length && "" }
      { pageNumbers.length &&
        pageNumbers.map(number => {
        return (
            <button key={number} onClick={() => updatePageNumber(number)}>
              {number}
            </button>
          )
        })
      }
      <button>Prev »</button>
    </nav>
  );
}

export default Pagination;
