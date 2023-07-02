//import lib
const mysql=require('mysql');

//create conn
const mysqlconnection=mysql.createConnection({
    'host':'127.0.0.1',
    'user':'root',
    'password':'root123',
    'port':3306,
    'database':'test'
});

//connect
mysqlconnection.connect((err)=>{
    if(err)
    console.log('connection unsuccessful'+JSON.stringify(err));
    else
    console.log('connection successful')
})

//exports
module.exports=mysqlconnection;