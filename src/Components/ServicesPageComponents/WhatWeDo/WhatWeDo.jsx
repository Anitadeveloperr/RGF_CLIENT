// import React from 'react';
import './WhatWeDo.css'
import comaricalImage from '../../../assets/ServicesPageImage/turf-in-backyard-pool-area-3.webp'
import SyntheticTurfImage from '../../../assets/ServicesPageImage/turf-in-backyard-pool-area-2.webp'
import SyntheticPlantsImage from '../../../assets/ServicesPageImage/restaurant-artificial-grass-designs-2.webp'

const WhatWeDo = () => {
    return (
        <section>
            <div className="container my-5">
                <h2 className='fw-bold fs-2 pb-3'>What We Do</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className='border h-100'>
                            <img style={{width: '100%', height: 'auto'}} src={comaricalImage} alt="comarical" />
                            <div className='p-2'>
                                <h4 className='fw-bold'>Commercial and Residential Synthetic Landscape Design Services</h4>
                                <ul>
                                    <li>3D design modeling using live images</li>
                                    <li>Visualization of new landscaping options</li>
                                    <li>Putting greens, sports fields, playgrounds</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='border h-100'>
                            <img style={{width: '100%', height: 'auto'}} src={SyntheticTurfImage} alt="comarical" />
                            <div className='p-2'>
                                <h4 className='fw-bold'>Synthetic Turf Installation Services</h4>
                                <ul>
                                    <li>Turf Planning – (color, style, types)</li>
                                    <li>Land preparation services / base / drainage</li>
                                    <li>Turf installation, trimming, edging, repair work</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='border h-100'>
                            <img style={{width: '100%', height: 'auto'}} src={SyntheticPlantsImage} alt="comarical" />
                            <div className='p-2'>
                                <h4 className='fw-bold'>Synthetic Plants, Landscaping Rock and Lighting</h4>
                                <ul>
                                    <li>Synthetic plant sales</li>
                                    <li>Synthetic plant installations</li>
                                    <li>Synthetic trees, bushes and shrubs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;