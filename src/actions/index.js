export const setUsers = (users, totalUsers) => {
  return {
    type: 'SET_USERS',
    users,
    totalUsers,
  };
};

export const setPage = (page) => {
  return {
    type: 'SET_PAGE',
    page,
  };
};

export const setLoading = (isLoading) => {
  return {
    type: 'SET_LOADING',
    isLoading,
  };
};

export const setUserProfile = (userProfile) => {
  return {
    type: 'SET_USER_PROFILE',
    userProfile,
  };
};

export const setUserProfileLoading = (loading) => {
  return {
    type: 'SET_USER_PROFILE_LOADING',
    isLoading: loading,
  };
};

export const setUserDetails = (userDetails) => {
  return {
    type: 'SET_USER_DETAILS',
    userDetails,
  };
};

export const setUserDetailsLoading = (loading) => {
  return {
    type: 'SET_USER_DETAILS_LOADING',
    isLoading: loading,
  };
};

export const setUserDetailsPage = (page) => {
  return {
    type: 'SET_USER_DETAILS_PAGE',
    page,
  };
};
