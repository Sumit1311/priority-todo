function make_heap(list,compare)
{
    for(var i = parseInt((list.length / 2)  - 1); i >= 0; i--)
    {
        heapify(list,i,compare);
    }
}


function heapify(list,i,compare)
{
    while(i < list.length)
    {
        var first_child = list[(2*i+1)];
        var second_child = list[(2*i+2)];
        var root= list[i];
        console.log(root,first_child,second_child);
        if((first_child && compare(first_child, root)) || (second_child && compare(second_child,root)))
        {
            if(second_child)
            {
                if(compare(second_child,first_child))
                {
                    swap(list, i, (2*i + 2));
                    i = (2*i + 2);
                }
                else
                {
                    swap(list,i, (2*i + 1));
                    i = (2*i + 1);
                }
            }    
            else if(first_child)
            {
                swap(list,i, (2*i + 1));
                i = (2*i + 1);
            }
            else
            {
                break;
            }

        }
        else
        {
            break;
        }
    }
}

function insert_heap(list, element, compare)
{
    list[list.length] = element;

    var i = list.length - 1;
    while(i>=0)
    {
        var root = parseInt((i - 1) / 2);
        if(compare(list[i] ,list[root]))
        {
            swap(list, root, i);
            i = root;
        }
        else
        {
            break;
        }
    }
}

function delete_heap(list,compare)
{
    swap(list, 0, list.length - 1);
    list.splice(list.length - 1,1);
    heapify(list,0,compare);
}

function swap(list,index_a,index_b)
{    
    var temp = list[index_a];
    list[index_a] = list[index_b];
    list[index_b] = temp;
}

module.exports = {
    make : make_heap,
    insert : insert_heap,
    remove : delete_heap
}
//function compare_int(a,b)
//{
//    return (a < b);
//}
//var list=[80,123,78,25,234,10,98,58,99,34,56,78,90,45,56];
//console.log(list);
//make_heap(list,compare_int);
//console.log(list);
//insert_heap(list,23,compare_int);
//console.log(list);
//delete_heap(list,compare_int);
//console.log(list);
//
//while(list.length != 0)
//{
//    console.log(list[0]);
//    delete_heap(list,compare_int);
//}
