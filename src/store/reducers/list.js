import { ADD_ITEM } from '../types/list'
import { REMOVE_ITEM } from '../types/list'

const defaultState = [
    {
        id: 0,
        name: "Yiğit"
    },
    {
        id: 1,
        name: "Burak"
    },
    {
        id: 2,
        name: "Ozan"
    }
];

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload]
        case REMOVE_ITEM:
            return state.filter((item) => item.id !== action.payload);
        default:
            return state;
    }
}

export default reducer;