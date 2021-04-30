import { INCEREMENT, DECREMENT } from '../types/counter'

export const incerement = () => {
    return {
        type: INCEREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}