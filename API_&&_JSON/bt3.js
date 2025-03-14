fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const titles = posts.map((post) => post.title);
    console.log(titles);
  })
  .catch((error) => console.error("Error:", error));
