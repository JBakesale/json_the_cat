const request = require("request");
const breed = process.argv[2];

request.get(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (error, response, body) => {
    if (error) {
      console.error("Error:", error);
      return;
    }
    if (!breed) {
      console.log("No breed input detected");
      return;
    }
    if (body === []) {
      console.log("There was an error with your breed input");
    }
    const data = JSON.parse(body);
    const description = data[0].description;
   
    console.log(description);
  }
);
