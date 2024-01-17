// import React from 'react';
import './SingleProductPage.css'
// import axios from 'axios'
import { Link, ScrollRestoration, useParams } from "react-router-dom";
import { Tab, Tabs } from 'react-bootstrap';
import {
    FacebookShareButton,
    FacebookIcon,
    PinterestShareButton,
    PinterestIcon,
    TwitterShareButton,
    XIcon,
  } from "react-share";
  import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
  import { FaThLarge } from "@react-icons/all-files/fa/FaThLarge";
  import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import { useEffect, useState } from 'react';
import ContactFormForProduct from '../../Components/CommonComponentsPages/ContactFormForProduct/ContactFormForProduct';

const SingleProductPage = () => {
    const {id, title} = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        fetch(`https://rgf.onrender.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
            console.log(data)
        })
    }, [id])
 

    

    return (
        <>
        <ScrollRestoration />
        <section className="my-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <h1>{product?.ProductTitle}</h1>
                    </div>
                    <div className="col-md-2">
                        <div style={{backgroundColor: '#eaefe4'}} className='border d-md-flex justify-content-md-center'>
                            <FaArrowLeft data-bs-toggle="tooltip" data-bs-placement="bottom" title="Previous Item" style={{color: 'green', cursor: 'pointer'}}  className='fs-2 py-2 mx-2'/>
                            <FaThLarge data-bs-toggle="tooltip" data-bs-placement="bottom" title="Catelog Page" style={{color: 'green', cursor: 'pointer'}}  className='fs-2 py-2 mx-2'/>
                            <FaArrowRight data-bs-toggle="tooltip" data-bs-placement="bottom" title="Next Item" style={{color: 'green', cursor: 'pointer'}}  className='fs-2 py-2 mx-2'/>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="border px-3 py-2">
                            <Link to={'/'} className="text-secondary pe-2" style={{textDecoration: 'none'}}>Home &gt;&gt;</Link>
                            <Link to={'/product-catelog'} className="text-secondary pe-2" style={{textDecoration: 'none'}}>Product Catelog &gt;&gt;</Link>
                            <span className="text-secondary">{product?.ProductTitle}</span>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className='my-2'>
                            <TwitterShareButton
                            url={'/'}
                            title={title}
                            className="Demo__some-network__share-button mx-1"
                            >
                            <XIcon size={32} round />
                            </TwitterShareButton>
                            
                            <FacebookShareButton
                            url={'/'}
                            className="Demo__some-network__share-button mx-1"
                            >
                                <FacebookIcon size={32} round />
                            </FacebookShareButton>

                            <PinterestShareButton
                            url={'/'}
                            className="Demo__some-network__share-button mx-1"
                            >
                                <PinterestIcon size={32} round />
                            </PinterestShareButton>
                        </div>
                    </div>
                </div>
                <div className="row">  
                    <div className="col d-flex justify-content-center p-2 overflow-hidden">
                        <img style={{height: '80vh', width: 'auto'}} src={`https://rgf.onrender.com/${product?.img}`} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col for_product_tab_style">
                        <Tabs
                            defaultActiveKey="product_description"
                            id="product_details_tabs"
                            >
                            <Tab eventKey="product_description" title="PRODUCT DESCRIPTION">
                                <div><p>{product?.ProductDescription}</p></div>
                            </Tab>
                            <Tab eventKey="product_features" title="PRODUCT FEATURES">
                                <div>
                                    {
                                        product?.category == 'Shop Turf' ? <table className='table'>
                                            <tbody>
                                                <tr>
                                                    <td>Yarn Type</td>
                                                    <td className='fw-bold'>{product?.YarnType}</td>
                                                </tr>
                                                <tr>
                                                    <td>Weight</td>
                                                    <td className='fw-bold'>{product?.Weight}</td>
                                                </tr>
                                                <tr>
                                                    <td>Secondary Backing</td>
                                                    <td className='fw-bold'>{product?.SecondaryBacking}</td>
                                                </tr>
                                                <tr>
                                                    <td>Pile Height</td>
                                                    <td className='fw-bold'>{product?.Pile_Height}</td>
                                                </tr>
                                                <tr>
                                                    <td>Roll Width</td>
                                                    <td className='fw-bold'>{product?.RollWidth}</td>
                                                </tr>
                                                <tr>
                                                    <td>Perforated</td>
                                                    <td className='fw-bold'>{product?.Perforated}</td>
                                                </tr>
                                                <tr>
                                                    <td>Color</td>
                                                    <td className='fw-bold'>{product?.Color}</td>
                                                </tr>
                                                <tr>
                                                    <td>PDF Spec Sheet</td>
                                                    <td className='fw-bold'>{product?.PDFSpecSheet}</td>
                                                </tr>
                                            </tbody>
                                        </table> : <table className='table'>
                                            <tbody className='p-3'>
                                                <tr>
                                                    <td>Product code</td>
                                                    <td className='fw-bold'>{product?.Product_Code}</td>
                                                </tr>
                                                <tr>
                                                    <td>UPC</td>
                                                    <td className='fw-bold'>{product?.UPC}</td>
                                                </tr>
                                                <tr>
                                                    <td>Items per pack</td>
                                                    <td className='fw-bold'>{product?.ItemsPerPack}</td>
                                                </tr>
                                                <tr>
                                                    <td>Dominant color</td>
                                                    <td className='fw-bold'>{product?.DominantColor}</td>
                                                </tr>
                                                <tr>
                                                    <td>Product code</td>
                                                    <td className='fw-bold'>{product?.Product_Code}</td>
                                                </tr>
                                                <tr>
                                                    <td>Potted or base included</td>
                                                    <td className='fw-bold'>{product?.PottedOrBaseIncluded}</td>
                                                </tr>
                                                <tr>
                                                    <td>Weight of each item</td>
                                                    <td className='fw-bold'>{product?.WeightOfEachItem}</td>
                                                </tr>
                                                <tr>
                                                    <td>Weight of 1 pack</td>
                                                    <td className='fw-bold'>{product?.WeightOf1pack}</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping box size</td>
                                                    <td className='fw-bold'>{product?.ShippingBoxSize}</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping dimensional weight</td>
                                                    <td className='fw-bold'>{product?.ShippingDimensionalWeight}</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping dimensional weight</td>
                                                    <td className='fw-bold'>{product?.OversizedFreightShipping}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    }
                                </div>
                            </Tab>
                            <Tab eventKey="reques_a_quate" title="REQUEST A QUATE">
                                <ContactFormForProduct/>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
        {/* Product Carousel ________________________ */}
        <ProductCarousel/>
        
        </>
    );
};

export default SingleProductPage;