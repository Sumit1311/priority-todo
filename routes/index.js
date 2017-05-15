var express = require('express');
var router = express.Router();
var priority_todo=require('./priority_todo.js');
var id=0;
/* GET home page. */
router.get('/index', function(req, res, next) {
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
       priority_todo.addItemToList(list,{
            "id":id+1,
            "description":tokens[0],
            "priority":parseInt(tokens[1])
       }); 
    }
    id++;
    res.redirect("/index");
});


module.exports = router;
