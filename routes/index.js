var express = require('express');
var router = express.Router();
var priority_todo=require('./priority_todo.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  var list=priority_todo.getTodoList();
  res.render('index', { title: 'Todo List',list : list});
});

router.post('/manipulate',function(req,res,next) {
    var body=req.body;
    console.log(body);

    var input=body.description;
    var tokens = input.split(",");
    console.log()    
    var list=priority_todo.getTodoList();

    if(tokens.length == 1)
    {
        //remove
        priority_todo.removeItemFromList(list,parseInt(tokens[0]));

    }
    else if(tokens.length == 2)
    {
       var id=priority_todo.getNextId(); 
       priority_todo.addItemToList(list,{
            "id":id,
            "description":tokens[0],
            "priority":parseInt(tokens[1])
       }); 
    }
    res.redirect("/");
});


module.exports = router;
