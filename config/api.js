import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const fetchApi = async () => {
  const response = await axios.get(`${BASE_URL}/api`);
  return response.data;
};
