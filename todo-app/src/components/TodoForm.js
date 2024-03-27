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

const STATUS = ["Pending", "Completed"];
const TodoForm = ({ open, handleChange }) => {
  const [formData, setFormData]= useState(initialState)
    return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleChange}
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
        <DialogTitle>Add New ToDo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new ToDo list, please fill up the below form.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="date"
            label="Due Date"
            fullWidth
            variant="standard"
            InputLabelProps={{ shrink: true }}
            required
          />
          <FormControl variant="standard" fullWidth required>
            <InputLabel id="demo-simple-select-standard-label">
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              // value={age}
              // onChange={handleChange}
              label="Status"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {STATUS.map((st) => (
                <MenuItem value={st}>{st}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleChange}>Cancel</Button>
          <Button onClick={handleChange}>Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default TodoForm;
