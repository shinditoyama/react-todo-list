import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo, deleteAll, selectFilter } from "../store/slices/todoSlice";
import { Box, Grid } from "@mui/material";
import moment from "moment";

const TodoForm = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
    const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
 
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo({ id: nanoid(), name: value, completed: false, timestamp: moment().format() }));
        setValue("");
    };

    const removeAll = () => {
        dispatch(deleteAll());
    }

    const updateFilter = (e) => {
        setFilterStatus(e.target.value);
        dispatch(selectFilter(e.target.value));
    };

    return (
        <Box sx={{
            width: '70%',
            padding: 2,
            bgcolor: 'background.paper',
            borderRadius: 1,
            marginBottom: 1,
        }}>
            <Grid container spacing={1}>
                <Grid item xs={10}>
                    <form onSubmit={onSubmit}>
                        <div className="input-group me-3">
                            <input type="text" className="form-control" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Add Todos..." required />
                            <button type="submit" className="btn btn-outline-primary">ADD</button>
                            <a onClick={() => removeAll()} className="btn btn-outline-danger">DELETE ALL</a>
                        </div>
                    </form>
                </Grid>

                <Grid item xs={2}>
                    <select className="form-select" value={filterStatus} onChange={(e) => updateFilter(e)}>
                        <option value="all">All</option>
                        <option value="complete">Completed</option>
                        <option value="incomplete">Incomplete</option>
                    </select>
                </Grid>

            </Grid>
        </Box>
    );
};

export default TodoForm;