import { ADD_ITEM } from '../types/list'

const defaultState = [
    "Yiğit",
    "Burak",
    "Ozan"
];

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload]
        default:
            return state;
    }
}

export default reducer;