import axios from 'axios';

import { GET_PRODUCTS_START } from '../types/product'
import { GET_PRODUCTS_SUCCESS } from '../types/product'
import { GET_PRODUCTS_ERROR } from '../types/product'

export const getProducts = () => dispatch => {
    dispatch({ type: GET_PRODUCTS_START })
    axios.get('http://localhost:8080/api/products/getall')
        .then(response =>
            dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: GET_PRODUCTS_ERROR, payload: error }))

}