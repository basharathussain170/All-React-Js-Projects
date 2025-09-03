import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMssg from "./components/WelcomeMssg";
import { TodoItemsContext } from "./store/todo-items-store";
import { useState } from "react";

function App() {
  const [todoItem, setTodoItem] = useState([]);

  const addNewItem = (itemName, itemDate) => {
    setTodoItem((currValue) => {
      let newTodoItems = [
        ...currValue,
        { todoName: `${itemName}`, todoDate: `${itemDate}` },
      ];
      return newTodoItems;
    });
  };

  const deleteItem = (deletedItem) => {
    let deletedTodo = todoItem.filter((todo) => todo.todoName != deletedItem);
    setTodoItem(deletedTodo);
  };

  return (
    <TodoItemsContext.Provider
      value={{ item: todoItem, addNewItem: addNewItem, deleteItem: deleteItem }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo/>
        <WelcomeMssg />
        <TodoItems/>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
