# Github User Search

This project is a front-end web app where user can search Github users by login name.

- This application is built by [React](https://github.com/facebook/react) and [Redux](https://github.com/reactjs/redux)
- [Webpack](https://github.com/webpack/webpack) is being used to build the application
- Github user search using [Github API](https://developer.github.com/v3/).

## Description

### Installation and Run

Clone the repo:

```
git clone https://github.com/yuhsuanchuang/github-user-search.git
```

Install the package dependencies and start:

```sh
$ cd github-user-search
$ npm install
$ npm run build
$ npm start
```

Then the server should be running on http://localhost:8080/

### Features

- A search bar to let the user search by username (login name)
- While searching, the application shows an animated loading indicator
- After the search is completed, the application shows the list of users along with their avatar and their username on the same page
- Support pagination for search results
- When a user item is clicked on the search page, the application is navigated to the user page that display the parsed JSON payload, repositories, followers and followings of that user
- All pages' URL is reusable - meaning it can be copied and pasted on different browser and still shows the same result
- The application is optimised for mobile

### Deployment

This application was deployed on "[Now](https://zeit.co/now)" at [https://search-github-users-nine.vercel.app/](https://search-github-users-nine.vercel.app/)
