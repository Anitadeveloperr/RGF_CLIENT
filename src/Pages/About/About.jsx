import React from 'react';
import './About.css'
import { Spin } from 'antd';
import { ScrollRestoration } from 'react-router-dom';
const SectionTwoFullLandScape = React.lazy(() => import('../../Components/AboutPageComponents/SectionTwoFullLandScape/SectionTwoFullLandScape.jsx'))
const SectionThreeWeDont = React.lazy(() => import('../../Components/AboutPageComponents/SectionThreeWeDont/SectionThreeWeDont.jsx'))
const SectionFourAffordability = React.lazy(() => import('../../Components/AboutPageComponents/SectionFourAffordability/SectionFourAffordability.jsx'))
const SectionFiveSynthetcTurf = React.lazy(() => import('../../Components/AboutPageComponents/SectionFiveSyntheticTurf/SectionFiveSynthetcTurf.jsx'))
const SectionSixRGVTurfTeam = React.lazy(() => import('../../Components/AboutPageComponents/SectionSixRGVTurfTeam/SectionSixRGVTurfTeam.jsx'))
const SectionSevnEmployer = React.lazy(() => import('../../Components/AboutPageComponents/SectionSevnEmployer/SectionSevnEmployer'))
const ContactForm = React.lazy(() => import('../ContactUs/ContactForm/ContactForm'));

const About = () => {
    return (
        <>
            <ScrollRestoration />
            <section id="aboutHeroSection">
                <div className="about_hero_section_overly_color">
                    <div className='about_hero_section_text'>
                        <p>GET TO KNOW US</p>
                        <h2>About Us</h2>
                    </div>
                </div>
            </section>
            {/* Section Two Full Landscape ____________________________ */}
            <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
                <SectionTwoFullLandScape/>
            </React.Suspense>
            {/* Section Three We Don't ____________________________ */}
            <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
                <SectionThreeWeDont/>
            </React.Suspense>
            {/* Section Four Affordability ____________________________ */}
            <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
                <SectionFourAffordability/>
            </React.Suspense>
            {/* Section Five SynthetcTurf ____________________________ */}
            <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
                <SectionFiveSynthetcTurf/>
            </React.Suspense>
            {/* Section Six SectionSixRGVTurfTeam____________________________ */}
            <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
                <SectionSixRGVTurfTeam/>
            </React.Suspense>
            {/* Section Seven Employer Contact Card ____________________________ */}
            <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
                <SectionSevnEmployer/>
            </React.Suspense>
            {/* Section eight Contact Form ____________________________ */}
            <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
                <ContactForm/>
            </React.Suspense>
        </>
    );
};

export default About;