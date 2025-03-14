const axios = require("axios");
axios
  .get("https://jsonplaceholder.typicode.com/posts/invalid")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (error.response) {
      console.error("Error Status:", error.response.status);
      console.error("Error Data:", error.response.data);
    } else {
      console.error("Error:", error.message);
    }
  });
