import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../store/actions/list'

function List() {
    const { ItemReducer } = useSelector(state => state);
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const [id, setId] = useState(Math.random());
    const add = () => {
        setId(Math.random());
        dispatch(addItem({ id: id, name: text }));
        setText("");
    }

    const remove = (itemId) => {
        dispatch(removeItem(itemId))
    }
    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={add}>Listeye Ekle</button>
            <ul>
                {ItemReducer.map((item) => {
                    return (
                        <li>{item.name}<button onClick={() => remove(item.id)}>X</button></li>
                    )

                })}
            </ul>
        </div>
    )
}

export default List;
