import React from 'react'
import { useGetProductByIdQuery } from './productApi';
import { useParams } from 'react-router';
import { imageUrl } from '../../constants/api_urls';
import { Rating } from '@material-tailwind/react';
import AddCart from '../cart/AddCart';

const ProductDetail = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useGetProductByIdQuery(id);

  if (isLoading) {
    return <lottie-player src="https://lottie.host/06012c46-087e-4903-8a87-aecdd78843b6/Z7iEfPcNpH.json" background="##FFFFFF" speed="1" loop controls autoplay direction="1" mode="normal"></lottie-player>
  }



  return (
    <>
      <div className='grid grid-cols-3 p-4 items-start gap-10'>

        <div className="image">
          <img className='w-full' src={`${imageUrl}${data.image}`} alt="" />
        </div>
        <div className="info space-y-3">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <p>Rs.{data.price}</p>
          <Rating value={data.rating} readonly />
        </div>

        {data && <AddCart product={data} />}




      </div>
      {/* <ProductReview user={user} id={product._id} reviews={product.reviews} /> */}
    </>
  )
}

export default ProductDetail