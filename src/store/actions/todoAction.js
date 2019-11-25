import {
    TODO_ADD,
    TODO_SUB
} from '../actionTypes'

export function addTodo(payload) {
    return {
        type:'ADD_TODO',
        payload:payload
    }
}