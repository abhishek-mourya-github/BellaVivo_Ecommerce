import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');

  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      
     if(currentState === 'Sign Up'){

      const response = await axios.post('http://localhost:3000/api/user/register', {
        name,
        email,
        password
      });

      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        navigate('/login');
      }else{
        toast.error(response.data.message);
      }

     }else{
  
      const response = await axios.post('http://localhost:3000/api/user/login', {
        email,
        password
      });

      if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
      navigate('/');
     }else{
      toast.error(response.data.message);
     }

     } 

    } catch (error) {
      
      console.error("Error during authentication:", error);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Name' className='w-full px-3 py-2 border border-gray-800' required />}
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email' className='w-full px-3 py-2 border border-gray-800' required/>
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' className='w-full px-3 py-2 border border-gray-800' required/>
      <div className='w-full flex justify-between text-sm -mt-2'>
        <p className='cursor-pointer'>Forgot your password ?</p>
        {
          currentState === "Login" 
          ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
          : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      
      <button className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer'>{currentState === 'Login' ? 'Sign in' : "Sign Up"}</button>
    </form>
  )
}

export default Login
