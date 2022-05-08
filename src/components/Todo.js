import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/slices/todoSlice";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton, Divider } from "@mui/material";
import { red, green } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FormDialog from "./FormDialog";
import moment from "moment";

const Todo = ({ todo }) => {
    const dispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState(false);

    const dialogHandler = () => {
        setOpenDialog(!openDialog);
    };

    const removeTask = () => {
        dispatch(deleteTodo({ id: todo.id }));
    }

    const toggleTask = () => {
        dispatch(toggleTodo({ id: todo.id, completed: !todo.completed }));
    }

    return (
        <>
            <FormDialog open={openDialog} dialogHandler={dialogHandler} todo={todo} />
            <ListItem
                key={todo.id}
                secondaryAction={
                    <>
                        <IconButton edge="start" aria-label="edit" onClick={() => setOpenDialog(true)}>
                            <EditIcon sx={{ color: green[500] }} />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" onClick={() => removeTask()}>
                            <DeleteIcon sx={{ color: red[500] }} />
                        </IconButton>
                    </>
                }
                disablePadding
            >
                <ListItemButton role={undefined} onClick={() => toggleTask()} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={todo.completed}
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={todo.name} secondary={moment(todo.timestamp).format("DD/MM/yyyy HH:mm:ss")} style={{ textDecoration: todo.completed && "line-through" }} />
                </ListItemButton>
            </ListItem>
            <Divider />
        </>
    );
};

export default Todo;
