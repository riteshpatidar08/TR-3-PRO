import React from 'react';
import { FiUser } from 'react-icons/fi';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <section className='flex flex-col p-4  border-black border-b'>
        <div className='flex justify-between items-center mb-4 '>
      <div>
        <h1 className="text-2xl font-semibold">Ecommerce</h1>
      </div>
      <div>
        <input
          className="w-96 p-2 border border-black"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className='flex  items-center gap-4'>
        <div className='flex items-center gap-2'>
            <HiOutlineShoppingBag size={26} />
          <h1>Cart</h1>
          
        </div>
        <div className='flex items-center gap-2'>
          <FiUser size={26} />
          <h1>User</h1>
        </div>
      </div>
      </div>
      <div className=' flex justify-center'>
        <div className='flex gap-10'>
            <Link>Home</Link>
            <Link>Men</Link>
            <Link>Kids</Link>
            <Link>Women</Link>
        </div>
      </div>
    </section>

  );
}

export default Navbar;
