const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  request.get(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error);
        return;
      }
      if (!breedName) {
        callback("There was an error with your breed input");
        return;
      }
      // if (body === []) {
      //   console.log("There was an error with your breed input");
      // }
      const data = JSON.parse(body);
      const description = data[0].description;

      callback(null, description);
    }
  );
};

module.exports = { fetchBreedDescription };
