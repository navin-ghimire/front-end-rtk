import { Avatar, Rating } from "@material-tailwind/react"

const ReviewList = ({ reviews }) => {
  return (
    <div className='mt-5'>
      {reviews.map(({ _id, comment, rating, user }) => {
        return <div key={_id} className='mb-6'>
          <div className="flex items-center gap-5">
            <Avatar src="https://images.unsplash.com/photo-1725261353746-fdb0052adc46?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" />
            <div className="space-y-2">
              <h1>{user?.fullname}</h1>
              <Rating value={rating} readonly />
              <p>{comment}</p>
            </div>

          </div>


        </div>
      })}
    </div>
  )
}
export default ReviewList
            