import { Spin } from 'antd';
import React from 'react';
// import AcordionForFAQs from '../FAQs/AcordionForFAQs/AcordionForFAQs';
import './FAQs.css'
const AcordionForFAQs = React.lazy(() => import('../FAQs/AcordionForFAQs/AcordionForFAQs'))

const FAQs = () => {
    return (
        <>
        <section id="faq_page">
            <div className="faq_page_hero_section_overly_color">
                <div className='faq_page_hero_section_text'>
                    <h2>Turf FAQ’s</h2>
                </div>
            </div>
        </section>
        {/* AcordionForFAQs Section _________ */}
        <React.Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
            <AcordionForFAQs/>
        </React.Suspense>
        </>
    );
};

export default FAQs;