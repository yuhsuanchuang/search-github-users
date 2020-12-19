import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { userProfileReducer } = state;
  const { userProfile, isLoading } = userProfileReducer;
  return {
    userProfile,
    isLoading,
  };
};

function UserProfile({ userProfile, isLoading }) {
  if (isLoading || !userProfile) {
    return (
      <div className='user-profile'>
        <div className='loader' />
      </div>
    );
  }

  const {
    name,
    login,
    avatar_url: avatarUrl,
    bio,
    html_url: htmlUrl,
  } = userProfile;
  return (
    <div className='user-profile'>
      <img className='profile_avatar' src={avatarUrl} alt={login} />
      <h2 style={{ margin: '0px' }}>{name}</h2>
      <a style={{ color: 'gray', margin: 0, fontSize: '20px' }} href={htmlUrl}>
        {login}
      </a>
      <p>{bio}</p>
      {Object.keys(userProfile).map((attribute) => (
        <p
          key={attribute}
          style={{ fontSize: '5px', color: 'gray' }}
        >{`${attribute} : ${userProfile[attribute]}`}</p>
      ))}
    </div>
  );
}

UserProfile.defaultProps = {
  userProfile: undefined,
};

UserProfile.propTypes = {
  userProfile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    bio: PropTypes.string,
    html_url: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(UserProfile);
