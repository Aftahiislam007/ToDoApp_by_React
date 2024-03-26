import logo from "./logo.svg";
import "./App.css";
import { Chip, List, ListItem, ListItemText } from "@mui/material";
import Todo from "./components/Todo";

function App() {
  const todos = [
    { title: "Let's Play", due_date: "24/03/2024", status: "pending" },
    { title: "Got to Market", due_date: "24/02/2024", status: "completed" },
  ];
  return (
    <div className="App">
      <h2>React-App</h2>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <Todo key={todo.title} todo={todo} />
        ))}
      </List>
    </div>
  );
}

export default App;
