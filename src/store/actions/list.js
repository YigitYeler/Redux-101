import { ADD_ITEM } from '../types/list'

export const addItem = (text) => {
    return {
        type: ADD_ITEM,
        payload: text
    }
}