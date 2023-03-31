import React, { useEffect } from 'react'
import {useRouter} from 'next/router'
import {signIn, useSession, getProviders} from 'next-auth/react'

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
        <button onClick={() => signIn('facebook')}>Sign in with facebook</button>
    </div>
  )
}

export default LoginFacebook2