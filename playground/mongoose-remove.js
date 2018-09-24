const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = ('./../server/models/user');

// Todo.remove({}).then((result) =>{
//     console.log(result);
// });

Todo.findByIdAndRemove('5ba86787b3a7b0543a930a1d').then((todo)=>{
    console.log(todo);
});
