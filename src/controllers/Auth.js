const { User } = require("../models");

const authController = {
  showLogin(req, res) {
    return res.render("auth/login");
  },
  showRegister(req, res) {
    return res.render("auth/register");
  },

  async register(req, res) {
    try {
      const { name, email, password, username } = req.body;

      const user = await User.create({
        name,
        email,
        password,
        username,
        avatar: "link",
        create_at: new Date().toISOString(),
      });

      return res.redirect("/login");
    } catch (err) {
      console.log(err);
      return res.redirect("/registro");
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.render("auth/login", { error: "Usuario não existe!" });
      }

      if (user.password != password) {
        return res.render("auth/login", { error: "Senha está errada!" });
      }

      return res.redirect("/home");
    } catch (error) {
      console.log(error);
      return res.render("auth/login", {
        error: "Sistema indisponivel tente novamente!",
      });
    }
  },
};

module.exports = authController;
