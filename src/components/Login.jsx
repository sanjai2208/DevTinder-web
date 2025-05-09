import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [emailId, setemailId] = useState("sanjai@gmail.com");
  const [password, setpassword] = useState("Sanjai@2005");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("")
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL+"/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (err) {
      setError( err?.response?.data?.message || "Something Went Wrong")
      console.error ( err);
    
    }
  };

  return (
    <div className="flex justify-center my-24">
      <div className="card bg-base-500 w-96 shadow-sm">
        <div className="card-body">
          <div className="border-2 p-8 border-gray-500 rounded-lg shadow-gray-400 shadow-[0_0_30px]">
            <div className="flex flex-col">
              <h2 className="card-title text-[23px] font-bold justify-center mb-2">
                Login
              </h2>
              <fieldset className="fieldset text-[15px] ">
                <legend className="fieldset-legend ">EmailId</legend>
                <input
                  value={emailId}
                  type="text"
                  className="focus:outline-none input bg-gray-700 rounded-lg mb-2"
                  placeholder=" Enter EmailId"
                  onChange={(e) => setemailId(e.target.value)}
                />
                <legend className="fieldset-legend ">Password</legend>
                <input
                  type="password"
                  value={password}
                  className="focus:outline-none input bg-gray-700 rounded-lg mb-7"
                  placeholder=" Enter EmailId "
                  onChange={(e) => setpassword(e.target.value)}
                />
              </fieldset>
            </div>
            <p className ="text-red-400 -mt-5 mb-3">{error}</p>
            <div className="card-actions justify-center">
              <button
                className="btn btn-primary bg-gray-500 rounded-xl text-[16px] px-6"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
