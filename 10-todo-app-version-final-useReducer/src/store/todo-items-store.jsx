import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});


const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type == "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        todoName: action.payload.itemName,
        todoDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.todoName !== action.payload.deleteItem
    );
  }
  return newTodoItems;
};



const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);

    // setTodoItems((currVall) => [
    //   ...currVall,
    //   { todoName: itemName, todoDate: itemDueDate },
    // ]);
  };

  const deleteItem = (deleteItem) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        deleteItem,
      },
    };
    dispatchTodoItems(deleteItemAction);

    // const newTodoItems = todoItems.filter(
    //   (item) => item.todoName != deleteItem
    // );
    // setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
