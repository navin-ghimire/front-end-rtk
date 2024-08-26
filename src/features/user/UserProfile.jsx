import React from 'react'
import { loginSchema } from '../auth/Login';
import { Button, Card, Input, Typography } from '@material-tailwind/react';
import { useFormik } from 'formik';

const UserProfile = ({ user }) => {


  const { values, errors, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      email: user.email,
      fullname: user.fullname
    },
    onSubmit: async (val) => {
    },
    validationSchema: loginSchema
  });



  return (
    <div className="p-4 w-80 max-w-screen-lg sm:w-96">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>

        <form className="mt-5 mb-2 " onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">

            <Input
              name="email"
              onChange={handleChange}
              size="lg"
              value={values.email}
              label="Email"
              placeholder="name@mail.com"

            />
            {errors.email && touched.email && <h1 className='text-red-600'>{errors.email}</h1>}

            <Input
              type="password"
              size="lg"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="********"
              label="Password"
            />

            {errors.password && touched.password && <h1 className='text-red-600'>{errors.password}</h1>}
          </div>

          <Button loading={isLoading} type="submit" className="mt-6" fullWidth>
            Update
          </Button>
          
        </form>
      </Card>
    </div>
  )
}

export default UserProfile