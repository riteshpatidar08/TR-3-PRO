import React from 'react';
import { useForm } from 'react-hook-form';
import {z} from 'zod'

import {zodResolver} from '@hookform/resolvers/zod'

function Signup() {

    const schema = z.object({
       name : z.string().min(1 , "Name is required").max(40,"Name cannot exceed 40 characters"),
       email : z.string().email('Email is required') 
    })

  const { register , formState:{errors} ,handleSubmit } = useForm({resolver:zodResolver(schema)});

console.log(errors) ;

  const onSubmit = (data) => {
    console.log(data);
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
          <label className="block" htmlFor="Name">
            Email
          </label>
          <input
            className="input_field"
            type="email"
            {...register('email')}
          />
          <label className="block" htmlFor="Name">
            Phone
          </label>
          <input
            className="input_field"
            type="text"
            {...register('phone')}
          />
          <label className="block" htmlFor="Name">
            Password
          </label>
          <input
            className="input_field"
            type="password"
            {...register('password')}
          />
          {errors.password && <p className='text-red-500 font-semibold'>{errors.password.message}</p>}
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
