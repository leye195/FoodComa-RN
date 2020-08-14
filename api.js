import axios from "axios";

const api = axios.create({
  baseURL: "",
});

export const getImage = (path, defaultImage = "") => {
  if (!path) return defaultImage;
  return path;
};
