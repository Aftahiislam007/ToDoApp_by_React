import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO, UPDATE_TODO } from "../store/actionType,";
import { useEffect } from "react";

const initialState = { title: "", due_date: "", status: "" };
const STATUS = ["Pending", "Completed"];

const TodoForm = ({ open, handleClose, todo }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const { title, due_date, status } = formData;
  useEffect(() => {
    if (todo) {
      setFormData(todo);
    }
    else{
      setFormData(initialState);
    }
  }, [todo]);
  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setFormData({ ...formData, [key]: value });
  };
  const resetFormData = () => {
    setFormData(initialState);
  };
  const handleSubmit = () => {
    dispatch({ type: ADD_TODO, payload: { id: Math.random(), ...formData } });
    resetFormData();
    handleClose();
  };
  const handleUpdate = () => {
    dispatch({ type: UPDATE_TODO, payload: formData });
    resetFormData();
    handleClose();
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        // PaperProps={{
        //   component: 'form',
        //   onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
        //     event.preventDefault();
        //     const formData = new FormData(event.currentTarget);
        //     const formJson = Object.fromEntries((formData as any).entries());
        //     const email = formJson.email;
        //     console.log(email);
        //     handleClose();
        //   },
        // }}
      >
        <DialogTitle>{todo ? "Update ToDo" : "Add New ToDo"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {todo ? "To update a ToDo list, please fill up all the field below form." : "To create a new ToDo list, please fill up the below form."}
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              value={title}
              fullWidth
              variant="standard"
              required
              onChange={(e) => handleInputChange(e, "title")}
            />
            <TextField
              autoFocus
              margin="dense"
              id="due_date"
              value={due_date}
              type="date"
              label="Due Date"
              fullWidth
              variant="standard"
              InputLabelProps={{ shrink: true }}
              required
              onChange={(e) => handleInputChange(e, "due_date")}
            />
            <FormControl variant="standard" fullWidth required>
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                id="status"
                value={status}
                onChange={(e) => handleInputChange(e, "status")}
                label="Status"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {STATUS.map((st) => (
                  <MenuItem key={st} value={st}>{st}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {todo ? (
            <Button onClick={handleUpdate}>Update</Button>
          ) : (
            <Button onClick={handleSubmit}>Create</Button>
          )}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default TodoForm;
