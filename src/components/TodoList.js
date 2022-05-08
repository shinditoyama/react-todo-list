import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
	const todos = useSelector((state) => state.todo.list);
	const filterSelect = useSelector((state) => state.todo.filterStatus);

	const sortedTodoList = [...todos];
	sortedTodoList.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

	const filteredTodoList = sortedTodoList.filter((item) => {
		if (filterSelect === 'all') {
			return true;
		} else if (filterSelect === 'complete') {
			return item.completed;
		} else if (filterSelect === 'incomplete') {
			return !item.completed;
		}
	});

	return (
		<Box sx={{
			border: 1,
			borderRadius: 1,
            borderColor: 'grey.500',
			backgroundColor: 'background.paper',
			height: 428,
			overflow: 'auto',
		}}
		>
			{filteredTodoList.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</Box>
	);
};

export default TodoList;