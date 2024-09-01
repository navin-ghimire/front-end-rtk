import { useGetOrderByUserQuery } from "../order/orderApi"

const OrderData = ({ user }) => {
  const { data, isLoading, error } = useGetOrderByUserQuery(user.token);
  
  return (
    <div>


    </div>
  )
}
export default OrderData