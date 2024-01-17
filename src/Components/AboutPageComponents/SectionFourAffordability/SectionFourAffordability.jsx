// import React from 'react';
import sectionFourAffordabilityImage from '../../../assets/AboutUsImages/southwestern-themed-plaza-with-artificial-grass-4-1024x720.webp'

const SectionFourAffordability = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row g-md-4 align-items-center">
                    <div className="col-md-6">
                        <div><img className='shadow border p-1' style={{width: '100%', height: 'auto', borderRadius: '200px 200px 300px 200px'}} src={sectionFourAffordabilityImage} alt="Affordability" /></div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h1 className='' style={{fontWeight: '700', fontSize: '2.5rem'}}>Affordability, ROI, Financing and More!</h1>
                            <p className='text-secondary'>Installing artificial grass is more affordable than you might think. It WILL save you money in the long run since you won’t need to water or fertilize it. You’ll also save time since you won’t need to mow or edge your lawn on a weekly or monthly basis. RGV Turf offers multiple forms of financing for both residential and commercial clients via our 3rd party financing partners. If you’re looking for a low-maintenance, cost-effective solution for your lawn contact us now at RGV Turf and see your outdoor oasis come to life!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionFourAffordability;