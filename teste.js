const bcrypt = require("bcryptjs");

const senha = "123";

const hash = bcrypt.hashSync(senha, 10);

console.log(hash);

console.log("É igual?: ", bcrypt.compareSync("asbcuwsbcuy", hash));
