const pgp = require("pg-promise")({});
const dotevn = require("dotenv");
dotevn.config();

const db = pgp(process.env.DATABASE_URL);

module.exports = db; 

