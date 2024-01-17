/* eslint-disable no-unused-vars */
// import React from 'react';
import './EditProduct.css'
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Select, Spin } from 'antd';
import axios from 'axios';
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import demoImage from '../../../assets/free-gallery-187-902099.webp'

const EditProduct = () => {


    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [fileName, setFileName] = useState('')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`https://rgf.onrender.com/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setCategory(res.data.category);
                setSubCategory(res.data.subCategory);
                setImagePath(res.data.img);
                setFileName(res.data.fileName);
            })
            .catch(er => console.log(er))
    },[])
    // console.log('Product Data', product)
    

    useEffect(() => {
        
    },[])

    const [deletedImg, setDeletedImg] = useState(false)
    const imageUpload = (e) => {
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
        setDeletedImg(true)
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
        if(!data.ProductTitle){
            data.ProductTitle = product.ProductTitle
        }
        if(!data.ProductDescription){
            data.ProductDescription = product.ProductDescription
        }
        const formData = {...data, img, category, subCategory, fileName}

        fetch(`https://rgf.onrender.com/products/${id}`, {
          method: 'PUT',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(formData)
        }).then(res => res.json())
          .then(data => {
            if(data.success){
                console.log(data)
                setProduct('')
                setCategory('');
                setSubCategory('');
                setImagePath('');
                setFileName('');
                toast.success('Succesfully Post Updated')
                reset();
            }
            if(data.error){
              toast.error(`Error ${data.error}`)
            }
          })
    };


    return (
        <>
            <h4 className="border-bottom pb-2">Edit Product</h4>
            <form className="edit_product_form" onSubmit={handleSubmit(onSubmit)}>
                {
                    product && <div>
                    <input defaultValue={product?.ProductTitle} className="fw-bold" placeholder="Product Title" {...register("ProductTitle")} />
                    <textarea defaultValue={product?.ProductDescription}  rows={4} placeholder="Product Description" {...register("ProductDescription")} />
                </div>
                }
                {
                    !product && <div>
                    <input className="fw-bold" placeholder="Product Title" {...register("ProductTitle")} />
                    <textarea  rows={4} placeholder="Product Description" {...register("ProductDescription")} />
                </div> 
                }
                <h6 className="pt-2">Product Category</h6>
                <div className="row g-md-2">
                    <div className="col-md-6">
                        {
                            product?.category && <Select
                            defaultValue={product?.category}
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
                        }
                    </div>
                    <div className="col-md-6">
                        {
                            product?.category == 'Shop Turf' && <Select
                                placeholder="Select Shop Turf Sub Category"
                                defaultValue={product?.subCategory}
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
                            product?.category == 'Shop Plants' && <Select
                                // {...register("SubCategory", { required: true })} 
                                defaultValue={product?.subCategory}
                                placeholder="Select Shop Plants Sub Category"
                                size="large"
                                style={{
                                    width: '100%',
                                }}
                                onChange={e => setSubCategory(e)}
                                options={[
                                    {value: 'Bushes And Shrubs',label: 'Bushes And Shrubs',},
                                    {value: 'Cactus',label: 'Shop Turf',},
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
                                    product?.category == 'Shop Turf' && <>
                                        <div className="col-md-6">
                                            <input defaultValue={product?.YarnType} {...register("YarnType")} className='mb-2' placeholder="Yarn Type" />
                                            <input defaultValue={product?.Weight} {...register("Weight")} className='mb-2' placeholder="Weight" />
                                            <input defaultValue={product?.SecondaryBacking} {...register("SecondaryBacking")} className='mb-2' placeholder="Secondary Backing" />
                                            <input defaultValue={product?.Pile_Height} {...register("Pile_Height")} className='mb-2' placeholder="Pile Height" />
                                        </div>
                                        <div className="col-md-6">
                                            <input defaultValue={product?.RollWidth} {...register("RollWidth")} className='mb-2' placeholder="Roll Width" />
                                            <input defaultValue={product?.Perforated} {...register("Perforated")} className='mb-2' placeholder="Perforated" />
                                            <input defaultValue={product?.Color} {...register("Color")} className='mb-2' placeholder="Color" />
                                            <input defaultValue={product?.PDFSpecSheet} {...register("PDFSpecSheet")} className='mb-2' placeholder="PDF Spec Sheet" />
                                        </div>
                                    </>
                                }
                                {/* Input Deatails Information For Shop Plants Products ____________________________ */}
                                {
                                    product?.category == 'Shop Plants' && <>
                                        <div className="col-md-6">
                                            {product?.Product_Code ? <input defaultValue={product?.Product_Code} {...register("Product_Code")} className='mb-2' placeholder="Product code" />:<input {...register("Product_Code")} className='mb-2' placeholder="Product code" />}
                                            <input defaultValue={product?.UPC} {...register("UPC")} className='mb-2' placeholder="UPC" />
                                            <input defaultValue={product?.ItemsPerPack} {...register("ItemsPerPack")} className='mb-2' placeholder="Items per pack" />
                                            <input defaultValue={product?.DominantColor} {...register("DominantColor")} className='mb-2' placeholder="Dominant color" />
                                            <input defaultValue={product?.PottedOrBaseIncluded} {...register("PottedOrBaseIncluded")} className='mb-2' placeholder="Potted or base included" />
                                        </div>
                                        <div className="col-md-6">
                                            <input defaultValue={product?.WeightOfEachItem} {...register("WeightOfEachItem")} className='mb-2' placeholder="Weight of each item" />
                                            <input defaultValue={product?.WeightOf1pack} {...register("WeightOf1pack")} className='mb-2' placeholder="Weight of 1 pack" />
                                            <input defaultValue={product?.ShippingBoxSize} {...register("ShippingBoxSize")} className='mb-2' placeholder="Shipping box size" />
                                            <input defaultValue={product?.ShippingDimensionalWeight} {...register("ShippingDimensionalWeight")} className='mb-2' placeholder="Shipping dimensional weight" />
                                            <input defaultValue={product?.OversizedFreightShipping} {...register("OversizedFreightShipping")} className='mb-2' placeholder="Over sized Freight Shipping" />
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
                                        deletedImg == false && <>
                                        {
                                            !imagePath && <img style={{height: '200px', weight: 'auto'}} src={demoImage} alt="" />
                                        }
                                        {
                                            imagePath && <img style={{height: '200px', weight: 'auto'}} src={`https://rgf.onrender.com/${imagePath}`} alt="" />
                                        }
                                        {
                                            product?.img && <img style={{height: '200px', weight: 'auto'}} src={`https://rgf.onrender.com/${product.img}`} alt="" />
                                        }
                                        {
                                        product?.img && <FaRegTrashAlt onClick={() => deleteImage()} className='deleteIcon'/>
                                        }
                                        {
                                        imagePath && <FaRegTrashAlt onClick={() => deleteImage()} className='deleteIcon'/>
                                        }
                                        </>
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

export default EditProduct;