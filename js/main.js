fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let dato in data) {
      console.log(data[dato].url);
    }
  });
