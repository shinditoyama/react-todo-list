import { Box, Container } from "@mui/material";
import Title from "../components/Title";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#a3ffe7',
            height: '100vh',
        }}>
            <Container maxWidth="md">
                <Title title="Todo List" />
                <TodoForm />
                <TodoList />
            </Container>
        </Box>
    );
}

export default Home;