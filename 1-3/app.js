const axios = require("axios");
const fs = require("fs");
axios
  .get("https://reqres.in/api/users?page.typicode.com/users")
  .then((res) => {
    fs.writeFile("test.txt", "utf8", () => res.statusCode);
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });
