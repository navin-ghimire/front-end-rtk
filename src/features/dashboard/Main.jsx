import React from 'react'
import { useGetAllProductsQuery } from '../product/productApi'
import ProductCard from '../product/ProductCard';

const Main = () => {

  const {isLoading, error, data} = useGetAllProductsQuery();

  if(isLoading){
    return <h1>Loading....</h1>
  }




  return (
    <div className='p-4 grid-cols-3 gap-4'>

   {data && data.map((product) => {
    return <ProductCard key={product._id} product={product} />
   })}


    </div>
  )
}

export default Main