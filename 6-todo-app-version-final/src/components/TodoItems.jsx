import TodoItem from "./TodoItem";
function TodoItems({ todoArray, deleteItem }) {
  return (
    <>
      <div className="items-container">
        {todoArray.map((task) => (
          <TodoItem
            todoDate={task.todoDate}
            todoName={task.todoName}
            key={task.todoName}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </>
  );
}
export default TodoItems;
