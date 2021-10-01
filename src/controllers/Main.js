const { Publication } = require("../models");
const mainController = {
  showHome(req, res) {
    return res.render("home");
  },
  showCreatePublication(req, res) {
    return res.render("post");
  },

  async createPublication(req, res) {
    const { filename } = req.file;
    const { user } = req.session;

    try {
      const newPost = await Publication.create({
        image: filename,
        user_id: user.id,
        create_at: new Date().toISOString(),
      });

      return res.redirect("/home");
    } catch (err) {
      console.log(err);
      return res.render("posts", {
        error: "Erro ao tentar cadastrar a publicação",
      });
    }
  },
};

module.exports = mainController;
