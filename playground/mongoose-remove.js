const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = ('./../server/models/user');

// Todo.remove({}).then((result) =>{
//     console.log(result);
// });

Todo.findByIdAndRemove('5ba893cbdc33e231d86ea175').then((todo)=>{
    console.log(todo);
});
