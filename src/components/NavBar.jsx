import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const NavBar = () => {
  const user = useSelector((store) => store?.user);
  
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm flex justify-between">
        <div className="flex">
          <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
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
                  <a>Logout</a>
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
