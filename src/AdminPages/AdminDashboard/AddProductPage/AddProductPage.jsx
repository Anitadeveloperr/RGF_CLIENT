/* eslint-disable no-unused-vars */
// import React from 'react';
import './AddProductPage.css'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Select, Spin } from 'antd';
import axios from 'axios';
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import toast, { Toaster } from 'react-hot-toast';
import demoImage from '../../../assets/free-gallery-187-902099.webp'
import { useNavigate } from 'react-router-dom';



const AddProductPage = () => {

    const navigate = useNavigate()
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');

    

    const [imagePath, setImagePath] = useState('');
    const [fileName, setFileName] = useState('')
    const [loading, setLoading] = useState(false)
    const imageUpload = (e) => {
        setLoading(true)
        const formData = new FormData();
        formData.append('file', e[0])
        axios.post('https://rgf.onrender.com/productImage', formData)
            .then(res => {
                setFileName(res.data.imagePath.filename)
                setImagePath(res.data.imagePath.path)
                setLoading(false)
            })
            .catch(er => console.log(er))
    }
    // Delete Image ___________________
    const deleteImage = () => {
        axios.delete(`https://rgf.onrender.com/productImageDelete/${fileName}`)
            .then(res => {
                console.log('Delete Image Response', res)
                setImagePath('')
            })
            .catch(er => console.log(er))
    }

    // Post Request ______________________________
    // productCatelog
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const img = imagePath;
        const formData = {...data, img, category, subCategory, fileName}
        console.log(formData)

        axios.post(`https://rgf.onrender.com/products`, formData)
            .then(res => {
                    toast.success('Succesfully Post Updated')
                    reset()
                    setImagePath('')
            })
            .catch(er => console.log(er))
    };

    return (
        <>
            <h4 className="border-bottom pb-2">Add Product</h4>
            <form className="add_product_form" onSubmit={handleSubmit(onSubmit)}>
                <input type='text' className="fw-bold" placeholder="Product Title" name="ProductTitle" {...register("ProductTitle", { required: true })} />
                <textarea size="large" rows={4} placeholder="Product Description" {...register("ProductDescription", { required: true })} />
                <h6 className="pt-2">Product Category</h6>
                <div className="row g-md-2">
                    <div className="col-md-6">
                        <Select
                            placeholder="Select Category"
                            className="me-md-2"
                            size="large"
                            style={{
                                width: '100%',
                            }}
                            onChange={e => setCategory(e)}
                            options={[
                                {value: 'Shop Turf',label: 'Shop Turf',},
                                {value: 'Shop Plants',label: 'Shop Plants',},
                            ]}
                        />
                    </div>
                    <div className="col-md-6">
                        {
                            category == 'Shop Turf' && <Select
                                placeholder="Select Shop Turf Sub Category"
                                size="large"
                                style={{
                                    width: '100%',
                                }}
                                onChange={e => setSubCategory(e)}
                                options={[
                                    {value: 'Residential-Commercial Landscape',label: 'Residential Commercial Landscape',},
                                    {value: 'Sport and Athletic',label: 'Sport and Athletic',},
                                    {value: 'Childrens Play Areas',label: 'Childrens Play Areas',},
                                    {value: 'Kennels and Pets',label: 'Kennels and Pets',},
                                    {value: 'Golf and Putting Zones',label: 'Golf and Putting Zones',},
                                ]}
                            />
                        }
                        {
                            category == 'Shop Plants' && <Select
                                // {...register("SubCategory", { required: true })} 
                                placeholder="Select Shop Plants Sub Category"
                                size="large"
                                style={{
                                    width: '100%',
                                }}
                                onChange={e => setSubCategory(e)}
                                options={[
                                    {value: 'Bushes And Shrubs',label: 'Bushes And Shrubs',},
                                    {value: 'Cactus',label: 'Cactus',},
                                    {value: 'Cypress trees',label: 'Cypress trees',},
                                    {value: 'Flowers Arrangements',label: 'Flowers Arrangements',},
                                    {value: 'Trees And Palms',label: 'Trees And Palms',},
                                ]}
                            />
                        }
                    </div>
                    <div className="row pt-3 g-md-2">
                        <div className="col-md-8">
                            <h5>Product Detail Information</h5>
                            <div className="row">
                                {/* Input Deatails Information For Shop Plants Products ____________________________ */}
                                {
                                    category == 'Shop Turf' && <>
                                        <div className="col-md-6">
                                            <input {...register("YarnType")} className='mb-2' placeholder="Yarn Type" />
                                            <input {...register("Weight")} className='mb-2' placeholder="Weight" />
                                            <input {...register("SecondaryBacking")} className='mb-2' placeholder="Secondary Backing" />
                                            <input {...register("Pile_Height")} className='mb-2' placeholder="Pile Height" />
                                        </div>
                                        <div className="col-md-6">
                                            <input {...register("RollWidth")} className='mb-2' placeholder="Roll Width" />
                                            <input {...register("Perforated")} className='mb-2' placeholder="Perforated" />
                                            <input {...register("Color")} className='mb-2' placeholder="Color" />
                                            <input {...register("PDFSpecSheet")} className='mb-2' placeholder="PDF Spec Sheet" />
                                        </div>
                                    </>
                                }
                                {/* Input Deatails Information For Shop Plants Products ____________________________ */}
                                {
                                    category == 'Shop Plants' && <>
                                        <div className="col-md-6">
                                            <input {...register("Product_Code")} className='mb-2' placeholder="Product code" />
                                            <input {...register("UPC")} className='mb-2' placeholder="UPC" />
                                            <input {...register("ItemsPerPack")} className='mb-2' placeholder="Items per pack" />
                                            <input {...register("DominantColor")} className='mb-2' placeholder="Dominant color" />
                                            <input {...register("PottedOrBaseIncluded")} className='mb-2' placeholder="Potted or base included" />
                                        </div>
                                        <div className="col-md-6">
                                            <input {...register("WeightOfEachItem")} className='mb-2' placeholder="Weight of each item" />
                                            <input {...register("WeightOf1pack")} className='mb-2' placeholder="Weight of 1 pack" />
                                            <input {...register("ShippingBoxSize")} className='mb-2' placeholder="Shipping box size" />
                                            <input {...register("ShippingDimensionalWeight")} className='mb-2' placeholder="Shipping dimensional weight" />
                                            <input {...register("OversizedFreightShipping")} className='mb-2' placeholder="Oversized freight shipping" />
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4>Select Product Image</h4>
                            <div className='border'>
                                <div style={{height: '200px'}} className='p-2 overflow-hidden imageBoxBackground'>
                                    {
                                        loading && <Spin/>
                                    }
                                    {
                                        !imagePath && <img style={{height: '200px', weight: 'auto'}} src={demoImage} alt="" />
                                    }
                                    {
                                        imagePath && <img style={{height: '200px', weight: 'auto'}} src={`https://rgf.onrender.com/${imagePath}`} alt="" />
                                    }
                                    {
                                        imagePath && <FaRegTrashAlt onClick={() => deleteImage()} className='deleteIcon'/>
                                    }
                                </div>
                                <div className="border p-2">
                                    <input type="file" name='image' onChange={e => imageUpload(e.target.files)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit">Publish</button>
            </form>
            <Toaster />
        </>
    );
};

export default AddProductPage;