import { Box, Button, Input } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { delTodo, updateTodos } from "../Store/todos/action"

function TodoList(){

    const state = useSelector((state)=>state.todo)
    const dispatch = useDispatch()

    let handleUpdate = (id,newStatus) =>{
        dispatch(updateTodos(id,newStatus))
    }

    let handleDel = (id) =>{
        dispatch(delTodo(id))
    }

    return (
        <Box>
            {
                state.data?.map((el)=>(
                    <Box>
                        <Input w="30%" value={el.title}  readOnly />
                        <Button onClick={()=>handleUpdate(el.id,el.status)} >{ el.status ? "Completed" : "Not Completed" }</Button>
                        <Button onClick={()=>handleDel(el.id)} >Delete</Button>
                    </Box>
                ))
            }
        </Box>
    )
}

export { TodoList }