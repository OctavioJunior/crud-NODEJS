const UsersModel = require("../models/usersModel");

class UsersService {
  constructor() {

    this.allUsers = async () => {
      try {
        const users = await UsersModel.find();
        return users;
      } catch (err) {
        return err;
      }
    };

    this.userById = async (id) => {
      try {
        const user = await UsersModel.findById(id);
        return user;
      } catch (err) {
        return "Usuário não encontrado!";
      }
    };

    this.createUser = async (name, email, pass) => {
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

    this.deleteUser = async (id) => {
      try {
        const userDeleted = await UsersModel.findByIdAndDelete(id);
        return userDeleted;
      } catch (err) {
        return err;
      }
    };

    this.editUser = async (id, name, email, pass) => {
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
    }
  }
};

module.exports = new UsersService();
