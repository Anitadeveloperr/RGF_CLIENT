// import React from 'react';
import { Link } from 'react-router-dom';
import './KeyBenefits.css'
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow";


const KeyBenefits = () => {
    return (
        <section id="keyBenefitsSection" className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className='text-secondary'>Artificial Turf in McAllen, Texas: Eco-Friendly, Easy-Care Lawns</p>
                        <h2 className='fw-bolder pb-4 fs-1 text-secondary'>Key Benefits of Artificial Turf for Texas Homes</h2>
                        <ol>
                            <li>Drought-Resistant: Artificial turf stays green without water.</li>
                            <li>Saves Money: Cuts significant water and gardening costs.</li>
                            <li>Year-Round Green: No brown patches, evergreen appeal.</li>
                            <li>Heat-Resistant: Engineered for cooler surfaces in intense heat.</li>
                            <li>Minimal Upkeep: No mowing or chemicals, more free time.</li>
                            <li>Fire-Resistant Properties: Artificial turf materials are fire-resistant.</li>
                            <li>Pest-Free: Artificial turf deters pests, eliminating the need for chemical insecticides and enhances outdoor comfort.</li>
                            <li>Custom Looks: Synthetic grass offers varied colors and lengths.</li>
                            <li>Quieter Environment: The structure of artificial lawns absorbs sound, contributing to calmer, more peaceful surroundings.</li>
                        </ol>
                        <div className='pb-4'>
                        <Link className='keyBenefitsSectionButton py-2 ms-2' to={'/services'}><FaLocationArrow style={{marginTop: '-5px'}} className='me-2'/>RGV Turf Team</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <article className='text-secondary pb-3 fw-bold'>Upgrade to a hassle-free, evergreen artificial turf that mirrors natural beauty. Ideal for McAllen, Texas residents seeking sustainable, easy-care landscaping.</article>
                        <article className='text-secondary pb-3'>Seeking a flawless, green lawn in McAllen, Texas? Discover top-tier artificial turf solutions, a leap beyond old-school Astroturf, mimicking natural grass like Kentucky bluegrass and fescue.</article>
                        <p className='text-secondary pb-2 fw-bold'>Artificial Grass: McAllen’s Modern Landscaping Gem</p>
                        <ul>
                            <li className='text-secondary'><span className='fw-bold'>Visually Stunning:</span>Enjoy realistic, lush synthetic grass that boosts your home’s curb appeal.</li>
                            <li className='text-secondary'><span className='fw-bold'>Easy Upkeep:</span>Forget constant watering and mowing; embrace a pristine lawn with little effort.</li>
                            <li className='text-secondary'><span className='fw-bold'>Eco-Conscious Choice:</span>With water conservation critical, artificial turf offers a green solution, saving resources.</li>
                        </ul>
                        <p className='text-secondary'>Join McAllen, Texas homeowners switching to artificial grass for beauty, ease, and eco-friendliness.</p>
                        <p className='text-secondary fst-italic'>ransform your McAllen property with high-quality artificial turf. Contact us for the best landscaping solutions today!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyBenefits;