import React from "react";
import { Chip, ListItem, ListItemText } from "@mui/material";

const Todo = ({ todo, handleDelete, handleUpdate }) => {
  // const {todo} = props;
  // console.log(props);
  const chipStyle = {
    width: 100,
    cursor: "pointer",
  };

  return (
    <ListItem style={{ background: "rgb(204 204 229)", marginBottom: 4 }}>
      <ListItemText
        primary={todo.title}
        secondary={
          <>
            {todo.due_date}
            <Chip
              component={"span"}
              label={todo.status}
              size="small"
              variant="outlined"
              style={{ marginLeft: 20, width: 100 }}
              color={todo.status === "Pending" ? "error" : "success"}
            />
          </>
        }
      />
      <Chip
        title="Edit ToDo"
        label="UPDATE"
        color="primary"
        style={chipStyle}
        onClick={() => handleUpdate(todo)}
      />
      <Chip
        title="Delete ToDo"
        label="DELETE"
        color="warning"
        style={chipStyle}
        onClick={() => handleDelete(todo.id)}
      />
    </ListItem>
  );
};

export default Todo;
