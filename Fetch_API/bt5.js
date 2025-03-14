fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => {
    if (response.ok) {
      console.log("Deleted successfully.");
    } else {
      throw new Error("Failed to delete.");
    }
  })
  .catch((error) => console.error("Error:", error));
