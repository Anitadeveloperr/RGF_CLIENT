import { Spin } from 'antd';
import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
const Footer = React.lazy(() => import('../../Components/Footer/Footer'));

const Home = () => {
    return (
        <>
            <Header/>
            <div>
                <Outlet/>
            </div>
            <Suspense fallback={<div className='d-flex justify-content-center'><Spin/></div>}>
                <Footer/>
            </Suspense>
        </>
    );
};

export default Home;