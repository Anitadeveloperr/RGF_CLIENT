// import React from 'react';
import './ServicesSection5.css';
import { GiHighGrass } from "@react-icons/all-files/gi/GiHighGrass";
import { GiHolyWater } from "@react-icons/all-files/gi/GiHolyWater";
import { GiCrescentStaff } from "@react-icons/all-files/gi/GiCrescentStaff";
import { GiGreenhouse } from "@react-icons/all-files/gi/GiGreenhouse";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FaHandPaper } from "@react-icons/all-files/fa/FaHandPaper";

const ServicesSection5 = () => {
    return (
        <section id='servicesSection5'>
          <div className="container">
                <div className="row gx-2">
                    <div className="col-md-4">
                        <div className='servicesSection5_card_hover p-3 p-md-4'>
                            <GiHighGrass style={{width: '60px', height: 'auto', color: '#6c757d'}} />
                            <h3 className='fw-bold text-secondary py-2'>Synthetic Turf Installation</h3>
                            <p className='text-secondary'>Installation of your choice of synthetic, very natural looking grass and landscaping options.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='servicesSection5_card_hover p-3 p-md-4'>
                            <GiHolyWater style={{width: '60px', height: 'auto', color: '#6c757d'}} />
                            <h3 className='fw-bold text-secondary py-2'>Landscaping Design Services</h3>
                            <p className='text-secondary'>RGV Turf can help you plan, model and delivery your new, entirely custom outdoor oasis.</p>
                        </div> 
                    </div>
                    <div className="col-md-4">
                        <div className='servicesSection5_card_hover p-3 p-md-4'>
                            <FaHandshake style={{width: '60px', height: 'auto', color: '#6c757d'}} />
                            <h3 className='fw-bold text-secondary py-2'>Synthetic Turf Repair Work, Replacement and Cleaning.</h3>
                            <p className='text-secondary'>Got a few spots where the turf has become damaged, faded or all together torn out? We can repair most turf issues on site.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='servicesSection5_card_hover p-3 p-md-4'>
                            <FaHandPaper style={{width: '60px', height: 'auto', color: '#6c757d'}} />
                            <h3 className='fw-bold text-secondary py-2'>Vibrant Synthetic Outdoor Plants</h3>
                            <p className='text-secondary'>We have a particularly large selection of vibrant synthetic outdoor plants that will look amazing for many years to come and are completely maintenance free!</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='servicesSection5_card_hover p-3 p-md-4'>
                            <GiCrescentStaff style={{width: '60px', height: 'auto', color: '#6c757d'}} />
                            <h3 className='fw-bold text-secondary py-2'>Ground Preparation, Leveling and Drainage Development.</h3>
                            <p className='text-secondary'>RGV Turf can prepare your land for the installation of turf, landscaping rocks, pathways and more.</p>
                        </div> 
                    </div>
                    <div className="col-md-4">
                        <div className='servicesSection5_card_hover p-3 p-md-4'>
                            <GiGreenhouse style={{width: '60px', height: 'auto', color: '#6c757d'}} />
                            <h3 className='fw-bold text-secondary py-2'>Garden Walls</h3>
                            <p className='text-secondary'>RGV Turf provides easy landscaping walls and dividers made from PVC that can be arranged around your yard or garden areas.</p>
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    );
};

export default ServicesSection5;