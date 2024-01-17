// import React from 'react';
import './OurExpertise.css'
import resturentImage from '../../../assets/ServicesPageImage/restaurant-artificial-grass-designs-3.webp'
import { TiTick } from "@react-icons/all-files/ti/TiTick";


const OurExpertise = () => {
    return (
        <section style={{backgroundColor: '#eaefe4'}} className="py-5">
            <div className="container">
                <div className="row g-3">
                    <div className="col-md-4">
                        <div className='outExpertiseCard'>
                            <small className='ourExpertiseAfterEffect py-3'>Our Expertise</small>
                            <h3 className='py-4'>Thoughtful improvements to enrich your <b>residential</b> appearance</h3>
                            <ul>
                                <li><TiTick className='me-2 fs-4'/>10 Years Warranty</li>
                                <li><TiTick className='me-2 fs-4'/>Every Project is Run by a Team of Experts</li>
                                <li><TiTick className='me-2 fs-4'/>We Save You Time, Money, and Water!</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='outExpertiseCard'>
                            <small className='ourExpertiseAfterEffect py-3'>Our Expertise</small>
                            <h3 className='py-4'>Go Green the Modern Way: The Decisive Benefits of Artificial Lawns.</h3>
                            <ul>
                                <li><TiTick className='me-2 fs-4'/>Long Life: Lasts 15-20 years</li>
                                <li><TiTick className='me-2 fs-4'/>No Pests: Doesn&apos;t attract insects</li>
                                <li><TiTick className='me-2 fs-4'/>Hypoallergenic: No grass allergies</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <img style={{width: '100%', height: 'auto', borderRadius: '10px'}} src={resturentImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurExpertise;