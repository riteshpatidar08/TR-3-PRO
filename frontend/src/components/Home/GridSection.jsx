import React from 'react';
import large from '../../assets/fitSection/bigmenimge.jpg';
import all_products from '../../assets/all_product';
function GridSection() {
  const topFourImage = all_products.slice(0, 4);
  console.log(topFourImage);
  return (
    <div className="mx-auto mt-14 px-8 py-12">
      <h1 className="text-center mb-12 text-2xl font-normal leading-wide">
        STYLISH PICKS FOR EVERY OCCASION
      </h1>
      <div className="grid grid-cols-4 gap-6 grid-rows-2">
        <div id="first_section" className="col-span-2 row-span-2">
          <div className="relative">
            <img src={large} className="h-full w-full object-cover" />
            <button className="absolute inset-0 bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 h-full w-full bg-black">
              View Details
            </button>
          </div>
        </div>
        {topFourImage.map((product) => (
          <div className='relative'>
            <img src={product.image} className="h-full w-full object-cover" />
            <button className="absolute inset-0 bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-all ease-in-out duration-300 h-full w-full bg-black">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridSection;
