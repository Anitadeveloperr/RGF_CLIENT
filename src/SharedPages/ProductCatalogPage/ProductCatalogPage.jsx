/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react';

import './ProductCatalogPage.css'
import { Select } from "antd";
import Search from "antd/es/input/Search";
import { Link, ScrollRestoration, useLoaderData, useParams } from "react-router-dom";
import ProductCard from '../ProductCard/ProductCard';
// import { useEffect } from 'react';
import { useState, useEffect } from 'react';
import {  } from 'react';

const ProductCatalogPage = ({heroText, buttonLink, buttonText}) => {
    // Fatch Product Data using Axios _______________________________
    const fatchProduct = useLoaderData();
    const [products, setProducts] = useState(fatchProduct)

    // Get product Sub Category From Use Params _____________________ 
    const { productCategory } = useParams();
    const [productCat, setProductCat] = useState(productCategory);
    // Problem Solving About Residential/Commercial Landscape '/' Problem )______________________
    let category;
    useEffect(() => {
        if(productCategory === 'Residential Commercial Landscape'){
            category = 'Residential-Commercial Landscape';
            const search = fatchProduct.filter(d =>d.subCategory.includes(category))
            setProducts(search)      
        }else{
            setProductCat(productCategory)
            const search = fatchProduct.filter(d =>d.subCategory.includes(productCat))
            setProducts(search)                                        
        }
    },[])

    // Implement Search Function __________________________________
    const onSearch = (value) => {
        console.log( value)
        const search = fatchProduct.filter(d =>d.ProductTitle.toLowerCase().includes(value.toLowerCase()))
        setProducts(search)
    };



    return (
        <>
            <ScrollRestoration />
            <section className="backgroundImage">
                <div className="backgrondOverly">
                    <div className="container py-4">
                        <h1 className="text-center fw-bold text-white">{heroText}</h1> 
                    </div>
                </div>
            </section>
            <section className='border-bottom'>
                <div className="container">
                    <div className="row g-2 py-4">
                        <div className="col-sm-4">
                            <div className='d-flex justify-content-end align-items-center'><Search size= 'large' style={{width: '100%'}} placeholder="Search" onSearch={onSearch} enterButton /></div>
                        </div>
                        <div className="col-sm-4">
                            <div>
                                {
                                    buttonText == 'Shop Turf' ? <>
                                        <Select
                                            defaultValue= {productCategory}
                                            size= 'large'
                                            style={{
                                                width: '100%',
                                            }}
                                            onChange={e => {
                                                    const search = fatchProduct.filter(d =>d.subCategory.includes(e))
                                                    setProducts(search)
                                                    if(e == 'All'){
                                                        setProducts(fatchProduct)
                                                    }
                                            }}
                                            options={[
                                                {value: 'All',label: 'All',},
                                                {value: 'Bushes And Shrubs',label: 'Bushes And Shrubs',},
                                                {value: 'Cactus',label: 'Cactus',},
                                                {value: 'Cypress trees',label: 'Cypress trees',},
                                                {value: 'Flowers Arrangements',label: 'Flowers Arrangements',},
                                                {value: 'Trees And Palms',label: 'Trees And Palms',},
                                            ]}
                                        />
                                    </>:
                                    <>
                                        <Select
                                            defaultValue= {productCategory}
                                            size= 'large'
                                            style={{
                                                width: '100%',
                                            }}
                                            onChange={e => {
                                                const search = fatchProduct.filter(d =>d.subCategory.includes(e))
                                                setProducts(search)
                                                if(e == 'All'){
                                                    setProducts(fatchProduct)
                                                }
                                            }}
                                            options={[
                                                {value: 'All',label: 'All',},
                                                {value: 'Residential/Commercial Landscape',label: 'Residential/Commercial Landscape',},
                                                {value: 'Sport and Athletic',label: 'Sport and Athletic',},
                                                {value: 'Childrens Play Areas',label: 'Childrens Play Areas',},
                                                {value: 'Kennels and Pets',label: 'Kennels and Pets',},
                                                {value: 'Golf and Putting Zones',label: 'Golf and Putting Zones',},
                                            ]}
                                        />
                                    </>
                                }
                            </div>
                        </div>
                        <div className="col-sm-4">
                           <div className='d-flex justify-content-start align-items-center'><Link className='text-center fw-bold rounded' style={{textDecoration: 'none', padding: '7px 0px', backgroundColor: 'green', color: 'white', width: '100%'}} to={buttonLink}>{buttonText}</Link></div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductCard products={products}/>
        </>
    );
};

export default ProductCatalogPage;