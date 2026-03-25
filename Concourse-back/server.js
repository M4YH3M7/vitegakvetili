import express from "express";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Tengo1982!",
  database: "my_database",
  port: 3306,
});

const app = express();

app.use(express.json());

app.post("/addStudent", async (req, res) => {
  try {
    const { email, password } = req.body;

    const sql = "insert into students (email, password) values (?, ?)";
    const result = await pool.query(sql, [email, password]);
    console.log(email + " " + password);
  } catch (error) {
    console.log("error here => ", error);
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});