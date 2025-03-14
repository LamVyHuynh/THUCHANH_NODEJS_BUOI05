Promise.all([
  axios.get("https://jsonplaceholder.typicode.com/posts/1"),
  axios.get("https://jsonplaceholder.typicode.com/posts/2"),
])
  .then((responses) => {
    console.log("Post 1:", responses[0].data);
    console.log("Post 2:", responses[1].data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
