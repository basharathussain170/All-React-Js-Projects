import { useContext } from "react";
import styles from "./WelcomeMssg.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMssg = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  return (
    todoItems.length === 0 && (
      <h1 className={styles.welcomeMssg}>Congrats! you complted your task</h1>
    )
  );
};
export default WelcomeMssg;
