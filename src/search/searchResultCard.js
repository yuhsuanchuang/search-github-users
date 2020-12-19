import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export function SearchResultCard({ user }) {
  const history = useHistory();
  const { login, avatar_url: avatarUrl } = user;
  return (
    <button
      className='card'
      type='button'
      onClick={() => {
        history.push({
          pathname: `/user/${login}`,
        });
      }}
    >
      <img className='avatar' src={avatarUrl} alt={login} />
      <h3 style={{ display: 'inline' }}>{login}</h3>
    </button>
  );
}

SearchResultCard.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
};
