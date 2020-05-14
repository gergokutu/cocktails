import React from 'react';

const Pagination = (props) => {
  const { updatePageNumber, pageNumbers, nextPage, prevPage } = props

  return (
    <nav className="pagination">
      <button key="prev" onClick={() => prevPage()}>« Prev</button>
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
      <button key="next" onClick={() => nextPage()}>Next »</button>
    </nav>
  );
}

export default Pagination;
