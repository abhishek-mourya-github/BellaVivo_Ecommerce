import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import {ChevronLeft, Menu, Search, ShoppingCart} from "lucide-react"
import { ShopContext } from '../context/ShopContext'
 
const Navbar = () => {

  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-6 font-medium relative'> 
      <img src={assets.logo} alt="Logo" className='w-36 cursor-pointer' onClick={() => navigate("/")}/>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/collection' className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/about' className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/contact' className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <Search onClick={() => setShowSearch(true)} className='cursor-pointer'/>

        <div className='group relative'>
          <Link to='/login'><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className='relative'>
          <ShoppingCart className='cursor-pointer'/>
          <div className='absolute -top-1 -right-2 px-1.25 rounded-full bg-gray-800 text-white text-center'>
            <h5 className='text-xs'>{getCartCount()}</h5>
          </div>
        </Link>
        <Menu className='cursor-pointer sm:hidden' onClick={()=> setVisible(true)}/>
          
      </div>

      {/* sidebar menu for small screens*/}
      <div className={`absolute top-0 right-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600 h-screen'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <ChevronLeft size={24}/>
              <h5 className='text-md'>Back</h5>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b text-2xl' to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b text-2xl' to="/collection">COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b text-2xl' to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b text-2xl' to="/contact">CONTACT</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar