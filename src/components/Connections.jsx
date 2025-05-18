import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connectionsList = useSelector((store) => store?.connections);

  const getConnections = async () => {
    try {
      const connections = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(connections?.data?.data));
    } catch (err) {
      
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (!connectionsList)
    return <h1 className="font-bold text-2xl text-center mt-10 ">No Connections Found</h1>;

  if (connectionsList.length === 0) return  <h1 className="font-bold text-2xl text-center mt-10 ">No Connections Found</h1>;;


  return (
    <div className="text-center my-10 px-4">
      <h1 className="font-bold text-4xl mb-10  ">
        Connections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {connectionsList.map((connection) => {
          const { firstName, lastName, gender, photoUrl, age, about, skills } = connection;
          return (
            <div
              key={connection._id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-lg p-6 w-full max-w-sm 
                         transform transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px] hover:shadow-white"
            >
              <img
                src={photoUrl}
                alt="profile"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-400 object-cover shadow-md "
              />
              <h2 className="text-xl font-bold text-gray-200">{firstName} {lastName}</h2>
              <p className="text-sm text-purple-300 mt-1 italic">{gender} | Age: {age}</p>
              <p className="text-gray-300 mt-3 text-sm">{about}</p>
              <p className="text-sm mt-3">
                <span className="text-blue-300 font-semibold">Skills:</span>{" "}
                <span className="text-gray-100">
                  {Array.isArray(skills) ? skills.join(", ") : skills}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
