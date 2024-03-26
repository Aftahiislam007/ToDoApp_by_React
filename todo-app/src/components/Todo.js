import React from "react";
import { Chip, List, ListItem, ListItemText } from "@mui/material";

const Todo = ({ todo }) => {
  // const {todo} = props;
  // console.log(props);

  const chipStyle = {
    width: 100,
  };
  return (
    <ListItem style={{ background: "rgb(204 204 229)", marginBottom: 4 }}>
      <ListItemText
        primary={todo.title}
        secondary={
          <>
            {todo.due_date}
            <Chip
              label={todo.status}
              size="small"
              variant="outlined"
              style={{ marginLeft: 20, width: 80 }}
              color={todo.status === "pending" ? "error" : "success"}
            />
          </>
        }
      />
      <Chip label="Edit" color="primary" style={ chipStyle } />
      <Chip
        label="Delete"
        color="warning"
        style={ chipStyle }
      />
    </ListItem>
  );
};

export default Todo;
