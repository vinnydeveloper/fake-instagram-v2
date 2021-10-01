const express = require("express");
const router = express.Router();
const path = require("path");
const isLogin = require("./middlewares/isLogin");
const upload = require("./middlewares/upload");
const authController = require("./controllers/Auth");
const mainController = require("./controllers/Main");

router.get("/", authController.showLogin);
router.get("/login", authController.showLogin);
router.post("/login", authController.login);
router.get("/registro", authController.showRegister);
router.post("/registro", authController.register);

router.get("/home", isLogin, mainController.showHome);
router.get("/publicar", isLogin, mainController.showCreatePublication);
router.post(
  "/publicar",
  isLogin,
  upload.single("photo"),
  mainController.createPublication
);

module.exports = router;
