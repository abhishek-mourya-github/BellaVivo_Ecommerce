import React from 'react'
import {NavLink} from 'react-router-dom'
import { CirclePlus, ScrollText  } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
          <NavLink className='flex items-center justify-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to='/add'>
              <CirclePlus size={32}/>
             <p className='hidden md:block'>Add Items</p>
          </NavLink>

          <NavLink className='flex items-center justify-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to='/list'>
              <ScrollText  size={32}/>
             <p className='hidden md:block'>List Items</p>
          </NavLink>

          <NavLink className='flex items-center justify-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg' to='/orders'>
              <ScrollText  size={32}/>
             <p className='hidden md:block'>Order Items</p>
          </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
