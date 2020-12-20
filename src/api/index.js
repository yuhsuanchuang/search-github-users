import axios from "axios";

console.log(process.env.GITHUB_API_TOKEN);
const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github.v3+json",
    Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
  },
});

export default githubApi;
