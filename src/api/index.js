import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: { Authorization: "Token ce0e3c3c766be493512ce054ae7dad1c1c80d64e" },
});

export default githubApi;
