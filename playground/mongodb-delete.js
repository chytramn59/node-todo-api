const{MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
    return console.log("unable to connect to db");
    }
    console.log('connected succesfully');

    // db.collection('Todos').deleteMany({completed:false}).then((result)=>{
    //     console.log(result);
    // }); /* deleting many items  */

    // db.collection('Todos').deleteOne({completed:true}).then((result)=>{
    //     console.log(result);
    // }); /* deleting single item */
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name:'chytra'}).then((result)=>{
    //     console.log(result);
    // });
    db.collection('Users').findOneAndDelete({_id:new ObjectID('5b8f8155fd0aa724cf053f98')}).then((results)=>{
        console.log(JSON.stringify(results,undefined,2));
    })

    // db.close();
});