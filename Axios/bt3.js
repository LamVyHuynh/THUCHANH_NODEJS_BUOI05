const axios = require("axios");
axios
  .get("https://jsonplaceholder.typicode.com/posts/1", {
    headers: {
      Authorization: "Bearer example_token",
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
