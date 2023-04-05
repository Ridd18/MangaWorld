import mysql from "mysql2";

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Ridd18',
    database:'manga'
});

export default db;