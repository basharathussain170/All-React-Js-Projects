import TodoItem from "./TodoItem";
function TodoItems({ todoArray,onDeleteClick }) {
  return (
    <>
      <div className="items-container">
        {todoArray.map((task) => (
          <TodoItem todoDate={task.todoDate} todoName={task.todoName} key={task.todoName} onDeleteClick={onDeleteClick}/>
        ))}
      </div>
    </>
  );
}
export default TodoItems;
