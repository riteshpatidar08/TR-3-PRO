import React from 'react';
import { useForm } from 'react-hook-form';
import {z} from 'zod'
import axios from 'axios'
import {zodResolver} from '@hookform/resolvers/zod'
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { Register } from '../redux/userSlice';
function Signup() {

const dispatch = useDispatch() ;

    const schema = z.object({
       name : z.string().min(1 , "Name is required").max(40,"Name cannot exceed 40 characters"),
       email : z.string().email('Email is required') ,
       phone : z.string().min(10,"Minimum 10 digit is required"),
       password : z.string().min(8 , "Password must contain 8 character").regex(/[0-9]/, "Password must contain at least 1 Number").regex(/[A-Z]/,"Password must contain at least 1 uppercase").regex(/[a-z]/, "Password must contain at least 1 lower case").regex(/[\w_]/,"Password must contain a speacial symbol")
    })

  const { register , formState:{errors} ,handleSubmit } = useForm({resolver:zodResolver(schema)});

console.log(errors) ;

  const onSubmit = (data) => {
  dispatch(Register(data))
  };
  
  
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 w-[25rem] shadow-lg rounded-md">
        <h1 className="text-black font-bold text-3xl text-center m-2">
          Signup
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block" htmlFor="Name">
            Name
          </label>
          <input
            className="input_field"
            type="text"
            {...register('name')}
          />
          {errors.name && <p className='text-sm m-1 text-red-500'>{errors.name.message}</p>}
          <label className="block" htmlFor="Name">
            Email
          </label>
          <input
            className="input_field"
            type="email"
            {...register('email')}
          />
           {errors.email && <p className='text-sm m-1 text-red-500'>{errors.email.message}</p>}
          <label className="block" htmlFor="Name">
            Phone
          </label>
          <input
            className="input_field"
            type="text"
            {...register('phone')}
          />
             {errors.phone && <p className='text-sm m-1 text-red-500'>{errors.phone.message}</p>}
          <label className="block" htmlFor="Name">
            Password
          </label>
          <input
            className="input_field"
            type="password"
            {...register('password')}
          />
          {errors.password && <p className='text-red-500 text-sm m-1'>{errors.password.message}</p>}
          <button
            className="bg-black px-8 py-2 rounded-md w-full mt-3 text-white"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
