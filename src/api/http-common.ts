import axios from "axios";
import { getRefreshToken, updateToken } from "../utils/auth";

const axiosService = axios.create({
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
    "Content-Type": "application/json",
  },
});

// Setup an interceptor to handle 401 responses
axiosService.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is 401 and hasn't been retried yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Try to refresh the token
      const { data, status } = await axios.post("/refresh_token", {
        refreshToken: getRefreshToken(),
      });
      if (status === 200) {
        // Update the token in your store
        updateToken(data.token);

        // Modify the original request to use the new token
        originalRequest.headers["Authorization"] = "Bearer " + data.token;

        // Retry the original request
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosService;
