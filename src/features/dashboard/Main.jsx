import React from 'react'
import { useGetAllProductsQuery } from '../product/productApi'
import ProductCard from '../product/ProductCard';

const Main = () => {

  const {isLoading, error, data} = useGetAllProductsQuery();

  if(isLoading){
    return <lottie-player src="https://lottie.host/06012c46-087e-4903-8a87-aecdd78843b6/Z7iEfPcNpH.json" background="##FFFFFF" speed="1" loop controls autoplay direction="1" mode="normal"></lottie-player>
  }




  return (
    <div className='p-4 grid grid-cols-3 gap-4'>

   {data && data.map((product) => {
    return <ProductCard key={product._id} product={product} />
   })}


    </div>
  )
}

export default Main