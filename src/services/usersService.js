const UsersModel = require("../models/usersModel");

const allUsersService = async () => {
  try {
    const users = await UsersModel.find();
    return users;
  } catch (err) {
    return err;
  }
};

const userByIdService = async (id) => {
  try {
    const user = await UsersModel.findById(id);
    return user;
  } catch (err) {
    return "Usuário não encontrado!";
  }
};

const createUserService = async (name, email, pass) => {
  try {
    if (await UsersModel.findOne({ email })) {
      return "Usuário já existe!";
    }
    const createUser = await UsersModel.create({ name, email, pass });
    return createUser;
  } catch (err) {
    return err;
  }
};

const deleteUserService = async (id) => {
  try {
    const userDeleted = await UsersModel.findByIdAndDelete(id);
    return userDeleted;
  } catch (err) {
    return err;
  }
};

const editUserService = async (id, name, email, pass) => {
  try {
    const userEdited = await UsersModel.findByIdAndUpdate(id, {
      name,
      email,
      pass,
    });
    return userEdited;
  } catch (err) {
    return err;
  }
};

module.exports = {
  allUsersService,
  userByIdService,
  createUserService,
  deleteUserService,
  editUserService,
};
