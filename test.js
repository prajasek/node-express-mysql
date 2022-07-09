let mysql = require('mysql');
require('dotenv').config()

let connection = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect(function(err) {
    if(err) throw new Error(err);
    else console.log("Connected to mysql.")
});

let c = connection; 


// c.query(`
//         CREATE TABLE test3 (
//         ID INT PRIMARY KEY,
//         NAME VARCHAR(20), 
//         AGE INT, 
//         WEIGHT FLOAT);`, (err, results, fields) => {
//         if (err) throw new Error("--------------TABLE ALREADY CREATED -----------");
//         console.log(fields);
// })

// c.query(`INSERT INTO test3 (ID, NAME, WEIGHT)
//          SELECT ID, NAME, AGE FROM test1
//         ;`, (err, results, fields)=> {
//                 if (err) console.log("Error Inserting Data.", err);
//                 else console.log(results, fields);
// })
    
