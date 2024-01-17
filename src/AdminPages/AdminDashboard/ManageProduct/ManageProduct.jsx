// import React from 'react';
import './ManageProduct.css'
import { Input } from 'antd';
import { FaRegEdit } from "@react-icons/all-files/fa/FaRegEdit";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";
import { FaRegTrashAlt } from "@react-icons/all-files/fa/FaRegTrashAlt";
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ManageProduct = () => {

    const [productLength, setProductLength] = useState()
    const [products, setProducts] = useState()
    const [searchProduct, setSearchProduct] = useState()

    useEffect(() => {
        fetch(`https://rgf.onrender.com/products`)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setSearchProduct(data)
            setProductLength(data.length)
        })
    },[])

    const onSearch = (value) => {
        const search = searchProduct.filter(d =>d.ProductTitle.toLowerCase().includes(value.toLowerCase()))
        setProducts(search)
    }

    const deleteProduct = (id) => {
        const proceed = window.confirm('Are you sure to Delete');
        if(proceed){
            const url = `https://rgf.onrender.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => console.log(res))
            .then(data => {
                const remain = searchProduct.filter(item => item._id !== id);
                console.log(data, searchProduct);
                setProducts(remain);
                setProductLength(remain.length)
                toast.success('Product Deleted.!', {
                    duration: 3000,
                    position: 'top-right'
                });
            })
        }
    }

    return (
        <section>
            <div className='d-md-flex justify-content-between align-items-center border p-2'>
                <div className='d-flex align-items-center'>
                    <p className='fw-bold m-0 fs-6 me-2'>Total Product =</p>
                    <p className='fw-bold m-0 fs-6'>{productLength}</p>
                </div>
                <div className='d-flex align-items-center'>
                    <p className='fw-bold m-0 fs-6'>Search Product</p>
                    <Input onChange={e => onSearch(e.target.value)} size='large' type="text"/>
                </div>
            </div>
            <div style={{height: '100vh', overflowY: 'auto'}}>
                {
                    products?.map(product => {
                        return  <div key={product._id} className='border my-2 d-md-flex justify-content-between align-items-center p-2 rounded'>
                                    <div style={{height: '50px'}} className='d-flex justify-content-between'>
                                        <img style={{height: '-webkit-fill-available', width: '60px', borderRadius: '5px', marginRight: '10px'}} src={`https://rgf.onrender.com/${product?.img}`} alt="" />
                                        {
                                            product.ProductTitle.length < 30 ? <h6 className='mt-2'>{product?.ProductTitle}</h6> : <h6 className='mt-2'>{product?.ProductTitle.slice(0,20)} ...</h6>
                                        }
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <a href={`https://rgfclient.web.app/product-catalog/${product._id}/${product.ProductTitle}`} target='_blank' rel='noreferrer'><FaExternalLinkAlt className='mx-2 icon_style_manage_page' data-bs-toggle="tooltip" data-bs-placement="top" title="Preview Product"/></a>
                                        <Link to={`/dashbord/edit-product/${product._id}`}><FaRegEdit className='mx-2 icon_style_manage_page' data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Product"/></Link>
                                        <FaRegTrashAlt onClick={() => deleteProduct(product._id)} style={{color: 'red'}} className='mx-2 icon_style_manage_page mt-1' data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Product"/>
                                    </div>
                                </div>
                    })
                }
            </div>
            <Toaster />
        </section>
    );
};

export default ManageProduct;