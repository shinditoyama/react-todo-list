import { useSelector } from "react-redux";
import { Box } from '@mui/material';
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
			width: '70%',
			height: 408,
			bgcolor: 'background.paper',
			overflow: 'auto',
			borderRadius: 1,
		}}
		>
			{filteredTodoList.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</Box>
	);
};

export default TodoList;