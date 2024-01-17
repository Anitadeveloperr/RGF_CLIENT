// import React from 'react';
import './SectionThreeWeDont.css'
import { Progress } from 'antd';
import sectionThreeImage from '../../../assets/AboutUsImages/2023-10-21-13.45.12-1024x720.webp'

const SectionThreeWeDont = () => {
    return (
        <section style={{backgroundColor: '#eaefe4'}} className='py-5'>
            <div className="container">
                <div className="row g-md-4 align-items-center">
                    <div className="col-md-6">
                        <div>
                            <h1 className='' style={{fontWeight: '700', fontSize: '2.5rem'}}>We don&apos;t settle for boring landscape.</h1>
                            <p className='text-secondary'>Specializing in synthetic lawns, plants, shrubs and rocks we are able to help create a vibrant, virtually maintenance free environment that outshines natural grass and plants year round and requires no water what so ever.</p>
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
                        <div><img className='shadow border p-1' style={{width: '100%', height: 'auto', borderRadius: '200px 100px 200px 100px'}} src={sectionThreeImage} alt="we dont image" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionThreeWeDont;