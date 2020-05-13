import React from 'react';

const Pagination = (props) => {
  const pageNumbers = [];
  const totalPhotos = 12;
  const photosPerPage = 4;

  const paginate = () => {};

  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div class="pagination">
      <nav>
        <ul>
          <li>« Next</li>
          {/* { !pageNumbers.length && "" } */}
          { pageNumbers.map(number => {
            return (
              <li key={number}>
                <a onClick={() => paginate(number)} href="!#">
                  {number}
                </a>
              </li>)
            })
          }
          <li>Prev »</li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
