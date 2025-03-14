fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("post", JSON.stringify(data));
    console.log("Data saved to localStorage.");
  })
  .catch((error) => console.error("Error:", error));
