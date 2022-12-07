const UsersModel = require("../models/usersModel");

const allUsersService = async () => {
  const users = await UsersModel.find();
  return users;
};

const userByIdService = async (id) => {
  const user = await UsersModel.findById(id);
  return user;
};

const createUserService = async (name, email, pass) => {
  const createUser = await UsersModel.create({ name, email, pass });
  return createUser;
};

const deleteUserService = async (id) => {
  const userDeleted = await UsersModel.findByIdAndDelete(id);
  return userDeleted;
};

const editUserService = async (id, name, email, pass) => {
  const userEdited = await UsersModel.findByIdAndUpdate(id, {
    name,
    email,
    pass,
  });
  return userEdited;
};

module.exports = {
  allUsersService,
  userByIdService,
  createUserService,
  deleteUserService,
  editUserService,
};
