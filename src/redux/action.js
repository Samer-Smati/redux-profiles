import {ADD_USER,DELETE_USER} from './action-types'


export const addNewUser = (user) =>{
    return{
        type:ADD_USER,
        payload:user
    }
}

export const deleteUser = (userId) =>{
    return{
        type:DELETE_USER,
        payload:userId
    }
}