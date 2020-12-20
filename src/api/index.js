import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
  },
});

export default githubApi;
