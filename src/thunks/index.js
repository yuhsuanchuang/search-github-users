import {
  setUserProfile,
  setUserProfileLoading,
  setUsers,
  setLoading,
  setUserDetails,
  setUserDetailsLoading,
} from '../actions';
import { PAGE_SIZE } from '../pagination';
import githubApi from '../api';

export function fetchUsers(userName, page = 1) {
  return async (dispatch) => {
    if (userName) {
      dispatch(setLoading(true));
      try {
        const query = `/search/users?q=${userName}&page=${page}&per_page=${PAGE_SIZE}`;
        const results = await githubApi.get(query).then(async (resp) => {
          if (resp.status !== 200) {
            window.alert(resp.statusText);
          }
          return resp.data;
        });
        const users = results.items || [];
        const totalUsers = results.total_count;
        dispatch(setUsers(users, totalUsers));
      } catch (e) {
        window.alert(e);
      }
      dispatch(setLoading(false));
    }
  };
}

export function fetchUserProfile(userName) {
  return async (dispatch) => {
    if (userName) {
      dispatch(setUserProfileLoading(true));
      try {
        const queryUser = `/users/${userName}`;
        const userProfile = await githubApi
          .get(queryUser)
          .then(async (resp) => {
            if (resp.status !== 200) {
              window.alert(resp.statusText);
            }
            return resp.data;
          });

        dispatch(setUserProfile(userProfile));
      } catch (e) {
        window.alert(e);
      }
      dispatch(setUserProfileLoading(false));
    }
  };
}

export function fetchUserDetails(userName, page = 1, param) {
  return async (dispatch) => {
    if (userName) {
      dispatch(setUserDetailsLoading(true));
      try {
        const query = `/users/${userName}/${param}?page=${page}&per_page=${PAGE_SIZE}`;

        const details = await githubApi.get(query).then(async (resp) => {
          if (resp.status !== 200) {
            window.alert(resp.statusText);
          }
          return resp.data;
        });
        dispatch(setUserDetails(details));
      } catch (e) {
        window.alert(e);
      }
      dispatch(setUserDetailsLoading(false));
    }
  };
}
