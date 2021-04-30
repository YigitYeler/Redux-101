import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { incerement, decrement } from '../store/actions/counter'

function Counter() {
    const dispatch = useDispatch();
    const { counter } = useSelector(state => state)
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(incerement())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter;
