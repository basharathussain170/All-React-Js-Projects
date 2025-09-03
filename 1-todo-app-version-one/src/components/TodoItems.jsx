import TodoItem from "./TodoItem";
function TodoItems({ todoArray }) {
  return (
    <>
      <div className="items-container">
        {todoArray.map((task) => (
          <TodoItem todoDate={task.todoDate} todoName={task.todoName} />
        ))}
      </div>
    </>
  );
}
export default TodoItems;
