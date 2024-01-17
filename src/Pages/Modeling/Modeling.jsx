// import React from 'react';
import './Modeling.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import ImageCard from './ImageCard/ImageCard';

const Modeling = () => {

    const [data, setData] = useState()
    useEffect(() => {
        axios.get('https://rgf.onrender.com/modelingImageApi').then(data => setData(data.data)).catch(err => console.log(err))
    }, [])

    return (
        <>
        <section id="modelingHeroSection">
            <div className="modeling_hero_section_overly_color">
                <div className='modeling_hero_section_text'>
                    <p>Ultra-Realistic Renderings of Your Property!</p>
                    <h2>3D Modeling & Design Services</h2>
                </div>
            </div>
        </section>
        <section className='py-5'>
            <div className="container">
                <div className="row g-3">
                        <ImageCard data={data}/>
                </div>
            </div>
        </section>
        </>
    );
};

export default Modeling;