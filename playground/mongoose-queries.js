const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = ('./../server/models/user');

var id = '5b976a9def497e2a43eca954'

Todo.find({
    _id:id
}).then((todos)=>{
    console.log('Todos',todos);
});

Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('id not found')
    }
    console.log('todo by id',todo);
}).catch((e)=>console.log(e));


// User.find({
//     _id : id
// }).then((users)=>{
//     console.log('User',users);
// });

// // User.findById(id).then((user)=>{
// //     if(!user){
// //         console.log('user not found');
// //     }
// //     console.log(JSON.stringify(user,undefined,2));
// // },(e)=>{
// //     console.log(e);
// // })