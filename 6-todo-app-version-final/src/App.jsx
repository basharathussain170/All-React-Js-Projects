import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMssg from "./components/WelcomeMssg";
import { useState } from "react";

function App() {
  const [todoItem, setTodoItem] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    // console.log(`New Item added ${itemName} Date :${itemDate}`);

    let newTodoItems = [
      ...todoItem,
      { todoName: `${itemName}`, todoDate: `${itemDate}` },
    ];
    setTodoItem(newTodoItems);
  };

  const handleDeleteItem = (deletedItem) => {
    let deletedTodo = todoItem.filter((todo) => todo.todoName != deletedItem);
    setTodoItem(deletedTodo);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <WelcomeMssg todoLength={todoItem} />
      <TodoItems todoArray={todoItem} deleteItem={handleDeleteItem} />
    </center>
  );
}

export default App;
