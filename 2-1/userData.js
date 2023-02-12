let users = [];
// $.ajax({
//   url: "https://reqres.in/api/users?page=1",
//   async: false,
//   success: function (page1) {
//     $.each(page1.data, function (key, val) {
//       users.push(val);
//     });
//   },
// });
// $.ajax({
//   url: "https://reqres.in/api/users?page=2",
//   async: false,
//   success: function (page2) {
//     $.each(page2.data, function (key, val) {
//       users.push(val);
//     });
//   },
// });

const fetch = require("fetch");

const getData = function () {
  fetch("https://reqres.in/api/users?page=1")((response) => response.json())(
    (result) => {
      users.push(result);
    }
  );
  fetch("https://reqres.in/api/users?page=2")((response) => response.json())(
    (result) => {
      users.push(result);
    }
  );
};
getData();
