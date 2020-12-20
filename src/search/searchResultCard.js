import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import githubApi from "../api";

export function SearchResultCard({ user }) {
  const history = useHistory();
  const { login, avatar_url: avatarUrl } = user;
  const [isLoading, setIsLoading] = useState(false);
  const [userFollowers, setUserFollowers] = useState(0);
  const [userFollowings, setUserFollowings] = useState(0);

  useEffect(async () => {
    setIsLoading(true);
    const queryUser = `/users/${login}`;
    const userProfile = await githubApi.get(queryUser).then(async (resp) => {
      if (resp.status !== 200) {
        window.alert(resp.statusText);
      }
      return resp.data;
    });
    setUserFollowers(userProfile.followers);
    setUserFollowings(userProfile.following);
    setIsLoading(false);
  }, []);
  return (
    <button
      className="card"
      type="button"
      onClick={() => {
        history.push({
          pathname: `/user/${login}`,
        });
      }}
    >
      <div>
        <img className="avatar" src={avatarUrl} alt={login} />
        <h3 style={{ display: "inline" }}>{login}</h3>
      </div>
      <div style={{ float: "right" }}>
        {isLoading ? (
          <div className="dot-flashing" />
        ) : (
          <span style={{ fontSize: "13px", color: "gray" }}>
            {`${userFollowers} Followers / ${userFollowings} Followings`}
          </span>
        )}
      </div>
    </button>
  );
}

SearchResultCard.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
};
