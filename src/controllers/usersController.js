const {
  allUsersService,
  userByIdService,
  createUserService,
  deleteUserService,
  editUserService,
} = require("../services/usersService");

const allUsersController = async (req, res) => {
  const users = await allUsersService();
  res.json(users);
};

const oneUserController = async (req, res) => {
  const { id } = req.params;

  const getUserById = await userByIdService(id);
  res.json(getUserById);
};

const createUserController = async (req, res) => {
  const { name, email, pass } = req.body;

  const createNewUser = await createUserService(name, email, pass);
  res.json(createNewUser);
};

const deleteUserController = async (req, res) => {
  const { id } = req.params;

  const removeUserById = await deleteUserService(id);
  res.send("User removed!");
};

const editUserController = async (req, res) => {
  const { id } = req.params;
  const { name, email, pass } = req.body;

  const editUserById = await editUserService(id, name, email, pass);
  res.send("User updated!");
};

module.exports = {
  allUsersController,
  oneUserController,
  createUserController,
  deleteUserController,
  editUserController,
};
