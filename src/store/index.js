import { createStore, combineReducers } from 'redux';
//import CounterReducer from './reducers/counter.js'
import ItemReducer from './reducers/list'

const reducers = combineReducers({
    ItemReducer: ItemReducer
})

const store = createStore(reducers);

export default store;