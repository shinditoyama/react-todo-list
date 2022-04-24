import { Box } from '@mui/material';
import Title from "../components/Title";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#cfe8fc',
            height: '100vh'
        }}>
            <Title title="Todo List" />
            <TodoForm />
            <TodoList />
        </Box>
    );
}

export default Home;