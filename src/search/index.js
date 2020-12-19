import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";
import SearchResult from "./searchResult";
import { fetchUsers } from "../thunks";
import { setPage } from "../actions";

const mapDispachToProps = (dispatch) => {
  return {
    queryUsers: (userName, page) => dispatch(fetchUsers(userName, page)),
    onChangePage: (page) => dispatch(setPage(page)),
  };
};

function SearchPage({ queryUsers, onChangePage }) {
  const history = useHistory();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search);
  const currentUserName = searchQuery.get("userName");
  const currentPage = searchQuery.get("page");
  const [searchUserName, setSearchUserName] = useState(currentUserName || "");

  const searchHandler = ({ userName = currentUserName, page = "1" }) => {
    onChangePage(parseInt(page, 10));
    if (userName) {
      history.push({
        pathname: "/",
        search: `?${new URLSearchParams({
          userName,
          page: page || "1",
        }).toString()}`,
      });
      queryUsers(userName, page);
    }
  };

  useEffect(() => {
    if (currentPage) {
      searchHandler({ userName: currentUserName, page: currentPage });
    }
  }, []);

  return (
    <>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by user name"
          value={searchUserName}
          onChange={(event) => setSearchUserName(event.target.value)}
        />
        <button
          type="submit"
          className="search-button"
          onClick={() => {
            searchHandler({ userName: searchUserName, page: 1 });
          }}
        >
          Search User
        </button>
      </div>
      <SearchResult searchHandler={searchHandler} />
    </>
  );
}

SearchPage.propTypes = {
  queryUsers: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default connect(() => ({}), mapDispachToProps)(SearchPage);
