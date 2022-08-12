import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTodoApi } from "../Store/todos/action"
import { TodoList } from "./TodoList"

function Todo(){
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getTodoApi())
    },[])
    
    return (
        <Box>
            <TodoList />
        </Box>
    )
}

export { Todo }