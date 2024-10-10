import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-around p-3 items-center bg-black text-white font-family: "Jersey 25", sans-serif'   >
      <div>
        <h1 className="text-2xl font-jersey">Hash</h1>
      </div>
      <div className='space-x-5 font-jersey text-lg'>
        <a href="" className="px-2 py-1 rounded-full hover:bg-gray-600">Features</a>
        <a href="" className="px-2 py-1 rounded-full hover:bg-gray-600">Build</a>
        <a href="" className="px-2 py-1 rounded-full hover:bg-gray-600">Resource</a>
        <a href="" className="px-2 py-1 rounded-full hover:bg-gray-600">About</a>
        <button className='bg-green-400 px-4 py-1 border rounded-full active:shadow-none active:translate-custom' >Wallet</button>
      </div>
    </div>
  )
}

export default Header