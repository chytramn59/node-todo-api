var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');


var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });

});

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
    res.send({todos});
    },(e)=>{
        res.status(400).send(e);
    })
})
app.post('/user',(req,res)=>{
    var users = new User({
        email:req.body.email
    });
    users.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});


app.listen(3000,()=>{
    console.log('server is up ');
})




module.exports = {app};















// var Todo = mongoose.model('Todo',{
//     text:{
//         type:String
//     },
//     completed:{
//         type:Boolean
//     },
//     completedAt:{
//         type:Number
//     }
// });

// var newTodo = new Todo({
//     text:'welcome node'
// });

// newTodo.save().then((doc)=>{
//     console.log('save todo',doc);
// },(e)=>{
//     console.log('unable to save');
// });



// var newUser = new Todo({
//     text:'checking status',
//     completed:true,
//     completedAt:345

// })

// newUser.save().then((doc)=>{
//     console.log('save todo',doc);
// },(e)=>{
//     console.log('unable to save',e);
// });


// var User = mongoose.model('User',{
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         minlength:1
//     }
// });

// var user = new User({
//     email:' chytr@hui.com '
// });

// user.save().then((doc)=>{
//     console.log('saved',doc)
// },(e)=>{
//     console.log('unable to save',e)
// })