import React from 'react';
import { Link, ScrollRestoration } from 'react-router-dom';
import './LandingPage.css'
import { FaPinterestP } from "@react-icons/all-files/fa/FaPinterestP";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { Spin } from 'antd';
const  Experience = React.lazy(() => import('../../Components/LandingPageComponents/Experience/Experience'));
const  KeyBenefits = React.lazy(() => import('../../Components/LandingPageComponents/KeyBenefits/KeyBenefits'));
const  Section4 = React.lazy(() => import('../../Components/LandingPageComponents/Section4/Section4'));
const  CarouselComponents = React.lazy(() => import('../../Components/LandingPageComponents/CarouselComponents/CarouselComponents'));


const LandingPage = () => {
    return (
        <>
        <ScrollRestoration />
        <section className="landing_page">
            <div className="landing_page_Background_overly py-2">
                <div className="container">
                {/* Hero Section_________________________ */}
                {/* Hero Text  */}
                <div className='pt-md-5'><h1 className='text-center pt-5 pb-2 landing_page_hero_text'>Residential & Commercial <br/> Synthetic Landscapes </h1></div>
                {/* Hero Button  */}
                <div className="landingPageButtonPrenentDiv">
                    <div className='landingPageButtonDiv'>
                        <Link to={'/shop-turf'} className="heroBtnStyle">Shop Turf</Link>
                        <Link to={'/shop-plants'} className="heroBtnStyle">Shop Plants</Link>
                        <Link to={'/contact-us'} className="heroBtnStyle">Free Quote</Link>
                    </div>
                </div>
                {/* Hero Section bottom part ___________ */}
                <div className='row py-md-5 gx-4'>
                    <div className="col-md-4"><div className='hero_section_bottomPert_style p-2'><p className='text-white fs-4'><span className='fw-bold'>Phone:</span> <span>(956) 253-2741</span></p></div></div>
                    <div className="col-md-4"><div className='hero_section_bottomPert_style p-2'><p className='text-white fs-4'><span className='fw-bold'>Mail:</span> <span>info@rgvturf.com</span></p></div></div>
                    <div className="col-md-4">
                        <div className='hero_section_bottomPert_style p-2'>
                            <p className='text-white fs-4 fw-bold'>Soical Link: 
                            <span>
                                <a className='text-white' target='_blank' rel='noreferrer' href="https://www.pinterest.com/rgvturf/"><FaPinterestP className='m-2' /></a>
                                <a className='text-white' target='_blank' rel='noreferrer' href="https://www.instagram.com/rgvturf/"><FaInstagram className='m-2' /></a>
                                <a className='text-white' target='_blank' rel='noreferrer' href="https://twitter.com/rgvturf"><FaTwitter className='m-2' /></a>
                                <a className='text-white' target='_blank' rel='noreferrer' href="https://www.facebook.com/rgvturf"><FaFacebookF className='m-2' /></a>
                            </span>
                            </p>
                        </div>
                        </div>
                </div>
                </div>
            </div>
        </section>
        {/* Experience Section __________________ */}
        <section className='container'>
            <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
                <Experience/>
            </React.Suspense>
        </section>
        {/* Key Benifits Section _________________ */}
        <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
            <KeyBenefits/>
        </React.Suspense>
        
        {/* Section 4 ____________________________ */}
        <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
            <Section4/>
        </React.Suspense>
        {/* Section 5 Carousel ____________________________ */}
        <div><h2 style={{fontWeight: '700', fontSize: '3.125rem'}} className='text-center pt-5 pb-2'>Customer Testimonials</h2></div>
        <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
            <CarouselComponents/>
        </React.Suspense>

        </>
    );
};

export default LandingPage;