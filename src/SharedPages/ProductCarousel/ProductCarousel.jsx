// import React from 'react';
import './ProductCarousel.css'
import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const ProductCarousel = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
      axios.get('https://rgf.onrender.com/products').then(res => setProducts(res.data.slice(0,10)))
    },[])

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section>
          <div className="container py-4">
            <Carousel 
                responsive={responsive}
                draggable={true}
                infinite={true}
                arrows={true}
                autoPlay={true}
                >
                {/* Need Just One for Dynamic _______________________________________________________________________________________ */}
                {
                    products && products?.map(product => {
                        return <div key={product._id} className='mx-2'>
                                <Link style={{textDecoration: 'none', color: 'black'}} to={`/product-catalog/${product._id}/${product.ProductTitle}`}>
                                    <div style={{cursor: 'pointer'}} className="overflow-hidden pointer">
                                        <div style={{height: '250px'}} className="d-flex justify-content-center align-items-center overflow-hidden p-2">
                                            <img style={{height: 'auto', width: '100%',}} src={`https://rgf.onrender.com/${product.img}`} alt={product.ProductTitle} />
                                        </div>
                                        <h3 className="py-2 fs-6 px-3 border-top">{product?.ProductTitle}</h3>
                                    </div>
                                </Link>
                        </div>
                    })
                }
                
            </Carousel>
        </div>
        </section>
    );
};

export default ProductCarousel;