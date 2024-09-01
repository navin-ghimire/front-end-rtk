import useAuth from "../../hooks/useAuth";
import OrderData from "./OrderData";
import UserProfile from "./UserProfile";

const ProfileMain = () => {
  const user = useAuth();

  return (
    <div>
      <UserProfile user={user} />
      <OrderData user={user} />




    </div>
  )
}
export default ProfileMain