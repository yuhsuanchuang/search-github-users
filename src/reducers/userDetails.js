const initialState = {
  userDetails: [],
  isLoading: false,
  page: 1,
};

export const userDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DETAILS_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "SET_USER_DETAILS":
      return {
        ...state,
        userDetails: action.userDetails,
      };
    case "SET_USER_DETAILS_PAGE":
      return {
        ...state,
        page: action.page,
      };

    default:
      return state;
  }
};
