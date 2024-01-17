// import React from 'react';
import './Landscape.css'
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow";
import { Link } from "react-router-dom";

const Landscape = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-6">
                        <div>
                            <h3 className='fs-1 fw-bold py-3'>Landscape Design Services</h3>
                            <Link className='keyBenefitsSectionButton py-2 ms-2' to={'/services'}><FaLocationArrow style={{marginTop: '-5px'}} className='me-2'/>RGV Turf Team</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p>We also cater to customers who would rather install the turf themselves or use their existing contractors or builders by proving top quality turf products and accessories. We have products such as Envirofill Infill and Silica based turf ingredients, base materials, glues, tapes, tools and much more!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landscape;