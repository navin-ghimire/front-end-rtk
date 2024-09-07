import React from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router";
import { useGetAllProductsQuery } from "../product/productApi";
import { imageUrl } from '../../constants/api_urls';

const SearchPage = () => {
  const { query } = useParams();
  const nav = useNavigate();
  const { data, isLoading } = useGetAllProductsQuery({ search: query });

  if (isLoading) {
    return <lottie-player src="https://lottie.host/baaa78ba-aff1-4e12-ba56-22d35b9ba72c/ujDLg3coH7.json" background="transparent" speed="1" loop autoplay></lottie-player>
  };


  return (
    <div className='px-5 py-5'>

      <div className=' grid grid-cols-3 gap-5 items-start '>

        {data?.data?.map(({ _id, name, detail, image }) => {
          return <Card className="mt-6 " key={_id}>
            <CardHeader color="blue-gray" className="relative ">
              <img
                className='w-full'
                src={`${imageUrl}${image}`}
                alt="card-image"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {name}
              </Typography>
              <Typography>
                {detail}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button onClick={() => nav(`/product/${_id}`)}>Read More</Button>
            </CardFooter>
          </Card>
        })}



      </div>
    </div>
  )
}

export default SearchPage