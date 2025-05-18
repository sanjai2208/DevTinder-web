import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store?.feed);

  const getFeed = async () => {
    if (users) return;
    try {
      const feedUsers = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(feedUsers?.data));
    } catch (err) {
      
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
  if(!users) return
  if(users.users.length <= 0) return <h1 className="flex justify-center mt-20 font-bold text-2xl">No New Users Found</h1>
  return (
    users && users.users?.length > 0 && (
      <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10 bg-gradient-to-br from-gray-900 to-black text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Explore Users</h1>
        <UserCard userDetail={users.users[0]} />
      </div>
    )
  );
};

export default Feed;
