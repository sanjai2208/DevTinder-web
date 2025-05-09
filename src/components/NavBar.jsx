import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import {removeUser} from "../utils/userSlice"
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
        <div className="flex">
          <Link to="/" className="btn btn-ghost text-2xl font-bold">
            DevTinder
          </Link>
        </div>
        <div className="flex ">
          {user && (
            <div className="dropdown dropdown-end mx-1  flex gap-4">
              <h1 className="mt-2.5 font-medium ">Welcome {user.firstName} </h1>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full mt-1">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoUrl}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-12 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
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
