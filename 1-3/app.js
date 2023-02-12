const axios = require("axios");
const fs = require("fs");
axios
  .get("https://reqres.in/api/users?page.typicode.com/users")
  .then((respons) => {
    fs.writeFile("test.txt", "utf8", () => respons.statusCode);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// const writeUserDataInExel = (userData) => {

// };
// (() => {
//   const request = require("native-request");
//   request.get(
//     "https://reqres.in/api/users?page=1.com",
//     function (err, data, status, headers) {
//       if (err) {
//         throw err;
//       }
//       const userData = JSON.parse(data);
//       const userDataJson = JSON.stringify(userData.data);
//       writeUserDataInExel(userDataJson);
//     }
//   );
// })();
