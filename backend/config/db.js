import mysql from 'mysql';

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "belajar-fullstack-mern"
});

export default db;