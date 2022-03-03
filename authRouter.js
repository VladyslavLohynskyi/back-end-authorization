const Router = require("express");
const AuthController = require("./authController");
const { check } = require("express-validator");
const router = new Router();
const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");
router.post(
  "/registration",
  [
    check("username", "Username can't be empty").notEmpty(),
    check("password", "Password length must be between 4 and 10 ").isLength({
      min: 4,
      max: 10,
    }),
  ],
  AuthController.registration
);
router.post("/login", AuthController.login);
router.get("/users", roleMiddleware(["ADMIN"]), AuthController.getUsers);

module.exports = router;
