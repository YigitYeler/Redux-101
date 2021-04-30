import { INCEREMENT, DECREMENT } from '../types/counter'

const defaultState = 0;

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCEREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default reducer;