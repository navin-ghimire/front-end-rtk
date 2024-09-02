import React from 'react'
import { useParams } from 'react-router'
import { useGetOrderByIdQuery } from './orderApi';
import { imageUrl } from '../../constants/api_urls';


const OrderDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetOrderByIdQuery(id);

  if (isLoading) {
    return <lottie-player src="https://lottie.host/baaa78ba-aff1-4e12-ba56-22d35b9ba72c/ujDLg3coH7.json" background="transparent" speed="1" loop autoplay></lottie-player>
  };

  return (
    <div className='p-4'>



      <div className="">
        <div >
          {data && data?.products.map(({ qty, product: { image, price, title }, _id }) => {
            return <div key={_id} className="grid grid-cols-2">
              <div>
                <img src={`${imageUrl}${image}`} alt="" className='h-[70px]  w-[90px]' />
              </div>
              <div>
                <h1>{title}</h1>
                <h1>{`Rs.${price}`}</h1>
              </div>

            </div>
          })}

          {<div className="flex justify-between mt-10">
            <h1 className="text-xl font-semibold">Sub Total</h1>
            <h1>Rs.{data?.totalAmount}</h1>
          </div>}
        </div>

      </div>


    </div>
  )
}

export default OrderDetail