import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    user:"root", 
    password:"#@ve54kili",
    database:"blog"
})