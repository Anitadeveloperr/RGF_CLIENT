// import React from 'react';
import './Section4.css'
import { GiHighGrass } from "@react-icons/all-files/gi/GiHighGrass";
import { GiHolyWater } from "@react-icons/all-files/gi/GiHolyWater";
import { GiCrescentStaff } from "@react-icons/all-files/gi/GiCrescentStaff";
import { GiGreenhouse } from "@react-icons/all-files/gi/GiGreenhouse";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FaHandPaper } from "@react-icons/all-files/fa/FaHandPaper";

const Section4 = () => {
    return (
        <section id="landingPageSection4" className='pb-5 pt-2'>
            <div className="container">
                <div className="row gx-2">
                    <div className="col-md-4">
                        <div className='section4_card_hover p-3 p-md-4'>
                            <GiHighGrass style={{width: '60px', height: 'auto', color: '#6c757d'}} />
                            <h3 className='fw-bold text-secondary py-2'>No More Mowing</h3>
                            <p className='text-secondary'>Feeling inundated by the demands of maintaining your lawn in McAllen, Texas? Artificial turf offers a hassle-free alternative, obviating the necessity for lawnmowers, irrigation systems, and ongoing maintenance. Benefits of Synthetic Lawns in McAllen: Space Optimization: Bid farewell to cluttered storage sheds; artificial grass necessitates no upkeep equipment. Budget-Friendly: Put an end to recurring lawn care expenses; savor the benefits of a one-time investment for enduring aesthetic appeal. Environmentally Conscious: Preserve precious water resources in McAllen with its zero watering prerequisites. Artificial turf in McAllen embodies simplicity, cost-effectiveness, and ecological responsibility.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='section4_card_hover p-3 p-md-4'>
                            <GiHolyWater style={{width: '60px', height: 'auto', color: '#6c757d'}} />
                            <h3 className='fw-bold text-secondary py-2'>Wasted Watering Cost</h3>
                            <p className='text-secondary'>Join South Texas homeowners switching to artificial grass. Conserve water, cut costs, and enjoy eco-friendly, beautiful lawns year-round. South Texas homeowners are adopting artificial grass, crucial in our water-scarce region. Why the switch? Water Conservation: No watering needed, significantly reducing your utility bills and helping preserve our vital water supplies. Eco-Friendly Choice: Show your commitment to sustainability by reducing your water footprint, crucial in South Texas&apos;s environmental conservation efforts. Evergreen Beauty: Get a lush, green lawn without compromising on water resources. Artificial grass offers aesthetic appeal plus environmental responsibility.</p>
                        </div> 
                    </div>
                    <div className="col-md-4">
                        <div className='section4_card_hover p-3 p-md-4'>
                            <FaHandshake style={{width: '60px', height: 'auto', color: '#6c757d'}} />
                            <h3 className='fw-bold text-secondary py-2'>Lush in an Instant</h3>
                            <p className='text-secondary'>Quick Artificial Turf Solutions in South Texas: South Texas homeowners and small businesses, simplify your landscaping with artificial turf. Skip the wait and effort of traditional lawns. Professional services can revamp your outdoor areas in days, installing 300-500 square feet of durable, realistic artificial grass efficiently. DIY enthusiasts can also embrace this straightforward project, enjoying a maintenance-free, eco-friendly lawn alternative perfect for South Texas&apos;s climate. Ideal for various properties, artificial turf offers consistent beauty with zero hassle. Upgrade to a sustainable, evergreen lawn with South Texas&apos;s artificial turf experts. Transform your space with ease today!</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='section4_card_hover p-3 p-md-4'>
                            <FaHandPaper style={{width: '60px', height: 'auto', color: '#6c757d'}} />
                            <h3 className='fw-bold text-secondary py-2'>Allergen Abatement</h3>
                            <p className='text-secondary'>Allergy-Free Artificial Greenery for South Texas Properties: Combat grass allergies in South Texas with artificial lawns. Our hypoallergenic turf eliminates runny noses and itchy eyes, enhancing comfort for homeowners and businesses. Plus, explore our realistic, maintenance-free artificial plants, reducing allergens and insects. Revitalize your space with health-conscious, synthetic landscaping solutions. Contact us for more on creating a beautiful, allergy-friendly environment in South Texas.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='section4_card_hover p-3 p-md-4'>
                            <GiCrescentStaff style={{width: '60px', height: 'auto', color: '#6c757d'}} />
                            <h3 className='fw-bold text-secondary py-2'>Tough Stuff</h3>
                            <p className='text-secondary'>Sturdy Artificial Turf for Active South Texas Properties: Upgrade your South Texas exteriors with resilient artificial grass. Ideal for high-traffic areas, our synthetic turf stands up to playful kids and pets, maintaining its beauty effortlessly. Artificial grass is a practical choice for professionals and families alike, combining aesthetics with durability. Embrace a perpetual green, safe play space with our superior, easy-care solutions. Contact us for bespoke synthetic lawn options fit for South Texas&apos;s dynamic lifestyle.</p>
                        </div> 
                    </div>
                    <div className="col-md-4">
                        <div className='section4_card_hover p-3 p-md-4'>
                            <GiGreenhouse style={{width: '60px', height: 'auto', color: '#6c757d'}} />
                            <h3 className='fw-bold text-secondary py-2'>Staying Green</h3>
                            <p className='text-secondary'>Upgrade to Eco-Friendly Artificial Turf in South Texas: Elevate your South Texas property with artificial turf. This landscaping choice eliminates toxic chemicals, reduces waste by eliminating the need for mowing, watering and weeding. Perfect for eco-conscious homeowners and businesses, synthetic grass conserves vital resources, including water, crucial in South Texas. Discover an eco-friendly, visually appealing transformation with our artificial turf solutions, benefiting both your property and the local environment. Contact us to explore the SEO-friendly advantages of transitioning to artificial grass in South Texas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;