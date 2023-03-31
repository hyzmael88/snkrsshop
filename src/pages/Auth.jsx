import LoginGoogle from "@/components/Auth/LoginGoogle";
import React, { useState } from "react";
import LoginFacebook from "../components/Auth/LoginFacebook";
import LoginFacebook2 from "@/components/Auth/LoginFacebook2";

function Auth() {
  const facebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const [register, setRegister] = useState(false);

  return (
    <div className="2xl:max-w-[1280px]  w-full h-full mx-auto overflow-hidden">
      <div className="w-full h-full grid grid-col-1 place-items-center">
      <div className={`flex flex-col w-full lg:w-[450px] h-full ${register == false ? 'lg:h-[650px]' : 'lg:h-[700px]'} border-2 border-gray-400 rounded-lg mt-20 mb-20 items-center`}>
          <h2 className="font-bold text-4xl mt-4 mb-4">Mis Tennis</h2>
          {register ==false ? (
            <h3 className="text-2xl font-semibold mb-4">Login</h3>
          ) : (
            <h3 className="text-2xl font-semibold mb-4">Register</h3>
          )}
          <input
            type="text"
            id="mail"
            name="mail"
            placeholder="Email"
            className="px-14 py-4 bg-gray-200 rounded-lg mb-4"
          ></input>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="px-14 py-4 bg-gray-200 rounded-lg"
          ></input>
          {
            register ?

            <input
              type="password"
              id="password"
              name="Repassword"
              placeholder="Repeat password"
              className="px-14 py-4 bg-gray-200 rounded-lg mt-4"
            ></input>
            : null
          }
          {
            register == false ?

          <p className="mt-4 text-gray-600">
            Don&apos;t have an account?{" "}
            <span className="underline cursor-pointer" onClick={()=>setRegister(true)}>click here</span>
          </p>
          :
<p className="mt-4 text-gray-600">
            Already have an account?{" "}
            <span className="underline cursor-pointer" onClick={()=>setRegister(false)}>click here</span>
          </p>
          }
          {
            register == false?

          <button className="text-white text-lg font-semibold bg-red-700 px-14 py-4 rounded-lg mt-4">
            Login
          </button>
          :
          <button className="text-white text-lg font-semibold bg-red-700 px-14 py-4 rounded-lg mt-4">
            Register
          </button>
          }
          <div className="mt-8 border-2  border-gray-100 w-full"></div>
          <div className="mt-8">
            <LoginFacebook2 />
            <LoginGoogle/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
