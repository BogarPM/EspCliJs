//This script manages the data base
const db_name = 'EspClidb';

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
con.query('use ' + db_name,function(e,r,f){
    if(e){throw e;}
});

//create function inside the con object.
con.registerDevice = function(devName, address, config){
    let query = "insert into devices(nombre, address) values('" + devName + "','" + address + "')";
    this.query(query, function(err, results, fields){
        if(err){throw err;}
        console.log(results);
    });
    this.query('select * from devices', function(err, results, fields){
        if(err){throw err;}
        console.log(results);
    });
};

con.registerDev = function(data){
    let devName = data.name;
    con.query("insert into devices(nombre) values('" + devName + "')", function(e,r,f){
        if(e){throw e;}
        console.log(r);
    });
    let config = devName.pinConfig;
    
}

con.registerPin = function(devId, pin, type, name){
    this.query("insert into pins values(" + pin + "," + devid + "," + type + ",'" + name + "')", function(e,r,f){
        if(e){throw e;}
        console.log(r);
    });
}
//Value for analogs: 0 - 1023, for booleans: 0 - 1.
con.statusChange = function(devid, pin, value){
    this.query("insert into stat values(" + pin + "," + devid + "," + value + ",null)",function(e,r,f){
        if(e) { throw e;}
        console.log(r);
    });
};

function registerConfig(devName, config){

}

con.getPinConfig = function(id){
    con.query('select * from pins where devId = ' + id,function(e,r,f){
        if(e){console.log(e);}
        let obj = {};
        Object.keys(r).forEach(function(i){
            let pin = r[i].pin;
            let type = r[i].typ;
            let devId = r[i].devId;
            let name = r[i].name;
            
        });
    });
}



module.exports = con;