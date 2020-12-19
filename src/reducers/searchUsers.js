const initialState = {
  users: [],
  totalUsers: 0,
  page: 1,
  isLoading: false,
};

export const searchUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.users,
        totalUsers: action.totalUsers,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.page,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
