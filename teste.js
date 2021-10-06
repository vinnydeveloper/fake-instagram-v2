const { Publication, User } = require("./src/models");

Publication.findAll({
  include: [
    {
      model: User,
    },
  ],
}).then((teste) => console.log(teste));
