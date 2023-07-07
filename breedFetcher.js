const request = require("request");

request.get("https://api.thecatapi.com/v1/breeds/search?q=sib", (error, response, body) => {
  if (error) {
    console.error("Error:", error);
    return;
  }

  console.log("Response status code:", response.statusCode);
  console.log("Response body:", body);
  console.log("Type of body:", typeof body);
}) 
