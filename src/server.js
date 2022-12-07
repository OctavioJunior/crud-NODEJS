const usersRoute = require("./routes/usersRoute.js");
const express = require("express");
const server = express();
require("./database/usersDB");

server.use(express.json());

server.use("/users", usersRoute);

server.listen(3001, () => {
  console.log(`Server running at http://localhost:3001/users`);
});
