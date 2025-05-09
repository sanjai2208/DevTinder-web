import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const EditProfile = ({ loggedInUser }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(loggedInUser.firstName);
  const [lastName, setLastName] = useState(loggedInUser.lastName);
  const [age, setAge] = useState(loggedInUser.age);
  const [gender, setGender] = useState(loggedInUser.gender);
  const [skills, setSkills] = useState(loggedInUser.skills);
  const [photoUrl, setPhotoUrl] = useState(loggedInUser.photoUrl);
  const [about, setAbout] = useState(loggedInUser.about);
  const [showToast, setToast] = useState(false)

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, age, gender, skills, about, photoUrl },
        { withCredentials: true }
      );

      dispatch(addUser(res?.data?.data));
      setToast(true)
      setTimeout(()=>{
        setToast(false)
      },3000)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <div className="flex flex-col items-center">
      <div className="bg-gray-900 rounded-2xl">
        <h1 className="ml-10 font-bold text-xl mt-14">Edit Profile</h1>

        <div>
          {loggedInUser && (
            <img
              src={loggedInUser.photoUrl}
              className="w-20 h-20 mx-52 my-7 rounded-[100%]"
              alt="photo"
            />
          )}
        </div>
        <div className="flex mb-3">
          <span className="flex flex-col ml-10">
            <label className="w-[200px] font-medium mb-1">First Name</label>
            <input
              value={firstName}
              type="text"
              className="focus:outline-none input bg-gray-700 rounded-lg mb-2"
              placeholder=" Enter Your Age"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </span>
          <span className="flex flex-col ml-2 ">
            <label className="w-[200px] font-medium mb-1">Last Name</label>
            <input
              value={lastName}
              type="text"
              className="focus:outline-none input bg-gray-700 rounded-lg mb-2 "
              placeholder=" Enter Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </span>
        </div>

        <div className="flex  mb-3">
          <span className="flex flex-col ml-10">
            <label className="w-[200px] font-medium mb-1">Age</label>
            <input
              value={age}
              type="number"
              className="focus:outline-none input bg-gray-700 rounded-lg mb-2"
              placeholder=" Enter First Name"
              onChange={(e) => setAge(e.target.value)}
            />
          </span>
          <span className="flex flex-col ml-2 ">
            <label className="w-[200px] font-medium mb-1">Gender</label>
            <select name="gender" onChange = {e =>setGender(e.target.value)} className = "focus:outline-none input bg-gray-700 rounded-lg mb-2" value ={gender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            {/* <input
              value={gender}
              type="text"
              className="focus:outline-none input bg-gray-700 rounded-lg mb-2 "
              placeholder=" Enter Your Gender"
              onChange={(e) => setGender(e.target.value)}
            /> */}
          </span>
        </div>

        <div className="flex flex-col ml-10  mb-3">
          <label htmlFor="" className="mb-1 font-medium">
            About
          </label>
          <input
            value={about}
            type="text"
            className="focus:outline-none input bg-gray-700 rounded-lg mb-2 w-[408px]"
            placeholder=" Say Something About You"
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        <div className="flex flex-col ml-10  mb-3">
          <label htmlFor="" className="mb-1 font-medium">
            Skills
          </label>
          <input
            value={skills}
            type="Text"
            className="focus:outline-none input bg-gray-700 rounded-lg mb-2 w-[408px]"
            placeholder=" Enter Your Skills"
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>
        <div className="flex flex-col ml-10  mb-3">
          <label htmlFor="" className="mb-1 font-medium">
            Profile Photo
          </label>
          <input
            value={photoUrl}
            type="Text"
            className="focus:outline-none input bg-gray-700 rounded-lg mb-2 w-[408px]"
            placeholder=" Enter Your Photo URL"
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        </div>
        <div>
          <button
            className="btn btn-primary bg-blue-400 rounded-2xl text-[16px] px-6 ml-44 mt-2"
            onClick={saveProfile}
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
    {showToast ? <div className="toast toast-top toast-center ">
  <div className="alert alert-info bg-blue-400 rounded-2xl">
    <span className="font-bold text-md" >Profile Saved Successfully</span>
  </div>
  
</div> : null}
    
    
    
    
    </>
    
  );
};

export default EditProfile;
