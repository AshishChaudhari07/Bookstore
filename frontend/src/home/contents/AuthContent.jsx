import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form" 
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function AuthContent() {

  const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      
      const onSubmit = async (data) => {
        const userInfo = {
          fullname: data.fullname,
          email: data.email,
          message: data.message,
        };
        console.log(userInfo)
        
        try {
          const res = await axios.post("http://localhost:4001/authContent/content", userInfo);
          console.log(res.data);
          if (res.data) {
            toast.success("Content Submitted Successfully");
            navigate('/');
          }
        } catch (err) {
          if (err.response) {
            console.log(err);
            toast.error("Error: " + err.response.data.message);
          } else {
            console.error("Network Error:", err);
            toast.error("Network Error: Unable to reach server.");
          }
        }
      };
      


  return (
    <div>
      <div className='flex h-screen justify-center items-center'>
        <div className="w-[600px]">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    <h1 className="text-lg">Content us</h1>
                    {/* name */}
                    <div className='mt-4 space-y-2'>
                        <span>Name:</span>
                        <br />
                        <input
                         type="text" 
                         placeholder='Enter your name'
                         className='w-80 px-3 py-1 border rounded-md outline-none'
                         {...register("fullname", { required: true })}
                         /><br/>
                         {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    {/* email */}
                    <div className='mt-4 space-y-2'>
                        <span>Email:</span>
                        <br />
                        <input
                         type="email" 
                         placeholder='Enter your email'
                         className='w-80 px-3 py-1 border rounded-md outline-none'
                         {...register("email", { required: true })}
                         /><br/>
                         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    {/* Password */}
                    <div className='mt-4 space-y-2'>
                        <span>Message:</span>
                        <br />
                        <textarea placeholder='type your message' className='border w-[320px] rounded-md p-2' {...register("message", { required: true })}></textarea>
                        <br/> {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    {/* Button */}
                    <div className='flex justify-between mt-4'>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200'>Submit</button>
                    </div>
                    </form>
                </div>
            </div>
    </div>
    </div>
  )
}

export default AuthContent
