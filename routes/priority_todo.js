var priority_queue = require("./priority_queue.js");
var persistence = require("./persistence.js");

/**
 * Object Format : {
     "id" : <number>
     "description" : <string>
     "priority" : <number>
   }
 *
 */

function compare_priority(a,b)
{
    return a.priority > b.priority;
}

function getTodo()
{
    var list=persistence.readAllRecords();
    var sorted_list=[];
    while(list.length != 0)
    {
        sorted_list.push(list[0]);
        console.log("Sorted",list);
        priority_queue.remove(list,compare_priority);
    }
    return sorted_list;
}

function addItem(list, item)
{
    priority_queue.insert(list,item,compare_priority);
    persistence.writeAllRecords(list);
    return list;
}

function removeItem(list,id)
{
    var index = list.findIndex(function(element){
        return element.id == id;
    });
    list.splice(index,1);
    priority_queue.make(list,compare_priority);
    persistence.writeAllRecords(list);
    return list;
}

function getId()
{
    var id=persistence.getId();
    id++;
    persistence.writeId(id);
    return id;
}

module.exports = {
    getTodoList : getTodo,
    addItemToList : addItem,
    removeItemFromList : removeItem,
    getNextId : getId
}
