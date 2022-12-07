const {
  allUsersController,
  oneUserController,
  createUserController,
  deleteUserController,
  editUserController,
} = require("../controllers/usersController");

const { Router } = require("express");
const router = new Router();

router.get("/teste", (req, res) => {
  res.status(200).send({
    message: "Conectado!",
    status: 200,
  });
});

router.get("/", allUsersController);
router.get("/:id", oneUserController);
router.post("/", createUserController);
router.delete("/:id", deleteUserController);
router.put("/:id", editUserController);

module.exports = router;
