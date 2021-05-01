import { ADD_ITEM } from '../types/list'
import { REMOVE_ITEM } from '../types/list'

export const addItem = (text) => {
    return {
        type: ADD_ITEM,
        payload: text
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}