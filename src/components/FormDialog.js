import { useState } from 'react';
import { useDispatch } from "react-redux";
import { updateTodo } from "../store/slices/todoSlice";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ open, dialogHandler, todo }) {
    const dispatch = useDispatch();
    const [newTitle, setNewTitle] = useState(todo.name);

    const editTask = () => {
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