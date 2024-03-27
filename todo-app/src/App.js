import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import { Chip, List, ListItem, ListItemText } from "@mui/material";
import Todo from "./components/Todo";
import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";

function App() {
  const [open, setOpen] = useState(true);
  const todos = useSelector((state) => state.todos);

  const handleChange = () => {
    setOpen((preOpen) => !preOpen);
  };

  return (
    <div className="App">
      <h2>ToDo-App</h2>
      <button onClick={handleChange}>Add ToDo</button>
      <TodoForm open={open} handleChange={handleChange} />
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <Todo key={todo.title} todo={todo} />
        ))}
      </List>
    </div>
  );
}

export default App;
