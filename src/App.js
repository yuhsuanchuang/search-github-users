import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import UserPage from "./user";
import SearchPage from "./search";

function App() {
  return (
    <>
      <div className="top-container">
        <h1>Search Github Users</h1>
        <h3>Author: Yu-Hsuan Chuang (Flora)</h3>
        <a href="https://github.com/yuhsuanchuang/search-github-users">
          github
        </a>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/user/:userName" component={UserPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
