import React from 'react';
import '../styles/Pagination.css'

const Pagination = (props) => {
  const { updatePageNumber, pageNumbers, nextPage, prevPage } = props

  return (
    <nav className="pagination">
      <li key="prev" onClick={() => prevPage()}>« Prev</li>
      { !pageNumbers.length && "" }
      { pageNumbers.length &&
        pageNumbers.map(number => {
        return (
            <li key={number} onClick={() => updatePageNumber(number)}>
              {number}
            </li>
          )
        })
      }
      <li key="next" onClick={() => nextPage()}>Next »</li>
    </nav>
  );
}

export default Pagination;
