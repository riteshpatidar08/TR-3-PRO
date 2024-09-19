import React from 'react'
import {useForm} from 'react-hook-form'

function Signup() {
     const { register, handleSubmit } = useForm()

     const onSubmit = (data) => {
        console.log(data)
     }
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='name'>Name</label>
        <input type='text' {...register('name')} />
        <button type='submit'>Signup</button>
    </form>
    </div>
  )
}

export default Signup
