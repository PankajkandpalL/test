import { TODOS_FAILURE, TODOS_GET, TODOS_INPUTVALUE, TODOS_PREGET } from "./actionType"

export const todoReducer = ( state={ data : [], isLoading : false, isError : false, inputValue : ""  }, { type,payload } ) => {
    switch(type){
        case TODOS_PREGET : {
            return {
                ...state,   
                isLoading : payload,
            }
        }
        case TODOS_INPUTVALUE : {
            return {
                ...state,
                inputValue : payload
            }
        }
        case TODOS_GET : {
            return {
                ...state,
                data : [...payload],
                isLoading : false
            }
        }
        case TODOS_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : payload
            }
        }
        default : return state
    }
}

