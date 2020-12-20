import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { setUserDetailsPage } from "../actions";
import { fetchUserProfile, fetchUserDetails } from "../thunks";
import UserProfile from "./userProfile";
import UserDetails from "./userDetails";
import { ReposCard } from "./reposCard";
import { UserCard } from "./userCard";

const mapStateToProps = (state) => {
  const { userProfileReducer } = state;
  const { userProfile } = userProfileReducer;
  return {
    userProfile,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    queryUser: (userName) => dispatch(fetchUserProfile(userName)),
    queryUserDetails: (userName, page, query) =>
      dispatch(fetchUserDetails(userName, page, query)),
    onChangePage: (page) => dispatch(setUserDetailsPage(page)),
  };
};
const tabs = {
  repos: {
    query: "repos",
    label: "Repositories",
    totalDataLabel: "public_repos",
    component: ReposCard,
  },
  followers: {
    query: "followers",
    label: "Followers",
    totalDataLabel: "followers",
    component: UserCard,
  },
  following: {
    query: "following",
    label: "Followings",
    totalDataLabel: "following",
    component: UserCard,
  },
};

function UserPage({
  userProfile = undefined,
  queryUser,
  queryUserDetails,
  onChangePage,
}) {
  const params = useParams();
  const { userName } = params;
  const [tab, setTab] = useState(tabs.repos);

  const queryUserDetailsHandler = ({
    name = userName,
    page = "1",
    query = tab.query,
  }) => {
    onChangePage(parseInt(page, 10));
    queryUserDetails(name, page, query);
  };
  useEffect(() => {
    queryUser(userName);
    queryUserDetailsHandler({
      name: userName,
      page: 1,
      query: tabs.repos.query,
    });
  }, []);

  return (
    <>
      <UserProfile />
      <div className="user-details-container">
        <div className="tab">
          {Object.keys(tabs).map((t) => (
            <button
              style={{ backgroundColor: tab === tabs[t] ? "#f1f1f1" : null }}
              key={t}
              type="button"
              onClick={() => {
                setTab(tabs[t]);
                if (tabs[t].query) {
                  queryUserDetailsHandler({
                    name: userName,
                    page: 1,
                    query: tabs[t].query,
                  });
                }
              }}
            >
              <h3>{tabs[t].label}</h3>
            </button>
          ))}
        </div>
      </div>
      {userProfile && (
        <UserDetails
          totalData={userProfile[tab.totalDataLabel]}
          queryHandler={queryUserDetailsHandler}
          tab={tab}
        />
      )}
    </>
  );
}

UserPage.defaultProps = {
  userProfile: undefined,
};

UserPage.propTypes = {
  userProfile: PropTypes.shape({
    public_repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }),
  queryUser: PropTypes.func.isRequired,
  queryUserDetails: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispachToProps)(UserPage);
