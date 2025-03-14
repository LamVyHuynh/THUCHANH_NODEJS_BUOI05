console.log("Loading...");
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log("Finished loading.");
  })
  .catch((error) => console.error("Error:", error));
