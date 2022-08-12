import { Box, Button, Input } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { addTodos, setInputValue } from "../Store/todos/action"

function TodoInput( ) {

    const state = useSelector((state)=>state.todo)
    const dispatch = useDispatch()

    let handleChange = (e) =>{
        dispatch(setInputValue(e.target.value))
    }

    let handleClick = () =>{
        let obj = {
            title : state.inputValue,
            status : false,
            id : state.data[state.data.length-1] + 1
        } 

        dispatch(addTodos(obj))

    }

    return (
        <Box>
            <Input w="30%" onChange={(e)=>handleChange(e)} type="text" />
            <Button onClick={handleClick} >Add</Button>
        </Box>
    )
}

export { TodoInput }    