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
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (err) {
      setError(err?.response?.data?.message || "Something Went Wrong")
      
    }
  };
  const handleSignUp = () => {
    navigate("/SignUp")
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="card bg-base-500 w-[500px] h-[700px] shadow-xl">
        <div className="card-body p-10">
          <div className="border-2 p-10 border-gray-500 rounded-xl shadow-gray-400 shadow-[0_0_30px]">
            <div className="flex flex-col">
              <h2 className="card-title text-3xl font-bold justify-center mb-4  text-center">
                Login
              </h2>
              <fieldset className="fieldset text-[16px] text-white">
                <legend className="fieldset-legend mb-1 text-xl">EmailId</legend>
                <input
                  value={emailId}
                  type="text"
                  className="focus:outline-none input bg-gray-700 rounded-lg mb-4 px-4 py-3 h-[45px] text-lg "
                  placeholder="Enter EmailId"
                  onChange={(e) => setemailId(e.target.value)}
                />
                <legend className="fieldset-legend mb-1 text-xl">Password</legend>
                <input
                  type="password"
                  value={password}
                  className="focus:outline-none input bg-gray-700 rounded-lg h-[45px] text-lg mb-4 px-4 py-3"
                  placeholder="Enter Password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </fieldset>
            </div>
            <p className="text-red-400 mb-4 text-center text-sm">{error}</p>
            <div className="card-actions justify-center">
              <button
                className="btn btn-primary bg-blue-400 rounded-2xl text-[20px] px-8 py-5"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <p className="mt-2 font-medium cursor-pointer hover:text-blue-300" onClick={()=>handleSignUp()}>New User? Sign Up Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
