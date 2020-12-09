//This script manages the data base
const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "admon",
    password: "aksjaksj",
    insecureAuth : true
});
//console.log(con);

con.connect(function(err){
    if(err){
        console.log(err.message);
        throw err;
    }else{
        console.log('Mysql Connected!');
    }
});

module.exports = con;