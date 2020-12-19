import React from 'react';
import PropTypes from 'prop-types';

export const PAGE_SIZE = 30;

function Pagination({ totalData, page, handler }) {
  const totalPages = Math.ceil(totalData / PAGE_SIZE);
  return (
    <div>
      <button
        type='button'
        className='pagination-button'
        disabled={page <= 1}
        onClick={() => {
          handler({ page: page - 1 });
        }}
      >
        Prev
      </button>
      Page: {page} / {totalPages}
      <button
        type='button'
        className='pagination-button'
        disabled={page >= totalPages}
        onClick={() => {
          handler({ page: page + 1 });
        }}
      >
        Next
      </button>
      <span style={{ fontSize: '5%' }}>{`${PAGE_SIZE}/page`}</span>
    </div>
  );
}

Pagination.propTypes = {
  totalData: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Pagination;
