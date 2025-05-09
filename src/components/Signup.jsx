
const Signup = () => {
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
                  
                />
                <legend className="fieldset-legend ">Last Name</legend>
                <input
                  
                  type="text"
                  className="focus:outline-none input bg-gray-700 rounded-lg mb-2"
                  placeholder=" Enter Last Name"
                  
                />
                <legend className="fieldset-legend ">EmailId</legend>
                <input
                  
                  type="text"
                  className="focus:outline-none input bg-gray-700 rounded-lg mb-2"
                  placeholder=" Enter EmailId"
                  
                />
                <legend className="fieldset-legend ">Password</legend>
                <input
                  type="password"
                  
                  className="focus:outline-none input bg-gray-700 rounded-lg mb-7"
                  placeholder=" Enter EmailId "
                  
                />
              </fieldset>
            </div>

            <div className="card-actions justify-center">
              <button
                className="btn btn-primary bg-gray-500 rounded-xl text-[16px] px-6"
                
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
