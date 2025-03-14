fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const container = document.getElementById("posts");
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.textContent = post.title;
      container.appendChild(postElement);
    });
  })
  .catch((error) => console.error("Error:", error));
