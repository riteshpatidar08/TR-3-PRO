import React from 'react'
import { useForm } from 'react-hook-form'
import { userLogin } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
function Login() {
const {handleSubmit , register} = useForm() ;
const dispatch = useDispatch();

const onSubmit = (data) => {
console.log(data)

}
  return (
    <div>
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 w-[25rem] shadow-lg rounded-md">
        <h1 className="text-black font-bold text-3xl text-center m-2">
        Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        
          <label className="block" htmlFor="Email">
            Email
          </label>
          <input
            className="input_field"
            type="email"
            {...register('email')}
          />
         
          <label className="block" htmlFor="Name">
            Password
          </label>
          <input
            className="input_field"
            type="password"
            {...register('password')}
          />
         
          <button
            className="bg-black px-8 py-2 rounded-md w-full mt-3 text-white"
            type="submit"
          >
          Login
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login
