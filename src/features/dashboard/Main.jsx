import React from 'react'
import { useGetAllProductsQuery } from '../product/productApi'
import ProductCard from '../product/ProductCard';

const Main = () => {

  const { isLoading, error, data } = useGetAllProductsQuery();

  if (isLoading) {
    return <lottie-player src="https://lottie.host/baaa78ba-aff1-4e12-ba56-22d35b9ba72c/ujDLg3coH7.json" background="transparent" speed="1" loop autoplay></lottie-player>
  };


  return (
    <div className='p-4 grid grid-cols-3 gap-6'>

      {data && data.products.map((product) => {
        return <ProductCard key={product._id} product={product} />
      })}



    </div>
  )
}

export default Main
