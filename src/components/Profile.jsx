import EditProfile from "./EditProfile"
import { useSelector } from "react-redux";
import UserCard from "./UserCard"

const Profile = () => {
  const loggedInUser = useSelector((store) => store?.user);
  return (
    <div >
      {loggedInUser&& <EditProfile loggedInUser={loggedInUser}/>  }
      
      
      
    </div>
  )
}

export default Profile
