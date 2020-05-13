import React from 'react';

const Pagination = (props) => {
  const pageNumbers = [];
  const totalPhotos = 20;
  const photosPerPage = 5;

  for (let i = 1; i < Math.ceil(totalPhotos, photosPerPage); i++) {
    pageNumbers.push[i];
  }

  return (
    <div class="pagination">
      <nav>
        <ul>
          <li>« Next</li>
          {/* { !pageNumbers.length && "" } */}
          { pageNumbers.map(number => <li key={number}>{number}</li>) }
          <li>Prev »</li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
