import { combineReducers } from "redux";
import { searchUsersReducer } from "./searchUsers";
import { userProfileReducer } from "./userProfile";
import { userDetailsReducer } from "./userDetails";

const reducer = combineReducers({
  searchUsersReducer,
  userProfileReducer,
  userDetailsReducer,
});

export default reducer;
