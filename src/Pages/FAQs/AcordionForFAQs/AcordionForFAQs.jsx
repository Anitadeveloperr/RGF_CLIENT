// import React from 'react';
import './AcordionForFAQs.css'
import { Accordion } from "react-bootstrap";

const AcordionForFAQs = () => {
    return (
        <section className="py-4 fac_acordion_section" style={{backgroundColor: 'rgb(234,239,228)'}}>
            <div className="container">
                <div className="py-4">
                    <h1 className="text-center fw-bold fs-2">Most commonly asked questions about Turf</h1>
                    <p className="text-center ">If you’re thinking about installing artificial grass in your home or have already done so, you may be interested in learning more about the advantages and facts associated with this growingly popular choice. Here are a few key points to keep in mind about artificial grass: Read the questions below and click the “+” symbol to reveal the answers.</p>
                </div>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What Exactly is Artificial Turf?</Accordion.Header>
                        <Accordion.Body>
                        Artificial turf is a surface of synthetic fibers made to look like natural grass. It even comes in different blade lengths and widths, colors and textures, like real grass, so you can choose the look you like.Artificial turf 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Where Can I Use Artificial Grass?</Accordion.Header>
                        <Accordion.Body>
                        Anywhere you’d have real grass. It’s most often used in sports arenas but is great for playgrounds; dog runs; golf courses; putting greens; driving ranges; athletic fields; areas with high traffic; or where cost concerns prevent natural grass from being used.br <br /> Now artificial grass is moving into neighborhoods — an increasingly popular choice for homeowners ready to hang up the mower, retire their sprinklers, and put away the fertilizer for good. <br />Artificial turf installation is great for commercial properties, too, where owners or property managers want a great-looking lawn with curb appeal — and no maintenance worries.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What is the average cost to have Turf installed?</Accordion.Header>
                        <Accordion.Body>
                        The cost of turf installation varies depending on the existing surface. If the floor is concrete, the average cost ranges between $4 and $7 per square foot. If you were adding turf to an area with dirt or existing dead grass, the cost would be between $8 and $12 per square foot.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How long does an install take?</Accordion.Header>
                        <Accordion.Body>
                        Depending on the turf you choose to go with, will determine whether or not we have that turf in stock, or it needs to be ordered. If a turf product needs to be ordered, then your job will be completed within two weeks or less from the time we begin. The actual project time varies based on ft2 however, most jobs under 1500 ft2 can be completed within a few days.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Do you offer a warranty?</Accordion.Header>
                        <Accordion.Body>
                        If we install the turf, we offer a 10 year warranty on all parts and labor. If you install it yourself or with another company, the turf comes with a 30 day replacement warranty.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>How Do You Maintain Artificial Turf?</Accordion.Header>
                        <Accordion.Body>
                        It’s pretty easy.
                        <ul>
                            <li>Remove dirt and debris with a blower, brush, or sweeper.</li>
                            <li>Groom the grass with a plastic leaf rake, stiff- bristled push broom, or power broom to help keep grass looking fresh. Pull the broom against the lay of the turf to lift the blades.</li>
                            <li>Rinse the turf with water. An occasional rinse with water will keep the grass clean.</li>
                        </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Is Artificial Grass Safe?</Accordion.Header>
                        <Accordion.Body>
                        Materials used in artificial turf are non-toxic to humans and animals. Any rubber infill is non-toxic, too, and won’t harm children or pets if swallowed.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Does Fake Grass Get Too Hot in the Summer?</Accordion.Header>
                        <Accordion.Body>
                        It does get hotter than natural surfaces like grass and dirt under direct sunlight, but it cools down quickly and stays cool under shade or cloud cover. <br /> Some homeowners opt to leave their irrigation system in place, so they can turn it on occasionally to cool off the turf.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>Is Artificial Grass Safe for Children?</Accordion.Header>
                        <Accordion.Body>
                        Artificial grass has recently become popular in playgrounds and parks. <br /> As it’s so new, many parents wonder if this playing surface is safe for their kids. <br /> Unbeknownst to many, the pesticides, weed killers, and fertilizers routinely used in natural grass lawns contain toxins and carcinogens that are harmful to children. <br /> Artificial grass needs none of these chemicals and is safe for children and pets, making it perfect for kid-friendly landscaping. <br /> Modern artificial turf is manufactured without lead or other toxins (ask your artificial turf retailer if you have specific concerns). <br /> It’s also hypo-allergenic, which makes outdoor play a lot more fun for kids with seasonal allergies.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>Does Water Drain Through Fake Grass?</Accordion.Header>
                        <Accordion.Body>
                        Yes. It’s perforated throughout to allow for water to flow through into the drainage base underneath.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                        <Accordion.Header>Artificial Turf for Dogs: Is Fake Grass Pet-Friendly?</Accordion.Header>
                        <Accordion.Body>
                        Yes. Some artificial turf manufacturers carry a turf designed specifically for dogs, with extra features like a flow-through backing for maximum drainage and antimicrobial technology built into the blades. <br />But even the regular artificial turf products are safe for dogs. <br /> Dog urine can be easily washed out of the turf to maintain a clean surface.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11">
                        <Accordion.Header>Will My Dog Damage Artificial Grass?</Accordion.Header>
                        <Accordion.Body>
                        The popularity of fake grass for dogs is due in large part to how easy it is to maintain and how durable it is. <br /> As long as you choose a quality product designed with pets in mind, artificial grass stands up to heavy foot/paw traffic, prevents dogs from digging, and won’t end up covered with brown dog urine spots. <br /> The durability, low maintenance, and high ROI of manufactured grass is evident in its popularity amongst dog parks, veterinarians, and pet-care facilities.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="12">
                        <Accordion.Header>What If I Spill Something on Artificial Turf?</Accordion.Header>
                        <Accordion.Body>
                        Artificial turf is made of non-absorbent materials, so you can clean up most spills without staining. <br /> Clean as much of the spill as possible with a clean rag first. <br />Water, a mild detergent, and in some cases a stiff-bristled nylon brush, can be used to clean most spills.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="13">
                        <Accordion.Header>Can Artificial Turf Be Safely Installed Over a Septic System Drain Field?</Accordion.Header>
                        <Accordion.Body>
                        Yes. You can pull the turf back, pull the base back, fix a water main or a septic tank, and put the base back and reinstall the turf.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="14">
                        <Accordion.Header>Can I Do Artificial Turf Installation Myself?</Accordion.Header>
                        <Accordion.Body>
                        While the steps for artificial turf installation are pretty straightforward, things can go wrong if you haven’t done this before. <br /> Stretching the turf, matching the seams, and cutting around trees and other objects is tricky. <br /> Any lumps, bumps, mismatched seams, or ragged edges will make it obvious that it’s not real turf. <br />Hire a reputable, experienced installer, and they’ll stand behind their work and be available if you experience any problems.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="15">
                        <Accordion.Header>Can you Install Fake Grass on Concrete?</Accordion.Header>
                        <Accordion.Body>
                        Definitely. <br />Fake grass is extremely versatile, and it can even be installed on hard surfaces like a deck or patio. <br />Installing synthetic grass on concrete is actually easier than installing it on dirt or soil, as the even surface eliminates a lot of the labor-intensive prep work that’s necessary for smoothing out the ground.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="16">
                        <Accordion.Header>Can You Install Artificial Grass on an Oddly Shaped Lawn?</Accordion.Header>
                        <Accordion.Body>
                        Can You Install Artificial Grass on an Oddly Shaped Lawn? <br />Whether your lawn is shaped like a square, circle, hexagon, or amoeba, you can install artificial grass on it! <br />Synthetic turf is extremely versatile and can be installed on pretty much any shape you can imagine. <br />Much like carpet, strips of fake grass can be cut to size then joined using joining tape and adhesive. <br />Cutting and installing artificial grass in odd-shaped areas can be a bit tricky, so we recommend working with a professional turf installer to do this.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="17">
                        <Accordion.Header>How Much Maintenance Does Fake Grass Require?</Accordion.Header>
                        <Accordion.Body>
                        Not much. <br />Maintaining fake grass is a cakewalk compared to natural grass maintenance, which requires a significant amount of time, effort, and money. <br />Fake grass is not maintenance-free, however. <br />To keep your lawn looking its best, plan on removing solid debris (leaves, branches, solid pet waste) once a week or so. <br />Spraying it off with a hose twice a month will rinse off any pet urine and dust that might accumulate on the fibers. <br />To prevent matting and lengthen the life of your artificial grass, have it brushed with a power broom once a year. <br />Depending on the foot traffic to your yard, you may also need to replenish the infill about once a year. <br />Keeping your fake grass well supplied with infill helps the fibers stand up straighter and protects the grass’s backing from sun damage.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="18">
                        <Accordion.Header>Is Artificial Turf Easy to Clean?</Accordion.Header>
                        <Accordion.Body>
                        A rinse with the hose is great for routine, weekly cleaning of your synthetic turf, but occasionally your yard may need a more thorough, heavy-duty clean. <br />You can purchase an antimicrobial, deodorizing cleaner designed for artificial grass (such as Simple Green or Turf Renu), or opt for more natural cleansers such as baking soda and vinegar. <br />Do NOT attempt to vacuum your artificial grass if it has infill; this will ruin your vacuum very quickly
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="19">
                        <Accordion.Header>Will Artificial Grass Stain or Fade?</Accordion.Header>
                        <Accordion.Body>
                        Cheap, low-quality artificial grass products will stain easily and will fade quickly in the sun. <br />High-quality turf products include UV inhibitors that are added to the fibers to prevent fading, keeping your grass green for years to come. <br />While a very small amount of fading can still occur over a long period of time, reputable companies will offer a warranty that covers potential fading.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="20">
                        <Accordion.Header>How Long Does it Take to Install Artificial Grass?</Accordion.Header>
                        <Accordion.Body>
                        The length of the artificial turf installation process will vary depending upon several factors: the area of the installation, the prep work needed to flatten the lawn, the site’s location, accessibility, etc. <br />On average, most residential projects can be completed in 1-3 days.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="21">
                        <Accordion.Header>How Long Does Artificial Grass Last?</Accordion.Header>
                        <Accordion.Body>
                        The life expectancy of modern artificial grass is about 15 to 25 years. <br />How long your artificial grass lasts will depend largely on the quality of turf product you choose, how well it’s installed, and how well it’s cared for. <br />To maximize the lifespan of your grass, take care to hose it down to remove dust or pet urine, power brush it periodically, and keep the grass supplied with infill.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="22">
                        <Accordion.Header>Will Installing Artificial Grass Increase my Property Value?</Accordion.Header>
                        <Accordion.Body>
                        A common artificial grass misconception is that it will decrease your home’s value. <br />That couldn’t be further from the truth. <br />One of the biggest advantages of artificial grass is that swapping out your natural grass for fake grass will boost your home’s value, both actual and perceived. <br />Since it looks green and gorgeous whatever the weather, artificial grass will give you unmatched curb appeal. <br />On average, homes with great curb appeal sell for 7% more than those without. <br />Whether you’re selling your house soon or just hedging your bets, a synthetic lawn will make your home more valuable.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="23">
                        <Accordion.Header>Do Your Turf Products Contain Lead or Other Heavy Metals?</Accordion.Header>
                        <Accordion.Body>
                        No. Our synthetic turf products contain no detectable traces of lead or other RCRA hazardous waste heavy metals.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="24">
                        <Accordion.Header>Do you offer free estimates?</Accordion.Header>
                        <Accordion.Body>
                        Yes, we offer free estimates both on-site and remotely, “if” your property is established on mapping systems such as Google earth, Google maps or Bing maps.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="25">
                        <Accordion.Header>Do you offer free estimates?</Accordion.Header>
                        <Accordion.Body>
                        Turf’s synthetic grass surfaces allow you to conserve water while eliminating often-toxic fertilizers and pesticides. You’ll also see reductions in your maintenance and lawn equipment expenses. Our lawns are perfect for family activities, pet play areas, personal putting greens, and, well, just about anything else you can imagine.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="26">
                        <Accordion.Header>How do I know if my property is suitable for synthetic grass?</Accordion.Header>
                        <Accordion.Body>
                        If you have property, it’s suitable for artificial grass. Artificial grass has been installed everywhere from large NFL stadiums and pet care facilities down to small, personal putting greens, personal poolside lounging areas, and suburban backyards. Turf can be installed on any existing landscape and can even be applied to concrete. The possibilities are endless. if you are still unsure reach out to one of our experts and we will happily answer all your compatibility questions.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="27">
                        <Accordion.Header>What is artificial turf made of?</Accordion.Header>
                        <Accordion.Body>
                        This product is typically created with a blend of polypropylene and polyethylene, which is made into synthetic fibers to look like natural grass. The fibers are then joined with rubber granules and silica sand to help keep the blades upright.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="28">
                        <Accordion.Header>Is there a difference between different synthetic turf products?</Accordion.Header>
                        <Accordion.Body>
                        Yes, there is a difference in products. When researching products, check if the product meets the minimum standards for development, as determined by the guidelines from the Synthetic Turf Council. There are also many different kinds of turf. Lawns created specifically for residential use have softer and more natural blades, while sports fields utilize different terrain.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="29">
                        <Accordion.Header>I thought artificial grass was just for sports fields. Can you really put it on residential lawns?</Accordion.Header>
                        <Accordion.Body>
                        Synthetic turf got its start on professional athletic fields, but newer products are perfect for residences. Homeowners love this product because it stays consistently beautiful without the hassle of upkeep. The lawns also conserve water.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="30">
                        <Accordion.Header>Is synthetic grass safe for the environment?</Accordion.Header>
                        <Accordion.Body>
                        Yes, an artificial lawn is completely safe for the environment. This product is made using environmental-friendly standards and helps conserve water.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="31">
                        <Accordion.Header>is Turf suitable for rooftop applications?</Accordion.Header>
                        <Accordion.Body>
                        We have installed numerous rooftops with excellent success. It’s a great way to make an ugly area beautiful and useable.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="32">
                        <Accordion.Header>What goes under artificial grass?</Accordion.Header>
                        <Accordion.Body>
                        There are several materials that make a suitable base for artificial grass.  we primarily use a specialty crushed rock. Depending on the project, it can also include weed and mole barriers, drainage tiles or fall padding. <br />Because conditions can vary, we consider the location, the property’s topography, drainage conditions, intended use (residential, commercial, golf green, playground, etc.) and more. Our professional turf installers will evaluate your unique space to determine the best base materials for your project. <br />Starting your Synthetic Turf system off with the right foundation is crucial. It supports your turf, encourages proper drainage and keeps your artificial grass looking its best in addition to increasing its longevity.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="33">
                        <Accordion.Header>Return on Investment Analysis for Artificial Grass Investment</Accordion.Header>
                        <Accordion.Body>
                        The purpose of this report is to provide a detailed analysis of the timeframe required to achieve a return on investment (ROI) when purchasing and installing artificial grass. Artificial grass offers several benefits, including reduced maintenance costs, water savings, and enhanced aesthetics. By examining the initial investment, ongoing savings, and expected lifespan of artificial grass, we can determine the timeline for recovering the upfront expenses.
                        <ol>
                            <li>Initial Investment: The first consideration in evaluating ROI is the initial investment required for artificial grass installation. This encompasses the cost of materials, labor, and any additional groundwork or preparation. The specific costs may vary depending on factors such as the size of the area, quality of the grass, and regional pricing. It is crucial to gather accurate quotes from reputable suppliers and installers to determine the precise initial investment.</li>
                            <li>Savings on Water and Maintenance: One of the primary advantages of artificial grass is the reduction in water consumption and maintenance expenses. Natural grass requires regular watering, mowing, fertilizing, and pest control, all of which contribute to ongoing costs. With artificial grass, these requirements are significantly minimized or eliminated altogether. By estimating the average monthly savings on water bills and maintenance services, we can determine the cumulative amount saved over time.</li>
                            <li>Lifespan and Durability: Artificial grass typically has a lifespan of 15 to 25 years, depending on the quality of the product and the level of foot traffic it receives. The longevity of the artificial grass plays a crucial role in calculating ROI. By assessing the expected lifespan and factoring in any potential repairs or replacements, we can determine the overall value and extended savings over the years.</li>
                            <li>Return on Investment Calculation: To calculate the ROI, we need to consider the initial investment, ongoing savings, and the expected lifespan of artificial grass. The formula for ROI is as follows:</li>
                        </ol>
                        ROI = (Cumulative Savings – Initial Investment) / Initial Investment * 100 <br /> By substituting the values derived from the analysis, we can determine the percentage ROI and the time required to recoup the initial investment. <br />Conclusion: The return on investment for artificial grass installation depends on various factors such as the initial investment, ongoing savings, and the lifespan of the product. Through a comprehensive analysis of these elements, we can determine the timeline for achieving ROI. It is important to note that individual circumstances and specific regional factors may influence the results. However, artificial grass generally offers a compelling long-term value proposition, leading to significant savings over time.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="34">
                        <Accordion.Header>What type of maintenance does artificial grass require?</Accordion.Header>
                        <Accordion.Body>
                        Artificial grass offers a low-maintenance alternative to natural grass, requiring less time, effort, and resources to keep it looking pristine. Here are some key maintenance considerations for artificial grass:
                        <ol>
                            <li>Regular Brushing: Periodically brushing the artificial grass helps to keep the fibers upright and maintain an even appearance. This can be done using a stiff-bristled broom, a power brush, or a specialized artificial grass rake.</li>
                            <li>Leaf and Debris Removal: While artificial grass is less prone to accumulating leaves and debris compared to natural grass, occasional removal is still necessary. Use a leaf blower, rake, or simply handpick any fallen leaves, twigs, or other debris that may have settled on the surface.</li>
                            <li>Cleaning Spills and Stains: Accidental spills or stains can occur on artificial grass, especially if it is used for recreational activities or has pets around. Promptly clean up any spills, including food, drinks, or pet waste, using a mild detergent mixed with water. Rinse the affected area thoroughly with clean water.</li>
                            <li>Weed Control: One of the significant advantages of artificial grass is that it greatly reduces weed growth. However, occasional weed seeds or airborne debris may find their way onto the surface. Regularly inspect the area for any emerging weeds and remove them manually or use an appropriate weed killer if necessary.</li>
                            <li>Pet Waste Management: If you have pets, promptly remove solid waste from the artificial grass and rinse the area with water to maintain cleanliness. For liquid waste, artificial grass is designed to allow for proper drainage, but occasional rinsing may be necessary to minimize any odors.</li>
                            <li>Managing Odors: While artificial grass itself does not retain odors, bacterial growth can cause unpleasant smells over time, particularly in areas with high pet usage. To prevent this, rinse the affected area with a solution of water and vinegar or use specialized artificial grass deodorizers as recommended by the manufacturer.</li>
                            <li>Seasonal Maintenance: Depending on the climate and usage, it may be necessary to perform occasional seasonal maintenance. This can include fluffing the fibers, inspecting the infill (if applicable) for proper distribution and replenishing if necessary, and checking for any signs of wear or damage.</li>
                        </ol>
                        <br />
                        It’s important to note that specific maintenance requirements may vary based on the type and quality of artificial grass, as well as environmental factors. Therefore, it is recommended to consult the manufacturer’s guidelines and recommendations for your particular artificial grass product to ensure proper maintenance and longevity.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </section>
    );
};

export default AcordionForFAQs;