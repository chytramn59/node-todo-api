// const MongoClient = require('mongodb').MongoClient;


const{MongoClient,ObjectID}=require('mongodb');
    // var obj = new ObjectID();
    // console.log(obj);


/*const user = {name:'chytra',age:234};
var{name}=user;
console.log(name);object destructring */

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
    return console.log("unable to connect to db");
    }
    console.log('connected succesfully');

    db.collection('Todos').insertOne({
        text:'something to do',
        completed:false
    },(err,result)=>{
        if(err){
           return console.log('unable to insert');
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    db.collection('Users').insertOne({
        name:'chytra',
        age:25,
        location:'mandya'
    },(err,result)=>{
        if(err){
           return console.log('unable to insert');
        }
        console.log(result.ops);
    });
    
    
    db.close();
});


