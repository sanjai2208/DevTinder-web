import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const navigate = useNavigate();
  const [error, setError] = useState("")
  const handleSignUp = async () => {
    try {
      const res = await axios.post(BASE_URL + "/signup",{firstName,lastName,emailId,password,},{withCredentials:true});
      if (res.status === 200 || res.status === 201) {
        navigate("/Login");
      }
    } catch (err) {
      
      setError(err?.response?.data || "Something Went Wrong")
    }
    
  };
    const handleLogin =() => {
      navigate("/Login");
    }
  return (
    <div className="flex justify-center my-24">
      <div className="card bg-base-500 w-96 shadow-sm">
        <div className="card-body">
          <div className="border-2 p-8 border-gray-500 rounded-lg shadow-gray-400 shadow-[0_0_30px]">
            <div className="flex flex-col">
              <h2 className="card-title text-[23px] font-bold justify-center mb-2">
                Sign up
              </h2>
              <fieldset className="fieldset text-[15px] ">
                <legend className="fieldset-legend ">First Name</legend>
                <input
                  type="text"
                  className="focus:outline-none input bg-gray-700 rounded-lg mb-2"
                  placeholder=" Enter First Name"
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                  required
                />
                <legend className="fieldset-legend ">Last Name</legend>
                <input
                  type="text"
                  className="focus:outline-none input bg-gray-700 rounded-lg mb-2"
                  placeholder=" Enter Last Name"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
                />
                <legend className="fieldset-legend ">EmailId</legend>
                <input
                  type="text"
                  className="focus:outline-none input bg-gray-700 rounded-lg mb-2"
                  placeholder=" Enter EmailId"
                  value={emailId}
                  onChange={(e)=>setemailId(e.target.value)}
                />
                <legend className="fieldset-legend ">Password</legend>
                <input
                  type="password"
                  className="focus:outline-none input bg-gray-700 rounded-lg mb-7"
                  placeholder=" Enter EmailId "
                  value={password}
                  onChange={(e)=>setpassword(e.target.value)}
                />
              </fieldset>
            </div>
            <p className="text-red-400 mb-4 text-center text-sm">{error}</p>

            <div className="card-actions justify-center">
              <button className="btn btn-primary bg-blue-400 rounded-2xl text-[15px] px-8 py-5" onClick={() => handleSignUp()}>
                Sign up
              </button>
            </div>
            <p
              className="mt-4 font-medium cursor-pointer hover:text-blue-300"
              onClick={() => handleLogin()}
            >
              Existing User? Login Here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
