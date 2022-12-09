const UsersController = require("../controllers/usersController");

const { Router } = require("express");
const router = new Router();

router.get("/teste", (req, res) => {
  res.status(200).send({
    message: "Conectado!",
    status: 200,
  });
});

router.get("/", UsersController.allUsers);
router.get("/:id", UsersController.oneUser);
router.post("/", UsersController.createUser);
router.delete("/:id", UsersController.deleteUser);
router.put("/:id", UsersController.editUser);

module.exports = router;
