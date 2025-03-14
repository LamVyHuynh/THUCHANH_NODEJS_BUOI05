const axios = require("axios");
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
axios
  .get("https://jsonplaceholder.typicode.com/posts/1", {
    cancelToken: source.token,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (axios.isCancel(error)) {
      console.error("Request canceled:", error.message);
    } else {
      console.error("Error:", error.message);
    }
  });
source.cancel("Operation canceled by the user.");
