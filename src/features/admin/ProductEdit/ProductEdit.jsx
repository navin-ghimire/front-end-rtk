import React from 'react'
import { useGetProductByIdQuery } from '../../product/productApi'
import { useParams } from 'react-router';
import ProductEditForm from './ProductEditForm';

const ProductEdit = () => {
  const {id} = useParams();
  const { isLoading, error, data, } = useGetProductByIdQuery(id);

  if(isLoading){
    return <lottie-player src="https://lottie.host/baaa78ba-aff1-4e12-ba56-22d35b9ba72c/ujDLg3coH7.json" background="transparent" speed="1" loop autoplay></lottie-player>
  };
  return (
    <div>
      
      <ProductEditForm product={data} />



    </div>
  )
}

export default ProductEdit