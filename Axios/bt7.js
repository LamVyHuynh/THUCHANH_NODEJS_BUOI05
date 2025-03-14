const axios = require("axios");
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
api
  .get("/posts/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
