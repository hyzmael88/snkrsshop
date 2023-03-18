import React from 'react'
import LoginFacebook from './LoginFacebook'



function Auth() {

  const facebookSignIn= () =>
  {
  const provider = new FacebookAuthProvider()
  signInWithRedirect(auth,provider)
  }
  return (
    
    <div className="w-full h-[850px]">
      
      <div className="w-full h-full bg-purple-700  ">
        <div className="w-full h-full bg-gradient-to-r from-black"></div>
        <div className="flex justify-center items-center  ">
          <div className="w-[450px] h-[600px] bg-black/70 rounded-xl drop-shadow-lg absolute top-[20%]">
            <form
/*               onSubmit={handleSubmit}
 */              className=" flex flex-col w-full items-center px-6 py-16"
            >
              <h2 className="text-3xl text-white">Sign in</h2>
{/*               {error ? <p className="p-3 bg-red-400 my-2">{error}</p> : null}
 */}              <div>
                <label className="block mb-2 mt-4 text-sm font-medium text-white dark:text-gray-300">
                  Your email:
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  placeholder="yourmail@mail.com"
                  className=" text-center rounded-lg py-2 mb-4 p-16 "
                ></input>
              </div>
              <div>
                <label className="block mb-2 mt-4 text-sm font-medium text-white dark:text-gray-300">
                  Password:
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  placeholder="password"
                  className=" text-center rounded-lg py-2 mb-4 p-16 "
                ></input>
              </div>
              <div>
                <button className="py-2 p-16 mt-4 bg-pink-600 rounded-lg text-white font-bold">
                  Submit
                </button>
              </div>
              <div className="relative  flex items-center justify-between w-full text-white">
                <div className="w-full text-center">
                  <span>_____________</span>
                </div>
                <div className="w-full my-8 text-center">
                  <p className="pt-4">OR</p>
                </div>
                <div className="w-full text-center">
                  <span>_____________</span>
                </div>
              </div>
              <div className="flex w-full items-center justify-between text-white ">
                <div className="flex flex-col w-full items-center mr-4 ">
                 {/*  <BsFacebook
                    onClick={facebookSignIn}
                    className="text-4xl text-white cursor-pointer hover:text-[#1877f2]"
                  /> 
                  <label className="mt-4 cursor-pointer ">Facebook</label>
                  */}
                  <LoginFacebook/>
                  <button onClick={facebookSignIn}>Sign in with Facebook</button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth