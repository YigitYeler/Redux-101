import { createStore, combineReducers, applyMiddleware } from 'redux';
//import CounterReducer from './reducers/counter.js'
//import ItemReducer from './reducers/list'
import ProductReducer from './reducers/product'
import thunk from 'redux-thunk';

const reducers = combineReducers({
    ProductReducer: ProductReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;