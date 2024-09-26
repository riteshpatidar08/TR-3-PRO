import React from 'react';

function Banner() {
  return (
    <div className="bg-red-500 mx-10 my-6 grid grid-cols-2 py-9 px-8">
      <div
        id="first_column"
        className="flex flex-col justify-center item-center p-5"
      >
        <div id="first_row">
          <p className="text-3xl font-bold text-white">Unlock the Savings</p>
        </div>
        <div id="second_row">
          <p className="text-xl  font-semibold text-white">
            Flat 50% off on everthing
          </p>
          <button className="bg-white  hover:border-4 border-black hover:text-black transition-all duration-150 ease-in-out px-4 py-2 mt-4 text-red-500">
            Shop now
          </button>
        </div>
      </div>
      <div id="second_column">
        <p className="text-white font-bold text-8xl">
          Flat <span className="text-black underline">50%</span> off
        </p>
        <p className="text-white ">Available on our all store</p>
      </div>
    </div>
  );
}

export default Banner;
