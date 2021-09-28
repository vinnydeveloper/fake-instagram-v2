const { User } = require("./src/models");

//insert

User.findOne({
  where: {
    name: "Vinicius",
  },
});

//select

User.delete({
  where: {
    name: "Gustavo",
  },
}).then((resultado) => console.log(resultado.email));
