import React from 'react';
import PropTypes from 'prop-types';

export function UserCard({ data }) {
  const { login, avatar_url: avatarUrl, html_url: htmlUrl } = data;
  return (
    <>
      <div className='user-details-card'>
        <img className='avatar' src={avatarUrl} alt={login} />
        <a href={htmlUrl} className='title'>
          {login}
        </a>
      </div>
      <hr />
    </>
  );
}

UserCard.propTypes = {
  data: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
};
