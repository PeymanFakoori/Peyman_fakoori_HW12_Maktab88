const fs = require("fs");
const path = "user-data.json";

const read = function () {
  return new Promise((resolve, reject) => {
    readFile(path, "utf", (error, data) => {
      if (error) return reject(error);
      resolve(JSON.parse(data));
    });
  });
};

const write = function () {
  return new Promise((resolve, reject) => {
    writeFile(path, "utf", (error) => {
      if (error) return reject(error);
      resolve();
    });
  });
};

const newUser = {
  uid: 113322,
  firstname: "John",
  lastname: "lennon",
  city: "New York",
  postalCode: "0382748973",
  phoneNumber: "09122222222",
  position: "creator",
};

const creat = function () {
  read()
    .then((data) => {
      data.push(newData);
      const updatedData = JSON.stringify(currentData);

      return write(updatedData);
    })
    .then(() => {
      console.log("is written successfully!");
    })
    .catch((err) => err.message);
};

const update = (uid, newUser) => {
  read()
    .then((data) => {
      const consideredUser = data.find((user) => user.uid == uid);
      if (!consideredUser) throw new Error("not found");
      const updatedData = JSON.stringify(
        data.map((user) => {
          return user.uid !== uid ? user : newUser;
        })
      );

      return write(updatedData);
    })
    .then(console.log("updated"))
    .catch((err) => console.log(err.message));
};

const remove = (uid) => {
  read()
    .then((data) => {
      const updatedUser = JSON.stringify(
        data.filter((user) => user.uid !== uid)
      );
      return write(updatedUser);
    })
    .then(console.log("is written successfully!"))
    .catch((err) => console.log(err.message));
};
console.log(remove(778899));
