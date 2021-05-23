import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getProducts } from '../store/actions/product'

const Products = () => {
    const { ProductReducer } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])


    console.log(ProductReducer.isLoading)
    return (
        <div>
            <ul>
                <title>PRODUCTS</title>
                {ProductReducer.isLoading ? <h1>YÜKLENİYOR...</h1> : ProductReducer.products.data.map(item => {
                    return (<li key={item.id}>{item.productName}</li>)
                })}

            </ul>
        </div>
    )
}

export default Products;
