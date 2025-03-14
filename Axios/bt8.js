const axios = require("axios");
axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "updated title",
    body: "updated body",
    userId: 1,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
