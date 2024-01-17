import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/FInal_Logo-1.webp';
import secondLogo from '../../assets/spanish_lang.webp';
import fbIcon from '../../assets/SocialIcon/facebook.png'
import inIcon from '../../assets/SocialIcon/instagram.png'
import piIcon from '../../assets/SocialIcon/pinterest.png'
import twIcon from '../../assets/SocialIcon/twitter.png'
// import { Button, Drawer } from 'antd';
import { Drawer } from 'antd';
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';


const Header = () => {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    // box-shadow: 0px 2px 3px red;

    return (
        <section style={{boxShadow: '0px 1px 5px gray'}}>
            <div className="container">
                <div className='d-none d-sm-none d-md-none d-lg-none d-xl-block'>
                    <div className='navigation_style'>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/shop-turf'}>Shop Turf</Link>
                        <Link to={'/shop-plants'}>Shop Plants</Link>
                        <Link to={'/services'}>Services</Link>
                        <Link to={'/'}><img src={logo} alt="RFG" /></Link>
                        <Link to={'/modeling'}>Modeling</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/calculator'}>Calculator</Link>
                        <Link to={'/faqs'}>FAQs</Link>
                        <Link className='header_button_style' to={'/contact-us'}>Contact Us</Link>
                    </div>
                </div>
                {/* Mobile Naviagetion __________________________________________________________ */}
                <div className="d-sm-block d-md-block d-lg-block d-xl-none">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='mobile_navigation'>
                            <div className='d-flex align-items-center'>
                                <div className='pe-4'>
                                    <MenuOutlined  style={{ fontSize: '36px' }}  onClick={showDrawer}/>
                                    <Drawer title="Mobile Menu" placement="left" onClose={onClose} open={open}>
                                        <div className='mobile_menu_nav_link'>
                                            <Link  onClick={onClose} to={'/'}><img style={{width: '200px', height: 'auto'}} src={logo} alt="RFG" /></Link>
                                            <Link  onClick={onClose} to={'/'}>Home</Link>
                                            <Link  onClick={onClose} to={'/shop-turf'}>Shop Turf</Link>
                                            <Link  onClick={onClose} to={'/shop-plants'}>Shop Plants</Link>
                                            <Link  onClick={onClose} to={'/services'}>Services</Link>
                                            <Link  onClick={onClose} to={'/modeling'}>Modeling</Link>
                                            <Link  onClick={onClose} to={'/about'}>About</Link>
                                            <Link  onClick={onClose} to={'/calculator'}>Calculator</Link>
                                            <Link  onClick={onClose} to={'/faqs'}>FAQs</Link>
                                            <Link  onClick={onClose} className='btn btn-sm border' to={'/contact-us'}>Contact Us</Link>
                                            <Link onClick={onClose} to={'/'}><img style={{width: '120px', height: 'auto'}} src={secondLogo} alt="RFG" /></Link>
                                        </div>
                                    </Drawer>
                                </div>
                                <div className='mobile_menu_innerdiv '>
                                    <Link to={'/'}><img src={logo} alt="RFG" /></Link>
                                </div>
                            </div>
                        </div>
                        {/* Icon List ___________________________ */}
                        <div>
                            <a className='px-1' target='_blank' rel='noreferrer' href="https://www.facebook.com/rgvturf"><img src={fbIcon} alt="" /></a>
                            <a className='px-1' target='_blank' rel='noreferrer' href="https://www.instagram.com/rgvturf/"><img src={inIcon} alt="" /></a>
                            <a className='px-1' target='_blank' rel='noreferrer' href="https://www.pinterest.com/rgvturf/"><img src={piIcon} alt="" /></a>
                            <a className='px-1' target='_blank' rel='noreferrer' href="https://twitter.com/rgvturf"><img src={twIcon} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;