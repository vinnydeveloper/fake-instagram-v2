const { User } = require("./src/models");

//insert

User.create({
  name: "Gustavo",
  email: "gustavo@email.com",
  password: "123",
  username: "gustavo2020",
  avatar: "link",
  create_at: new Date().toISOString(),
}).then((resultado) => {
  console.log(resultado);
});

//select

User.delete({
  where: {
    name: "Gustavo",
  },
}).then((resultado) => console.log(resultado.email));
