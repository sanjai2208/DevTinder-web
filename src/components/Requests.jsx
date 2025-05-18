import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestsSlice";
import { FaCheck, FaTimes } from "react-icons/fa";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store?.requests);
  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        {
          withCredentials: true,
        }
      );
     
      getRequests()
    } catch (err) {
      
    }
  };

  const getRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res?.data?.data));
    } catch (err) {
      
    }
  };
  useEffect(() => {
    getRequests();
  }, []);

 

  if (!requests || requests.length === 0)
    return (
      <h1 className="font-bold text-2xl text-center mt-10">
        No Requests Found
      </h1>
    );


  return (
    <div className="text-center my-10 px-4">
      <h1 className="font-bold text-4xl mb-10 ">Connection Requests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {requests.map((request) => {
          const { firstName, lastName, gender, photoUrl, age, about, skills } =
            request.fromUserId;
          return (
            <div
              key={request._id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-3xl shadow-xl p-6 w-full max-w-sm 
                         transform transition duration-300 hover:scale-105 hover:shadow-[0_0_30px] hover:shadow-gray-200"
            >
              <img
                src={photoUrl}
                alt="profile"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-400 object-cover shadow-lg"
              />
              <h2 className="text-2xl font-bold text-gray-300">
                {firstName} {lastName}
              </h2>
              <p className="text-sm text-purple-300 mt-1 italic tracking-wide">
                {gender} | Age: {age}
              </p>
              <p className="text-gray-300 mt-3 text-sm">{about}</p>
              <p className="text-sm mt-3">
                <span className="text-blue-300 font-semibold">Skills:</span>{" "}
                <span className="text-gray-100">
                  {Array.isArray(skills) ? skills.join(", ") : skills}
                </span>
              </p>

              <div className="mt-6 flex justify-center gap-5">
                <button
                  className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-5 rounded-2xl flex items-center gap-2 
                             transition-all duration-300 shadow-lg hover:shadow-blue-400"
                            onClick = {() => reviewRequest("accepted", request._id)}
                >
                  <FaCheck /> Accept
                </button>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-5 rounded-2xl flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-pink-400" onClick = {() => {reviewRequest("rejected", request._id)}}>
                  <FaTimes /> Reject
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Requests;
