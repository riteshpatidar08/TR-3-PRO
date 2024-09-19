import React from 'react';
import { useForm } from 'react-hook-form';
import {z} from 'zod'

import {zodResolver} from '@hookform/resolvers/zod'

function Signup() {

    const schema = z.object({
       name : z.string().min(1 , "Name is required").max(40,"Name cannot exceed 40 characters") 
    })

  const { register, formState:{errors} ,handleSubmit } = useForm({resolver:zodResolver(schema)});

console.log(errors)

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" {...register('name')} />
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
        <label htmlFor="email">Email</label>
        <input type="email" {...register('email')} />
        <label htmlFor="phone">Phone</label>
        <input type="text" {...register('phone')} />
        <label htmlFor="password">Password</label>
        <input type="password" {...register('password')} />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
