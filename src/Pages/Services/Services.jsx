import React from 'react';
import './Services.css'
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt";
import { Spin } from 'antd';
import { ScrollRestoration } from 'react-router-dom';
const WhatWeDo = React.lazy(() => import('../../Components/ServicesPageComponents/WhatWeDo/WhatWeDo'));
const OurExpertise = React.lazy(() => import('../../Components/ServicesPageComponents/OurExpertise/OurExpertise'));
const Landscope = React.lazy(() => import('../../Components/ServicesPageComponents/Landscape/Landscape'));
const ServicesSection5 = React.lazy(() => import('../../Components/ServicesPageComponents/ServicesSection5/ServicesSection5'));

const Services = () => {
    return (
        <>
        <ScrollRestoration />
        <section id="servicesPage">
            <div className="servicesPageHeroBackground">
                <div className="servicesBackgroundOverly">
                    <div className="container">
                        <h1 className='servicesPageTitle'>Synthetic | Modern | Designs</h1>
                    </div>
                </div>
            </div>
            <div className="container py-5 border-bottom">
                <div className="row">
                    <div className="col-md-6">
                        <h4 className='fs-1 fw-bold text-gray'>We don&apos;t settle for average landscapes. Ours look their best 365 days a year! </h4>
                    </div> 
                    <div className="col-md-6 d-md-flex align-items-center justify-content-end">
                        <div className='py-3'>
                            <h5 className='fw-bold fs-5 text-md-end'>TXT or CALL for a free estimate</h5>
                            <a style={{textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '20px', display: 'block' }} className='fs-bold fs-2 text-md-end' href="callto:9562532741"><FaMobileAlt style={{width: '30px', height: 'auto'}}/> 956-253-2741</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* 2nd Section Components What We Do_________________________________ */}
        <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
            <WhatWeDo/>
        </React.Suspense>
        {/* 3rd Section Components our expertise_________________________________ */}
        <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
            <OurExpertise/>
        </React.Suspense>
        {/* 4th Section Components Landscape_________________________________ */}
        <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
            <Landscope/>
        </React.Suspense>
        {/* 5th Section Components Services Section_________________________________ */}
        <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
            <ServicesSection5/>
        </React.Suspense>
        </>
    );
};

export default Services;