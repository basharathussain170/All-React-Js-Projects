import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMssg from "./components/WelcomeMssg";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currVall) => [
      ...currVall,
      { todoName: itemName, todoDate: itemDueDate },
    ]);
  };

  const deleteItem = (deleteItem) => {
    const newTodoItems = todoItems.filter(
      (item) => item.todoName != deleteItem
    );
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMssg />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
