import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { MdOutlineAddComment } from "react-icons/md";
function AddTodo({ onNewItem }) {
  const todoNameElement = useRef(0);
  const todoDateElement = useRef(0);

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    const todoName=todoNameElement.current.value
    const todoDate=todoDateElement.current.value
    onNewItem(todoName, todoDate);
    todoNameElement.current.value=""
    todoDateElement.current.value=""
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonClicked}>
        <div className="row kg-row">
          <div className="col-6">
            <input

              ref={todoNameElement}

              type="text"
              placeholder="Enter todo Here"
            />
          </div>
          <div className="col-4">
            <input 
            
            ref={todoDateElement}
            
            type="date" />
          </div>
          <div className="col-2">
            <button className="btn btn-success kg-button">
              <MdOutlineAddComment />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
