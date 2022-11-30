# Search Github Users

This project is a front-end web app where user can search Github users by login name.

- This application is built by [React](https://github.com/facebook/react) and [Redux](https://github.com/reactjs/redux)
- [Webpack](https://github.com/webpack/webpack) is being used to build the application
- Search Github user using [Github API](https://developer.github.com/v3/).

## Description

### Installation and Run

- Clone the repo:

```
git clone https://github.com/yuhsuanchuang/search-github-users.git
```

- Install the package dependencies, build and start:

Note: Before running the app, please replace the `GITHUB_API_TOKEN` variable in `.env` file with your [Personal access token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)

```sh
$ cd search-github-users
$ npm install
$ npm run build
$ npm start
```

Then the server should be running on http://localhost:8080/

- To run in dev mode:

```sh
$ npm run dev
```

### Features

- A search bar to let the user search by username (login name)
- While searching, the application shows an animated loading indicator
- After the search is completed, the application shows the list of users along with their avatar and their username on the same page
- Support pagination for search results
- When a user item is clicked on the search page, the application is navigated to the user page that display the User profile, parsed JSON payload, repositories, followers and followings of that user
- All pages' URL is reusable - meaning it can be copied and pasted on different browser and still shows the same result
- The results list also asynchronous-ly shows the number of followers and following of each user without going the user page
- The application is optimised for mobile

### Deployment

This application was deployed on "[Vercel](https://zeit.co/now)" at [https://search-github-users-nine.vercel.app/](https://search-github-users-nine.vercel.app/)
