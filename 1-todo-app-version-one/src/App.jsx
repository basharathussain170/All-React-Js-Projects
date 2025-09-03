import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  let todoArray = [
    {
      todoName: "Singing",
      todoDate: "1/1/2001",
    },
    {
      todoName: "Playing",
      todoDate: "2/2/2002",
    },
    {
      todoName: "Eating",
      todoDate: "3/3/2003",
    },
    {
      todoName: "Drinking",
      todoDate: "4/4/2004",
    },
    {
      todoName: "Practicing",
      todoDate: "5/5/2005",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoArray={todoArray}/>
    </center>
  );
}

export default App;
