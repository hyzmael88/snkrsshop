import React, { Fragment, useState } from 'react'
import Product from '../components/Store/Product'
import Sidebar from '../components/Store/Sidebar'
import {AppContext} from '../context/StateContext'
import Dropdown from '../components/Store/Dropdown'

function Store() {
      const {filteredProducts} = AppContext()

      const [showMenu, setShowMenu] = useState(false)
      const toggleMenu = () => setShowMenu(!showMenu)

      
  return (
    <Fragment>
    <div className='w-full flex flex-row justify-end mt-4 mb-4 pr-2 lg:pr-6 cursor-pointer items-center relative '>
        <span className='uppercase'>sort by:&nbsp;</span>
        <Dropdown/>
        
        
    </div>
    <div className='flex flex-row w-full h-full'>
        <div className=' hidden lg:block w-1/4'>

            <Sidebar />
        </div>
        
        <div className='grid grid-cols-2  md:grid-cols-3 place-items-center w-full lg:w-3/4'>
            {
            filteredProducts.map((product, index) =>(

                <Product
                key={product._id}
                product = {product}
                />
            ))
            }
        </div>
    </div>
    </Fragment>
  )
}

export default Store