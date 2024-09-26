import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

function ProductList() {
  const { product } = useSelector((state) => state.product);
  const threeProducts = product.slice(0, 3);
  return (
    <div className=" container mx-auto py-8">
      <h1 className="text-center mb-12 text-2xl font-normal leading-wide">
        JUST FOR YOU
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {threeProducts.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
