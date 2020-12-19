import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pagination from '../pagination';

const mapStateToProps = (state) => {
  const { userDetailsReducer } = state;
  const { userDetails, page, isLoading } = userDetailsReducer;

  return {
    userDetails,
    page,
    isLoading,
  };
};

function UserDetails({
  userDetails,
  totalData,
  queryHandler,
  isLoading,
  page,
  tab,
}) {
  const Component = tab.component;
  return (
    <div className='user-details-container'>
      <div>
        <h3 style={{ display: 'inline' }}>{`${totalData} ${tab.label}`}</h3>
        {totalData > 0 && (
          <Pagination
            style={{ display: 'inline', float: 'right' }}
            page={page}
            totalData={totalData}
            handler={queryHandler}
          />
        )}
      </div>
      <hr />
      {isLoading ? (
        <>
          <div className='loader' />
          <h3>Loading...</h3>
        </>
      ) : (
        <>
          {totalData > 0 &&
            userDetails.map((detail) => (
              <Component key={detail.id} data={detail} />
            ))}
          {totalData > 0 && (
            <Pagination
              page={page}
              totalData={totalData}
              handler={queryHandler}
            />
          )}
        </>
      )}
    </div>
  );
}

UserDetails.propTypes = {
  userDetails: PropTypes.arrayOf(PropTypes.any).isRequired,
  totalData: PropTypes.number.isRequired,
  queryHandler: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  tab: PropTypes.shape({
    label: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(UserDetails);
