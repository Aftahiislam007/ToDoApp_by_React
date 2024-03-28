import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Chip, List } from "@mui/material";
import Todo from "./components/Todo";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import { DELETE_TODO } from "./store/actionType,";

function App() {
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setUpdateData(null);
  };
  const handleDelete = (id) => {
    // console.log(id);
    dispatch({ type: DELETE_TODO, payload: id });
  };
  const handleUpdate = (todo) => {
    setUpdateData(todo);
    handleOpen();
    // dispatch({type:DELETE_TODO, payload:id})
  };
  return (
    <div className="App">
      <h2>ToDo App</h2>
      <Chip
        onClick={handleOpen}
        label="ADD TODO"
        size="big"
        variant="outlined"
        style={{ marginLeft: 20, width: 150, fontWeight: 'bold' }}
        color="primary"
      />
      <TodoForm open={open} handleClose={handleClose} todo={updateData} />
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </List>
    </div>
  );
}

export default App;
