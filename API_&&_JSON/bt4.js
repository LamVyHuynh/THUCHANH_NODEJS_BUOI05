fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const post = posts.find((post) => post.id === 5);
    console.log(post);
  })
  .catch((error) => console.error("Error:", error));
