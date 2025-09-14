import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";

function TodoItems() {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  // console.log(todoItemsFromContext.todoName)

  return (
    <>
      <div className="items-container">
        {todoItems.map((task) => (
          <TodoItem
            todoDate={task.todoDate}
            todoName={task.todoName}
            key={task.todoName}
          />
        ))}
      </div>
    </>
  );
}
export default TodoItems;
