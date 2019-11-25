import {
    COUNT_ADD,
    COUNT_SUB
} from '../actionTypes'

export function addCount(payload){
   return {
        type:'ADD',
        payload:payload
    }
    
}

export function subCount(payload){
    return {
        type:'SUB',
        payload:payload
    }
}