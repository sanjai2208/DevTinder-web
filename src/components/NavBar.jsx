import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import {removeUser} from "../utils/userSlice"
import {LOGO_URL} from "../utils/constants"
const NavBar = () => {
  const user = useSelector((store) => store?.user);
  const dispatch = useDispatch();
  const  navigate =useNavigate();
  const handleLogOut = async () => {
    try {
     await axios.post(BASE_URL + "/logout",{},{withCredentials : true});
     dispatch(removeUser())
     navigate("/login")
    } catch (err) {
      console.log(err.message)
     }
  };
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm flex justify-between">
        <div className="flex items-center">
          <img src={LOGO_URL} alt="Logo" className = "w-17 rounded-full mt-2" />
          <Link to="/feed" className="btn btn-ghost text-4xl font-bold">
            DevTinder
          </Link>
        </div>
        <div className="flex ">
          {user && (
            <div className="dropdown dropdown-end mx-1  flex gap-4">
              <h1 className="mt-2.5 font-medium text-xl ">Welcome {user.firstName} </h1>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-13 rounded-full mt-1 ">
                  <img
                    alt="photo"
                    src={user.photoUrl}  
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-12 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between text-[18px]">
                    Profile
                    <span className="badge text-[18px]">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/connections" className="text-[18px]">Connections</Link>
                </li>
                <li>
                  <Link to="/requests" className="text-[18px]">Requests</Link>
                </li>
                <li>
                  <a onClick={handleLogOut} className="text-[18px]">Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
