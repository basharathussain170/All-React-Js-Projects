import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMssg from "./components/WelcomeMssg";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currVall) => [
      ...currVall,
      { todoName: itemName, todoDate: itemDueDate },
    ]);




    //those two code doing same task  but first one is good 
    /*const newTodoItem = [
      ...todoItems,
      { todoName: itemName, todoDate: itemDueDate },
    ];
    setTodoItems(newTodoItem);
    */

    /* setTodoItems((currVal) => {
      const newTodoItem = [
        ...currVal,
        { todoName: itemName, todoDate: itemDueDate },
      ];
      return newTodoItem;
    });
    */
  };

  const handleDeleteItem = (deleteItem) => {
    const newTodoItems = todoItems.filter(
      (item) => item.todoName != deleteItem
    );
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMssg />}
      <TodoItems todoArray={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
