import React from 'react'

const UserCard = ({userDetail}) => {
    const {firstName, lastName, photoUrl, age, gender, about } = userDetail
  return (
    <div className=''>
        <div className="card bg-gray-800 w-[350px] shadow-sm rounded-3xl">
  <figure>
    <img
    className="rounded-2xl"
      src={photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+ " "+ lastName}</h2>
    {age && gender && <p>{age + "," + gender}</p>}
    <p>{about}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary rounded-xl bg-blue-400">Interested</button>
      <button className="btn btn-primary rounded-xl bg-pink-400 ">Ignore</button>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default UserCard
