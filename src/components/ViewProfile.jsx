import React from "react";
import { useDispatch } from "react-redux";
import { toggleMode } from "../utils/toggleSlice";

const ViewProfile = ({ loggedInUser }) => {
    const dispatch = useDispatch()
    const handleToggleEdit = () => {
        dispatch(toggleMode())
    }
  if (!loggedInUser) return;
  return (
    <div className="flex justify-center mt-10 ">
        <div className="w-9/12 max-w-[1000px] bg-gray-800 rounded-4xl ">
     

      
      <div className="flex items-center relative my-7">
        <div className="inline-block">
          <img
            src={loggedInUser.photoUrl}
            alt="photo"
            className="w-30 rounded-full border-4 border-blue-400 ml-30 mt-6 "
          />
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-edit-icon-download-in-svg-png-gif-file-formats--pen-write-pencil-ball-study-user-interface-vol-2-pack-icons-2202989.png?f=webp&w=50"
            className="bg-white absolute -mt-10 ml-49 w-9 rounded-full"
            alt="Edit"
            onClick={handleToggleEdit}
          />
        </div>

        <div className="flex flex-col mt-7">
          <span className="text-lg font-bold ml-10 ">
            {loggedInUser.firstName}
          </span>
          <span className="text-lg font-medium ml-10 text-gray-400">
            {loggedInUser.emailId}
          </span>
        </div>
      </div>
      <hr className="border-gray-600 border-1 ml-30 mt-4 mr-30" />
      <div className="flex justify-between ml-30 mr-30 mt-5 flex-wrap">
        <span className="font-bold text-lg w-1/4">First Name</span>
        <span className="font-medium text-lg text-gray-400 ">
          {loggedInUser.firstName}
        </span>
      </div>
      <hr className="border-gray-600 border-1 ml-30 mt-4 mr-30" />
      <div className="flex justify-between ml-30 mr-30 mt-5 ">
        <span className="font-bold text-lg  ">Last Name</span>
        <span className="font-medium text-lg text-gray-400 ">
          {loggedInUser.lastName}
        </span>
      </div>
      <hr className="border-gray-600 border-1 ml-30 mt-4 mr-30" />
      <div className="flex justify-between ml-30 mr-30 mt-5 flex-wrap">
        <span className="font-bold text-lg w-1/6">Email Id</span>
        <span className="font-medium text-lg text-gray-400">
          {loggedInUser.emailId}
        </span>
      </div>
      <hr className="border-gray-600 border-1 ml-30 mt-4 mr-30" />
      <div className="flex justify-between ml-30 mr-30 mt-5 flex-wrap">
        <span className="font-bold text-lg w-1/6">Age</span>
        <span className="font-medium text-lg text-gray-400">
          {loggedInUser.age}
        </span>
        
      </div>

      <hr className="border-gray-600 border-1 ml-30 mt-4 mr-30" />
      <div className="flex justify-between ml-30 mr-30 mt-5 flex-wrap">
      <span className="font-bold text-lg w-1/6">gender</span>
        <span className="font-medium text-lg text-gray-400">
          {loggedInUser.gender}
        </span>
      </div>
      <hr className="border-gray-600 border-1 ml-30 mt-4 mr-30" />
      <div className="flex justify-between ml-30 mr-30 mt-5 flex-wrap">
        <span className="font-bold text-lg">Skills</span>
        <span className="font-medium text-lg text-gray-400">
          {loggedInUser.skills}
        </span>
      </div>
      <hr className="border-gray-600 border-1 ml-30 mt-4 mr-30 " />
      <div className="flex justify-between ml-30 mr-30 mt-5 flex-wrap ">
        <span className="font-bold text-lg">About</span>
        <span className="font-medium text-lg text-gray-400">
          {loggedInUser.about}
        </span>
      </div>
      <hr className="border-gray-600 border-1 ml-30 mt-4 mr-30 mb-10" />
    </div>




    </div>
    
  );
};

export default ViewProfile;
