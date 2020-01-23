require("./connection");

const User = require("./models/User");

async function createUsers() {
  const userOne = new User({
    username: "fazt",
    password: "12345"
  });

  await userOne.save();

//   this cause duplicate error
//   const userTwo = new User({
//     username: "fazt",
//     password: "securepassword"
//   });

//   await userTwo.save();
}

createUsers();
