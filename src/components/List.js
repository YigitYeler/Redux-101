import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions/list'

function List() {
    const { ItemReducer } = useSelector(state => state);
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const add = () => {
        dispatch(addItem(text));
    }
    return (
        <div>
            <input onChange={(e) => setText(e.target.value)} />
            <button onClick={add}>Listeye Ekle</button>
            <ul>
                {ItemReducer.map((item) => {
                    return (
                        <li>{item}</li>
                    )

                })}
            </ul>
        </div>
    )
}

export default List;
