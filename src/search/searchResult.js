import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pagination from '../pagination';
import { SearchResultCard } from './searchResultCard';

const mapStateToProps = (state) => {
  const { searchUsersReducer } = state;
  const { users, totalUsers, page, isLoading } = searchUsersReducer;
  return {
    users,
    totalUsers,
    page,
    isLoading,
  };
};

function SearchResult({ users, totalUsers, searchHandler, isLoading, page }) {
  return (
    <div className='search-result-container'>
      {isLoading ? (
        <>
          <div className='loader' />
          <h3>Searching...</h3>
        </>
      ) : (
        <>
          {totalUsers > 0 && (
            <Pagination
              page={page}
              totalData={totalUsers}
              handler={searchHandler}
            />
          )}
          {totalUsers > 0 ? (
            users.map((user) => <SearchResultCard key={user.id} user={user} />)
          ) : (
            <h3>No results</h3>
          )}
          {totalUsers > 0 && (
            <Pagination
              page={page}
              totalData={totalUsers}
              handler={searchHandler}
            />
          )}
        </>
      )}
    </div>
  );
}

SearchResult.propTypes = {
  users: PropTypes.arrayOf(PropTypes.any).isRequired,
  totalUsers: PropTypes.number.isRequired,
  searchHandler: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(SearchResult);
