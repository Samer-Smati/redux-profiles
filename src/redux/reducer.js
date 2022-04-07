import {ADD_USER,DELETE_USER} from './action-types'
import {data as listUsers } from '../data'

const init = {
    users:listUsers
}

export const userReducer = (state = init, action) =>{
    switch (action.type) { 
        case ADD_USER: return{
            ...state,
            users: [...state.users,action.payload]
        }
        case DELETE_USER: return{
            ...state,
            users: state.users.filter(user => user.id != action.payload)
        }
        default:return state
    }
}