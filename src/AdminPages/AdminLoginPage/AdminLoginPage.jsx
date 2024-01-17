// import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './AdminLoginPage.css'
import auth from '../../../firebase.config'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Spin } from "antd";
// import { Spin } from "antd";
// import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {

    const navigate = useNavigate();


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    let from = "/dashbord";

    // For React form hooks ------------------------------------------------------
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const {email, password} = data;
        console.log(email, password);
        reset();
        await signInWithEmailAndPassword(email, password)
        if(!error){
            reset();
            navigate(from, { replace: true })
            console.log(user)
        }
        else{
            return
        }
    };

    //   Condition User, Loading and Error --------------
    let load;
    if(loading){
        load = <Spin />
    }
    let logInError;
    if(error){
        logInError = <p className="text-danger fw-bold">{error?.message}</p>;
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div style={{height: '100vh'}} className="d-flex justify-content-center align-items-center">
                        <form className="border admin_page_input_design p-4" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <h4 className='text-center my-2'>Admin</h4>
                            </div>   
                            
                            {/* Email Input Field ------------------------------------------------- */}
                            <input 
                                type='email'
                                className='log_in_input mt-2'
                                placeholder='Your Email'
                                {...register("email", { required: true })} 
                                aria-invalid={errors.email ? "true" : "false"} 
                            />
                            {/* Email Error Message -------------------- */}
                            {errors.email?.type === 'required' && <p className='text-danger' role="alert">Email is required</p>}
                            {/* Password Input Field ------------------------------------------------- */}
                            <input 
                                type='password'
                                className='log_in_input'
                                placeholder='Password'
                                {...register("password", { required: true })} 
                                aria-invalid={errors.password ? "true" : "false"} 
                            />
                            {/* Password Error Message -------------------- */}
                            {errors.password && <p className='text-danger' role="alert">Password is required</p>}
                            {/* Submit Button ----------------------------------------------------- */}
                            <div className='d-flex justify-content-center align-items-center'>
                                {load}
                                {logInError}
                            </div>
                            <button type="submit" className='fw-semibold btn bg-dark text-white w-100'>Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminLoginPage;