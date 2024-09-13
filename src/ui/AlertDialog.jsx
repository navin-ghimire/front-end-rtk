import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeBlog } from '../features/blog/blogSlice';

const AlertDialog = ({ open, handleOpen, index }) => {
  const dispatch = useDispatch();
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Ready to place your order.</DialogHeader>
      <DialogBody>
      Excited to add this to your wardrobe? Confirm your purchase!
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={() => {
          dispatch(removeBlog(index));
          handleOpen();
        }}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}

export default AlertDialog