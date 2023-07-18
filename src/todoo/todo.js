import React from 'react'
import "./todo.css"

function Todo({item, todoItems, setTodoItems}) {
  const deleteTodo = (id) => {

    const filteredLists = todoItems.filter((item) => item.id !== id );
    setTodoItems(filteredLists)
  };
  const markedTodo =(id) => {
    console.log(id);
    const markedItems = todoItems.map((item) => {
      if (item.id === id) {
        return{
          ...item,
          marked : !item.marked
        };
      } else {
        return item;
      }
    });
    setTodoItems(markedItems);
  };
  const editTodo = (id) => {
    const editItems = todoItems.map((item) => {
      if(item.id === id){
        return{
          ...item,
          edit : !item.edit,
        };
      } else {
        return item;
      }
    });
    setTodoItems(editItems);
  };
  const handleEditValue = (event,id) =>{
    const editedItems = todoItems.map((item) => {
      if(item.id === id){
        return{
          ...item,
          todoItem : event.target.value,
        };
      } else{
        return item;
      }
    });
    setTodoItems(editedItems);
  }
  return (
    <div>
      
      {item.edit ?(
      <div>
        <input value = {item.todoItem} type="text" onChange={(event) => handleEditValue(event,item.id)} />
        <button onClick={() => editTodo(item.id)}>save</button>
        </div>
      ):(
        <div>
          <span 
          className={`${item.marked === true ? "markedItem" : ""}`} 
          onClick={() => markedTodo(item.id)} 
          >
            {item.todoItem}
          </span>
          <button onClick={() => editTodo(item.id)}>Edit</button>
          <button
            onClick={() => {
              deleteTodo(item.id);
            }}
          >
            cancel
          </button>
          </div>
          )}

    </div>
  );
}


export default Todo;
