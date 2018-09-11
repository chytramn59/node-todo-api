const{MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
    return console.log("unable to connect to db");
    }
    console.log('connected succesfully');

    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5b8fa70cceff74ab39d6e31c')
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //    returnOriginal:false 
    // }).then((result)=>{ 
    //     console.log(result);
    // })
    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5b8f8020aa036b23e501ba74')
    },{
        $set:{
            name:'chytra'
        },
        $inc:{
            age:1
        }
    },{
       returnOriginal:false 
    }).then((result)=>{
        console.log(result);
    })
    // db.close();
});