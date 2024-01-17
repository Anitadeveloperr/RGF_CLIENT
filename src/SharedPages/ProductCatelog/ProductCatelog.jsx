// import React from 'react';

import Search from 'antd/es/input/Search';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './ProductCatelog.css'

const ProductCatelog = () => {

    const data = useLoaderData();
    const [products, setProducts] = useState(data)

    // Implement Search Function __________________________________
    const onSearch = (value) => {
        console.log( value)
        const search = data.filter(d =>d.ProductTitle.toLowerCase().includes(value.toLowerCase()))
        setProducts(search)
    };

    const allProductShow = () => {
        setProducts(data)
    }
    return (
        <>
            <div className='d-flex justify-content-center align-items-center py-4'>
                <Search size= 'large' style={{width: '300px'}} placeholder="Search" onSearch={onSearch} enterButton />
                <span style={{backgroundColor: 'green', color: 'white', cursor: 'pointer'}} className='px-3 py-2 fw-bold rounded ms-2' onClick={() => allProductShow()}>All Product</span>
            </div>
            <ProductCard products={products}/>
        </>
    );
};

export default ProductCatelog;