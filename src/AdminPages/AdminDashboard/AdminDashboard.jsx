// import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logoImage from '../../assets/FInal_Logo-1.webp';
import './AdminDashboard.css';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.config'
import { Spin } from 'antd';
import { useAuthState } from 'react-firebase-hooks/auth';

const AdminDashboard = () => {// Get data use auth state
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    if(loading){
        return <Spin/>
      } 

    // Sign Out Function _______________________________________
    const singOutButton = () => {
        signOut(auth);
        navigate('/')
      }
    
    return (
        <div className='py-md-4'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 bg-light dashboard_lift_style">
                        <img className='mx-auto' style={{height: '70px', width: 'auto'}} src={logoImage} alt="" />
                        <div className='py-3'>
                            {
                                user && <button className='fw-bold' onClick={singOutButton}>Sing Out</button>
                            }
                            <Link to={'/dashbord/add-product'} className='d-block fw-bold my-2 border p-2 dashboard_link_style'>Add Product</Link>
                            <Link to={'/dashbord/add-modeling-image'} className='d-block fw-bold my-2 border p-2 dashboard_link_style'>Modeling Images</Link>
                            <Link to={'/dashbord/manage-product'} className='d-block fw-bold my-2 border p-2 dashboard_link_style'>Manage Product</Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <h2 className="text-center fs-4 fw-bold bg-light py-3">Wellcome to RGF Admin Dashbord</h2>
                        <div className='py-4'>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;