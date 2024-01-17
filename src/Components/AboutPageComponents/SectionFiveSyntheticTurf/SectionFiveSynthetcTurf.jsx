// import React from 'react';
import { Progress } from 'antd';
import sectionFiveTurfIndorImage from '../../../assets/AboutUsImages/turf-indoors-1280x720.webp'

const SectionFiveSynthetcTurf = () => {
    return (
        <section style={{backgroundColor: '#eaefe4'}} className='py-5'>
            <div className="container">
                <div className="row g-md-4 align-items-center">
                    <div className="col-md-6">
                        <div>
                            <h1 className='' style={{fontWeight: '700', fontSize: '2.5rem'}}>Synthetic Turf For Outdoor Landscaping</h1>
                            <p className='text-secondary'>Having a green, healthy lawn can be symbol of success and contribute to your home’s curb appeal. But with rising water bills and drought-ridden areas, natural grass is becoming increasingly difficult (and expensive) to maintain. Luckily, synthetic turf is the perfect solution. Made from durable materials like nylon and polyethylene, this artificial grass looks and feels like the real thing without any of the upkeep or potential health risks of its predecessors. It’s safe, cost effective, and can drastically improve the appearance of your lawn in no time. Investing in synthetic turf will make your life easier and free up your budget for other essential household needs.</p>
                            <div>
                                <p className='mb-0 pb-0 text-secondary'>Landscape Design</p>
                                <Progress
                                    trailColor="transparent"
                                    percent={90}
                                    status="active"
                                    strokeColor={{
                                        from: '#108ee9',
                                        to: '#87d068',
                                    }}
                                />
                                <p className='mb-0 pb-0 text-secondary'>Hard Landscaping</p>
                                <Progress
                                    trailColor="transparent"
                                    percent={80}
                                    status="active"
                                    strokeColor={{
                                        from: '#108ee9',
                                        to: '#87d068',
                                    }}
                                />
                                <p className='mb-0 pb-0 text-secondary'>Soft Landscaping</p>
                                <Progress
                                    trailColor="transparent"
                                    percent={70}
                                    status="active"
                                    strokeColor={{
                                        from: '#108ee9',
                                        to: '#87d068',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div><img className='shadow border p-1' style={{width: '100%', height: 'auto', borderRadius: '200px 100px 200px 100px'}} src={sectionFiveTurfIndorImage} alt="Turf Indor" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionFiveSynthetcTurf;