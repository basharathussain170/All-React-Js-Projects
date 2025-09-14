import { useState } from "react";
import styles from "./AddTodo.module.css";
import { MdOutlineAddComment } from "react-icons/md";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleDateChange = (e) => {
    setTodoDate(e.target.value);
  };

  const handleAddButtonClicked = (e) => {
    e.preventDefault()//for prevent to submit data to server
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">  
fdfdffdfdsf
    {/* Inside Form we can directly submit data from the the form instead of writing type="submit" inside button  */}

      <form onSubmit={handleAddButtonClicked}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter todo Here"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={todoDate} onChange={handleDateChange} />
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
