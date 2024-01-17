// import React from 'react';
import './ShopPlants.css'
import TurfPlants from '../../Components/CommonComponentsPages/TurfPlants/TurfPlants';
import bushes from '../../assets/ShopPlantsImage/bushesandshrubs.webp'
import cactus from '../../assets/ShopPlantsImage/cactus.webp'
import cypress from '../../assets/ShopPlantsImage/istockphoto-1057939746-612x612.webp'
import flowers from '../../assets/ShopPlantsImage/flowers.webp'
import trees from '../../assets/ShopPlantsImage/ezgif-5-fe0f17fe03.webp'
import synthetiic from '../../assets/ShopPlantsImage/sports-and-athletics.webp'
import { ScrollRestoration } from 'react-router-dom';

const ShopPlants = () => {

    const items = [
        {
            id: '1',
            title: 'Bushes And Shrubs',
            image: bushes,
        },
        {
            id: '2',
            title: 'Cactus',
            image: cactus,
        },
        {
            id: '3',
            title: 'Cypress trees',
            image: cypress,
        },
        {
            id: '4',
            title: 'Flowers Arrangements',
            image: flowers,
        },
        {
            id: '5',
            title: 'Trees And Palms',
            image: trees,
        },
        {
            id: '6',
            title: 'Synthetic Turf',
            image: synthetiic,
        },
    ]


    return (
        <>
        <ScrollRestoration />
        <section id="shopPlantsSection">
            <div className='shopPlantsHeroBackground'>
                <div className='backgroundOverlyColor'>
                    <div className="container"><h1 className="shopPlantsTitle py-4 text-center">Outdoor, Synthetic, UV Coated Plants</h1></div>
                </div>
            </div>
            <div className="container my-5">
                <div className="row g-2 g-md-5 px-md-5 mx-md-5">
                        {
                            items.map((item, index) => <TurfPlants shopTurfLink={'plants'} item={item} key={index}/>)
                        }
                </div>
            </div>
        </section>
        </>
    );
};

export default ShopPlants;