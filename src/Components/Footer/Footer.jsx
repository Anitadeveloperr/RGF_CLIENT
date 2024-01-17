// import React from 'react';
import './Footer.css'
import googleImage from '../../assets/FooterLogo/google_review.webp';
import homeAdvisor from '../../assets/FooterLogo/home-advisor-five-star-rating.webp';
import leadCertification from '../../assets/FooterLogo/leed-certification-silver.webp';
import stcMember from '../../assets/FooterLogo/stc-member.webp';
import sslCertification from '../../assets/FooterLogo/ssl-certificate.webp';
import spanish_lang from '../../assets/spanish_lang.webp';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='py-5 footer_innerShadow'>
            <div className='container'>
                <div>
                    <p className='text-center'>All rights reserved | 2023 RGV Turf, LLC.</p>
                </div>
                <div className='footer_image_style'>
                    <a href="https://maps.app.goo.gl/yPXjvheLtMKfmwWp8?g_st=ic" target={'_blank'} rel='noreferrer'><img src={googleImage} alt="Google Review" /></a>
                    <a href="https://www.homeadvisor.com/rated.RgVTurf.126298943.html" target={'_blank'} rel='noreferrer'><img src={homeAdvisor} alt="home-advisor-five-star-rating" /></a>
                    <img src={leadCertification} alt="leed-certification-silver" />
                    <img src={stcMember} alt="stc-member" />
                    <img src={sslCertification} alt="stc-member" />
                    <Link to={'/about'}><img src={spanish_lang} alt="spanish_lang" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;