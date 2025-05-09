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
      console.log("ERROR" + err.message);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  return (
    users && (
      <div className="h-screen flex justify-center items-center">
        <UserCard userDetail={users.users[0]} />
      </div>
    )
  );
};

export default Feed;
