import { GET_PRODUCTS_START } from '../types/product'
import { GET_PRODUCTS_SUCCESS } from '../types/product'
import { GET_PRODUCTS_ERROR } from '../types/product'


const INITIAL_STATE = {
    isLoading: true,
    products: [],
    message: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS_START:
            return { ...state, isLoading: true, message: '' }
        case GET_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload, isLoading: false }
        case GET_PRODUCTS_ERROR:
            return { ...state, message: action.payload, isLoading: false }
        default:
            return state;
    }
}

export default reducer;