import React from 'react';
import { useForm } from 'react-hook-form';

function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" {...register('name')} />
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
