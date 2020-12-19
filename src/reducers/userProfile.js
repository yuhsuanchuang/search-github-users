const initialState = {
  userProfile: undefined,
  isLoading: false,
};

export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_PROFILE_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "SET_USER_PROFILE":
      return {
        ...state,
        userProfile: action.userProfile,
        totalRepos: action.userProfile.public_repos,
      };

    default:
      return state;
  }
};
