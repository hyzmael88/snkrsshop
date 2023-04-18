import React, { useEffect } from 'react'
import {useRouter} from 'next/router'
import {signIn, useSession, getProviders} from 'next-auth/react'

import { FaFacebook } from "react-icons/fa";


function LoginFacebook2() {

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
        
<button onClick={() => signIn('facebook')} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 flex flex-row rounded">
      <FaFacebook className="mr-2 mt-1" />
      Iniciar sesión con Facebook
    </button>
    </div> 
  )
}

export default LoginFacebook2