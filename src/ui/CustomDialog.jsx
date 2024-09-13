import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useAddOrderMutation } from "../features/order/orderApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { removeCarts } from "../features/cart/cartSlice";

const CustomDialog = ({ open, handleOpen, user, carts, totalAmount }) => {

  const dispatch = useDispatch();

  const updateCart = carts.map((cart) => {
    return { qty: cart.qty, product: cart._id };
  });


  const [addOrder, { isLoading }] = useAddOrderMutation();
  const handleOrder = async () => {
    try {

      await addOrder({
        body: {
          totalAmount,
          products: updateCart
        },
        token: user.token
      }).unwrap();
      dispatch(removeCarts());
      toast.success("Order Placed Successfully");
      handleOpen();

    } catch (err) {
      toast.error(err.data?.message);
    }
  };

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
        <Button loading={isLoading} variant="gradient" color="green" onClick={handleOrder}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}

export default CustomDialog