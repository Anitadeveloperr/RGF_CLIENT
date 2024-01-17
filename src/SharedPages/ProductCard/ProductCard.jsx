/* eslint-disable react/prop-types */
// import React from 'react';

import { Link,} from "react-router-dom";


const ProductCard = ({products}) => {


    return (
        <section className="my-4">
            <div className="container">
                <div className="row g-3">
                    {products.map((product) => {
                        return <div key={product._id} className="col-md-4">
                            <Link style={{textDecoration: 'none', color: 'black'}} to={`/product-catalog/${product?._id}/${product?.ProductTitle}`}>
                                <div style={{cursor: 'pointer'}} className="overflow-hidden pointer">
                                    <div style={{height: '250px'}} className="d-flex justify-content-center align-items-center overflow-hidden p-2">
                                        <img style={{height: '-webkit-fill-available', width: '100%',}} src={`https://rgf.onrender.com/${product?.img}`} alt={product?.ProductTitle} />
                                    </div>
                                    <h3 className="py-2 fs-6 px-3 border-top">{product.ProductTitle}</h3>
                                </div>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductCard;