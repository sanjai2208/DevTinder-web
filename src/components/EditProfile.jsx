import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch} from "react-redux";
import { addUser } from "../utils/userSlice";
import { toggleMode } from "../utils/toggleSlice";

const EditProfile = ({ loggedInUser }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(loggedInUser.firstName || "");
  const [lastName, setLastName] = useState(loggedInUser.lastName || "");
  const [age, setAge] = useState(loggedInUser.age || "");
  const [gender, setGender] = useState(loggedInUser.gender || "male");
  const [skills, setSkills] = useState(loggedInUser.skills || "");
  const [photoUrl, setPhotoUrl] = useState(loggedInUser.photoUrl || "");
  const [about, setAbout] = useState(loggedInUser.about || "");
  const [showToast, setToast] = useState(false);
  const [error, setError] = useState("");

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, gender, skills, about, photoUrl },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      dispatch(toggleMode());
      setToast(true);
      setTimeout(() => setToast(false), 3000);
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-[#1f2937] text-white rounded-2xl p-10 w-full max-w-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Edit Profile</h2>

        <div className="flex justify-center mb-6">
          {loggedInUser && (
            <img
              src={loggedInUser.photoUrl}
              alt="Profile"
              className="w-24 h-24 rounded-full shadow-md"
            />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        <div className="mt-5">
          <label className="block mb-1 font-medium">About</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none"
            rows="3"
          ></textarea>
        </div>

        <div className="mt-5">
          <label className="block mb-1 font-medium">Skills</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none"
          />
        </div>

        <div className="mt-5">
          <label className="block mb-1 font-medium">Profile Photo URL</label>
          <input
            type="text"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none"
          />
        </div>

        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}

        <div className="mt-6 text-center">
          <button
            onClick={saveProfile}
            className="bg-blue-400 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition duration-300"
          >
            Save Profile
          </button>
        </div>
      </div>

      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-2 px-6 rounded-xl shadow-lg">
          Profile Saved Successfully
        </div>
      )}
    </div>
  );
};

export default EditProfile;
