// import React from 'react';
import './Experience.css'
import { MdContactMail } from "@react-icons/all-files/md/MdContactMail";
import { Link } from "react-router-dom";
import Synthetic from '../../../assets/LandingPage/laying-sod.webp'
import Turf from '../../../assets/LandingPage/DSC_1311.webp'
import Artificial from '../../../assets/LandingPage/plants_bg.webp'
import Landscape from '../../../assets/LandingPage/M-SL-Yard-_-Outdoor.webp'


const Experience = () => {
    return (
        <div className="row py-4">
            <div className="col-md-6">
                <h2 className="fw-bolder py-4 fs-1 text-secondary">Experience the Greenest Yards in Texas with RGV Turf</h2>
                <article className="pb-3 text-secondary">RGV Turf provides the most realistic synthetic grass in the Rio Grande Valley. Our artificial turf replicates lush, natural grass and is specifically designed to withstand the Texas climate. With RGV Turf, you can have the emerald lawn you’ve always wanted without the work and hassle of maintaining real grass. Ditch the mower and say goodbye to watering – our turf stays vibrantly green all year round with zero maintenance required.</article>
                <article className='text-secondary'>As a trusted local company, we take pride in beautifying lawns and landscapes throughout McAllen, Brownsville, Harlingen, and surrounding areas. RGV Turf offers FREE estimates and can provide you with the perfect turf solution for your home or business. Contact us today to schedule a consultation with our friendly team of experts. Discover why we are the top choice for artificial grass installations in South Texas.</article>
                <div className='ExperiencePageButtonDiv my-5'>
                    <Link to={'/contact-us'} className="ExperienceBtnStyle"><MdContactMail style={{marginTop: '-5px'}} className='me-2'/>Contact US</Link>
                </div>
            </div>
            <div className="col-md-6 py-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img_box_landing">
                            <img src={Synthetic} alt="Synthetic" />
                            <h3>Synthetic Landscape Designing</h3>
                        </div>

                        <div className="img_box_landing">
                            <img src={Artificial} alt="Synthetic" />
                            <h3>Artificial Plants, Shrubs & Tree&apos;s</h3>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="img_box_landing">
                            <img src={Turf} alt="Synthetic" />
                            <h3>Turf Accessories and Edging</h3>
                        </div>
                        <div className="img_box_landing">
                            <img src={Landscape} alt="Synthetic" />
                            <h3>Landscape Lighting & Decor</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;