import React, { useEffect } from 'react'
import {useRouter} from 'next/router'
import {signIn, useSession, getProviders} from 'next-auth/react'

import { FaGoogle } from "react-icons/fa";


function LoginGoogle() {

  const {data: session, status} = useSession()
  const router = useRouter()


  useEffect(() => {
    (async()=> {
      const providers = await getProviders()
      console.log(providers)
    })();
  }, [])
  

  if(status !== 'loading' && status == 'authenticated'){
    
    router.push('/')
  }

  return (
    <div>
        
<button onClick={() => signIn('google')} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 flex flex-row rounded">
      <FaGoogle className="mr-2 mt-1" />
      Iniciar sesión con Google
    </button>
    </div> 
  )
}

export default LoginGoogle