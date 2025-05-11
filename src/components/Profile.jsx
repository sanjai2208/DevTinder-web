import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";
import ViewProfile from "./ViewProfile";

const Profile = () => {
  const isEditMode = useSelector((store) => store?.toggle?.isEditMode);
  const loggedInUser = useSelector((store) => store?.user);
  if (!loggedInUser) return;
  return (
    <div>
      {isEditMode ? (
        <EditProfile loggedInUser={loggedInUser} />
      ) : (
        <ViewProfile loggedInUser={loggedInUser} />
      )}
    </div>
  );
};

export default Profile;
