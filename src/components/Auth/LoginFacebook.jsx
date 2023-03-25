import React, { useEffect, useState } from 'react'
import FacebookLogin from '@greatsumini/react-facebook-login';
import {BsFacebook} from 'react-icons/bs'
import { AppContext } from "../../context/StateContext";
import { useRouter } from 'next/router';




function LoginFacebook() {
    const {userResponse, setUserResponse, facebookResponse, setFacebookResponse, error, setError} = AppContext();
    const router = useRouter();
    
    useEffect(() => {
      if(userResponse){
        //router.push('/');
        router.back()
      }
    
      
    }, [userResponse])
    
    
   
        return <div className=''>
            <FacebookLogin
  appId="867570441004969"

  onSuccess={(response) => {
    setFacebookResponse(response)
    console.log('Login Success!', response);
  }}
  onFail={(error) => {
    setError(error)
    console.log('Login Failed!', error);
  }}
  onProfileSuccess={(response) => {
    setUserResponse(response)
    console.log('Get Profile Success!', response);
  }}
  className="bg-blue-600 py-4 px-6 rounded-lg"
/>
{
    error?
    <p className='flex flex-row items-center justify-center mt-4'>Ocurrio un error</p>
    :
    <p></p>
}
        </div>;
}

export default LoginFacebook