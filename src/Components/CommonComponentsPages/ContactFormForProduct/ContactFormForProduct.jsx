/* eslint-disable no-unused-vars */
// import {useLocation} from 'react';
import axios from 'axios';
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './ContactFormForProduct.css'

const ContactFormForProduct = () => {

    const [captchaValue, setCaptchaValue] = useState('');
    const [captchaError, setCaptchaError] = useState('');
    const navigate = useNavigate()

    // const link = useLocation()


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {  
        toast.success('Email Send.!', {
            duration: 3000,
            position: 'top-right'
        });
            reset()
            setCaptchaError('')
            const productLink = window.location.href;
            const formData = {...data, productLink}
            console.log("formData", formData);
        if(captchaValue == 'Z37Q'){
            await axios.post('https://rgf.onrender.com/productContactForm', formData).then(res => {})
            return navigate('/')
            
        }else{
            setCaptchaError('Please Fell the Captch with Righ Text')
        }
    };
    return (
        <div className='contactFormProduct'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p className='m-0 p-0 text-secondary'>Your Name</p>
                <input  className="contact_form_input mt-1 d-block" type='text' {...register("yourName", { required: true })} />
                {errors.yourName && <span className='text-danger'>Name field is required</span>}
                <p className='mt-3 mb-0 p-0 text-secondary'>Your Email</p>
                <input  className="contact_form_input mt-1 d-block" type='email' {...register("yourEmail", { required: true })} />
                {errors.yourEmail && <span className='text-danger'>Email field is required</span>}
                <p className='mt-3 mb-0 p-0 text-secondary'>Phone</p>
                <input  className="contact_form_input mt-2 d-block" type='text' {...register("phone", { required: true })} />
                {errors.phone && <span className='text-danger'>Phone Required</span>}
                <p className='mt-3 mb-0 p-0 text-secondary'>Amount of sq. ft. needed</p>
                <input  className="contact_form_input mt-2 d-block" type='text' {...register("amount_of_sq_ft_needed", { required: true })} />
                {errors.amount_of_sq_ft_needed && <span className='text-danger'>Amount of sq. ft. needed Required</span>}
                <p className='mt-3 mb-0 p-0 text-secondary'>Shipping address</p>
                <input  className="contact_form_input mt-2 d-block" type='text' {...register("shipping_address", { required: true })} />
                {errors.shipping_address && <span className='text-danger'>Shipping Address Required</span>}
                <div className='captcha_div mt-2'>
                    <p className='bg-white text-black d-inline p-2 fw-bold'>Z 3 7 Q</p><br />
                    <input className='captcha_input' type="text" onChange={(e) => setCaptchaValue(e.target.value)}/>
                    <span className='ms-2 text-danger'>{captchaError}</span>
                </div>
                <button className='contact_form_submit_button' type="submit">Submit</button>
            </form>
            <Toaster />
        </div>
    );
};

export default ContactFormForProduct;