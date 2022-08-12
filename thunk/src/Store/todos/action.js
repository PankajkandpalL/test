import { TODOS_FAILURE, TODOS_GET, TODOS_INPUTVALUE, TODOS_PREGET } from "./actionType"
import axios from 'axios'

export const getTodoApi = () => async(dispatch) =>{

    dispatch(preTodos())
    try{
        let data = await axios.get('http://localhost:8080/posts')
        dispatch(getTodos(data.data))

    }
    catch(err){
        dispatch(failure())
        console.log(err.message)
    }

}

export const addTodos = (obj)=> async(dispatch) =>{

    axios.post('http://localhost:8080/posts', obj)
    .then((res)=>{
        dispatch(getTodoApi())
    })

}

export const delTodo = (id) => async(dispatch) =>{
    try{

        let data = await axios.delete(`http://localhost:8080/posts/${id}`)
        dispatch(getTodoApi())

    }
    catch(err){
        console.log(err.message);
    }
}

export const updateTodos = (id,newStatus) => async(dispatch)=>{

    try{
        let data = await axios.patch(`http://localhost:8080/posts/${id}`, {
            status : !newStatus
        })

        dispatch(getTodoApi())

    }
    catch(e){
        console.log(e.message);
    }

} 

export const getTodos = (data) =>{
    return {
        type : TODOS_GET,
        payload : data
    }
}

export const setInputValue = (data) =>{
    return { 
        type : TODOS_INPUTVALUE,
        payload : data
    }
}

export const failure = () =>{
    return {
        type : TODOS_FAILURE,
        paylaod : true
    }
}

export const preTodos = () =>{
    return {
        type : TODOS_PREGET,
        payload : true
    }
}