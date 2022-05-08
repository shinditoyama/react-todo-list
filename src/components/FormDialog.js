import { useState } from 'react';
import { useDispatch } from "react-redux";
import { updateTodo } from "../store/slices/todoSlice";
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function FormDialog({ open, dialogHandler, todo }) {
    const dispatch = useDispatch();
    const [newTitle, setNewTitle] = useState(todo.name);

    const editTask = (event) => {
        event.preventDefault();
        dispatch(updateTodo({ id: todo.id, name: newTitle }));
        dialogHandler();
    }

    return (
        <Dialog
            open={open}
            onClose={dialogHandler}
            keepMounted
            fullWidth
            component="form"
        >
            <DialogTitle>Edit Todo</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    type="text"
                    defaultValue={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button type="button" onClick={dialogHandler}>Cancel</Button>
                <Button type="submit" onClick={editTask}>OK</Button>
            </DialogActions>
        </Dialog>
    );
}