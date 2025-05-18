import axios from 'axios'
import {BASE_URL} from "../utils/constants"
import { useDispatch } from 'react-redux'
import { removeUserFromFeed } from '../utils/feedSlice'
const UserCard = ({userDetail}) => {
    const {_id, firstName, lastName, photoUrl, age, gender, about } = userDetail
    const dispatch =useDispatch()
    const handleSendRequest = async (status, _id) => {
      try{
        const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + _id, {} , {withCredentials : true});
        dispatch(removeUserFromFeed(_id))

      }catch(err){
        
      }
    }
  return (
    <div className=''>
        <div className="card bg-gray-800 w-[350px] shadow-sm rounded-3xl hover:scale-105 transform transition-transform duration-300 hover:shadow-[0_0_20px]">
  <figure>
    <img
    className="rounded-2xl"
      src={photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+ " "+ lastName}</h2>
    {age && gender && <p className="text-sm text-purple-300 mt-1 italic">{gender} | Age: {age}</p>}
    <p className="text-gray-300 mt-3 text-sm">{about}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary rounded-xl bg-blue-400" onClick = {()=> handleSendRequest("intrested", _id) }>Interested</button>
      <button className="btn btn-primary rounded-xl bg-pink-400 " onClick = {()=> handleSendRequest("ignored", _id) }>Ignore</button>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default UserCard
