// import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Rate } from 'antd';
import artificialTurffor from '../../../assets/LandingPage/ReviewCarousel/ArtificialTurffor.webp'
import artificialTurfPebbles from '../../../assets/LandingPage/ReviewCarousel/ArtificialTurfPebbles.webp'
import excellentWork from '../../../assets/LandingPage/ReviewCarousel/ExcellentWorkA+.webp'
import syntheticlLandscaping from '../../../assets/LandingPage/ReviewCarousel/SyntheticLandscaping.webp'
import syntheticMaintenance from '../../../assets/LandingPage/ReviewCarousel/SyntheticMaintenance.webp'
import veryExperiencedCrew from '../../../assets/LandingPage/ReviewCarousel/VeryExperiencedCrew!.webp'
import veryNiceResults from '../../../assets/LandingPage/ReviewCarousel/VeryNiceResults!.jpg'
import './CarouselComponents.css'

const CarouselComponents = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return (
        <>
        <div className="container py-4">
            <Carousel 
                responsive={responsive}
                draggable={true}
                infinite={true}
                arrows={true}
                autoPlay={true}
                >
                {/* Need Just One for Dynamic _______________________________________________________________________________________ */}
                <div className="p-2 m-2 bg-light">
                    <div className="carousel_style_css">
                        <img style={{width: '100%', height: 'auto', borderRadius: '20px'}} src={veryExperiencedCrew} alt="" />
                        <h4 className="text-center pt-3">Very Experienced Crew!</h4>
                        <Rate className="d-block text-center text-black my-3" disabled defaultValue={5} />
                        <p className="text-center">My new landscape has really enhanced the look of my home. I highly recommend RGV Turf to anyone considering artificial turf or custom landscapes.</p>
                        <h5 className="text-center text-dark">Rosa S</h5>
                        <small className="d-block text-center">Edinberg, TX</small>
                    </div>
                </div>
                {/* ___________________________________________________________________________________________________________________ */}
                <div className="p-2 m-2 bg-light">
                    <div className="carousel_style_css">
                        <img style={{width: '100%', height: 'auto', borderRadius: '20px'}} src={excellentWork} alt="" />
                        <h4 className="text-center pt-3">Excellent Work, A+</h4>
                        <Rate className="d-block text-center text-black my-3" disabled defaultValue={5} />
                        <p className="text-center">Honest reliable and always professional in their approach to the task in hand. Very experienced with an eye to detail.</p>
                        <h5 className="text-center text-dark">Marc H.</h5>
                        <small className="d-block text-center">McAllen, Texas</small>
                    </div>
                </div>
                <div className="p-2 m-2 bg-light">
                    <div className="carousel_style_css">
                        <img style={{width: '100%', height: 'auto', borderRadius: '20px'}} src={veryNiceResults} alt="" />
                        <h4 className="text-center pt-3">Very Nice Results!</h4>
                        <Rate className="d-block text-center text-black my-3" disabled defaultValue={5} />
                        <p className="text-center">Thank you for your professional advice and approach to the job. You provided an efficient and courteous service throughout. Came out even better then the 3D mockups portrayed.</p>
                        <h5 className="text-center text-dark">Catherine Zaleski</h5>
                        <small className="d-block text-center">Brownsville, Texas</small>
                    </div>
                </div>
                <div className="p-2 m-2 bg-light">
                    <div className="carousel_style_css">
                        <img style={{width: '100%', height: 'auto', borderRadius: '20px'}} src={syntheticlLandscaping} alt="" />
                        <h4 className="text-center pt-3">Synthetic Landscaping in Childs Play Area</h4>
                        <Rate className="d-block text-center text-black my-3" disabled defaultValue={5} />
                        <p className="text-center">RGV Turf did a very professional job on my backyard and children’s play zone. Many thanks RGV Turf!</p>
                        <h5 className="text-center text-dark">Jorge Herrera</h5>
                        <small className="d-block text-center">Edinburg, Texas</small>
                    </div>
                </div>
                <div className="p-2 m-2 bg-light">
                    <div className="carousel_style_css">
                        <img style={{width: '100%', height: 'auto', borderRadius: '20px'}} src={syntheticMaintenance} alt="" />
                        <h4 className="text-center pt-3">Synthetic, Maintenance Free Landscape in Weslaco Residence</h4>
                        <Rate className="d-block text-center text-black my-3" disabled defaultValue={5} />
                        <p className="text-center">RGV Turf carries out the contract to a high professional standard. Many thanks for a very good job.</p>
                        <h5 className="text-center text-dark">Warren Gillie</h5>
                        <small className="d-block text-center">Edinburg, Texas</small>
                    </div>
                </div>
                <div className="p-2 m-2 bg-light">
                    <div className="carousel_style_css">
                        <img style={{width: '100%', height: 'auto', borderRadius: '20px'}} src={artificialTurfPebbles} alt="" />
                        <h4 className="text-center pt-3">Artificial Turf, Pebbles and Pavers in Weslaco Residence</h4>
                        <Rate className="d-block text-center text-black my-3" disabled defaultValue={5} />
                        <p className="text-center">RGV Turf carries out the contract to a high professional standard. Many thanks for a very good job.</p>
                        <h5 className="text-center text-dark">Diane Morales</h5>
                        <small className="d-block text-center">Edinburg, Texas</small>
                    </div>
                </div>
                <div className="p-2 m-2 bg-light">
                    <div className="carousel_style_css">
                        <img style={{width: '100%', height: 'auto', borderRadius: '20px'}} src={artificialTurffor} alt="" />
                        <h4 className="text-center pt-3">Artificial Turf for AVANCE Children&apos;s Center Rio Grande Valley</h4>
                        <Rate className="d-block text-center text-black my-3" disabled defaultValue={5} />
                        <p className="text-center">RGV Turf carries out the contract to a high professional standard. Many thanks for a very good job.</p>
                        <h5 className="text-center text-dark">John M.</h5>
                        <small className="d-block text-center">Rio Grande Valley, Texas</small>
                    </div>
                </div>
            </Carousel>
        </div>
        </>
    );
};

export default CarouselComponents;