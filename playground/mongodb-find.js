const{MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
    return console.log("unable to connect to db");
    }
    console.log('connected succesfully');
    // db.collection('Todos').find().toArray().then((docs)=>{
    //     console.log('finded');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to find',err);
    // });  /* quering everthing in db todos  */


    // db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
    //     console.log('finded');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('unable to find',err);
    // }); /* quering for particular item  in todos item */
     

    // db.collection('Todos').find({_id:new ObjectID('5b8e71187579721c03c37d17')}).toArray().then((docs)=>{
    //         console.log('finded');
    //         console.log(JSON.stringify(docs,undefined,2));
    //     },(err)=>{
    //         console.log('unable to find',err);
    //     }); /* quering through ObjectId */

    db.collection('Todos').find().count().then((count)=>{
                console.log('finded');
                console.log(JSON.stringify(count,undefined,2));
            },(err)=>{
                console.log('unable to find',err);
            }); /* to count number of items in Todos */

            db.collection('Users').find({name:'ss'}).toArray().then((docs)=>{
                    console.log('finded');
                    console.log(JSON.stringify(docs,undefined,2));
                },(err)=>{
                    console.log('unable to find',err);
                });

    // db.close();
});

