const axios = require("axios");
// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    console.log("Request Sent:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    console.log("Response Received:", response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios
  .get("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    console.log("Data:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
