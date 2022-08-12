import { Box, Spacer } from '@chakra-ui/react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { TodoInput } from '../Component/todoInput'
import { Todo } from '../Component/todos'

function AllRoutes(){
    return (
       <Box>
        <Box gap="30px" >
            <NavLink to="/">Home</NavLink>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to="/todoAdd">Add Todos</NavLink>
        </Box>
            <Routes>
                <Route path="/" element = {<Todo />}></Route>
                <Route path="/todoAdd" element = {<TodoInput />}></Route>   
            </Routes> 
       </Box>
    )
}

export { AllRoutes }