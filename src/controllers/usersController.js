const UsersService
  = require("../services/usersService");

class UsersController {
  constructor() {

    this.allUsers = async (req, res) => {
      const users = await UsersService.allUsers();
      res.json(users);
    };

    this.oneUser = async (req, res) => {
      const { id } = req.params;

      const getUserById = await UsersService.userById(id);
      res.json(getUserById);
    };

    this.createUser = async (req, res) => {
      const { name, email, pass } = req.body;

      const createNewUser = await UsersService.createUser(name, email, pass);
      res.json(createNewUser);
    };

    this.deleteUser = async (req, res) => {
      const { id } = req.params;

      const removeUserById = await UsersService.deleteUser(id);
      res.send("User removed!");
    };

    this.editUser = async (req, res) => {
      const { id } = req.params;
      const { name, email, pass } = req.body;

      const editUserById = await UsersService.editUser(id, name, email, pass);
      res.send("User updated!");
    };
  }
}
module.exports = new UsersController();
