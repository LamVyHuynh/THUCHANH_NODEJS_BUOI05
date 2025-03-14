Promise.all([
  fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
    res.json()
  ),
  fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
    res.json()
  ),
])
  .then(([post, user]) => {
    console.log("Post:", post);
    console.log("User:", user);
  })
  .catch((error) => console.error("Error:", error));
