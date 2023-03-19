import Link from 'next/link'
import React from 'react'

function Sucess() {
  return (
    <div className='w-full h-full '>
    <div className='h-screen w-full flex flex-col text-center items-center justify-center'>
      <Link href='/'>
      <h1 className='text-5xl font-bold mb-4 cursor-pointer'>Mis Tennis</h1>
      </Link>
      <h2 className='text-7xl font-semibold'>Gracias por tu compra</h2>
      <h2 className='text-7xl font-semibold mt-4'>Pronto recibiras tu pedido</h2>
      <p className='text-xl font-semibold mt-10'>Para cualquier duda o comentario no dudes en comunicarte con nosotros</p>
      <p className='text-xl font-semibold'>55 5555 555</p>
      <a href='mailto:dudas@mistennis.com' className='text-xl font-semibold '>dudas@mistennis.com</a>
      <Link href='/'>
      <button className='px-4 py-2 bg-red-800 mt-4 text-white rounded-xl'>Seguir comprando</button>
      </Link>
    </div>
  </div>
  )
}

export default Sucess