const axios = require("axios");
async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
fetchData();
