// import React from 'react';
import sectionTwoImage from '../../../assets/AboutUsImages/2023-10-21-13.41.50-1-1024x720.webp'

const SectionTwoFullLandScape = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row g-md-4 align-items-center">
                    <div className="col-md-6">
                        <div><img className='shadow border p-1' style={{width: '100%', height: 'auto', borderRadius: '100px 300px 100px 200px'}} src={sectionTwoImage} alt="aboutus" /></div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h1 className='' style={{fontWeight: '700', fontSize: '2.5rem'}}>Full landscaping design services using synthetic grass, plants, shrubs and trees. </h1>
                            <p className='text-secondary'>Whether it is a small courtyard or large space, we can design, install or maintain your residential or commercial landscaping paradise to the highest standards. We use only the best materials on the market. We aim to create a lush environment that you can enjoy to your specifications to achieve a unique outdoor space.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionTwoFullLandScape;