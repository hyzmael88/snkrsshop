import React from 'react'

function Searchitems({item}) {
  return (
    <div>
        {
            item?
            <li
            className='hover:bg-gray-200'
            >{item?.title && item.title.substring(0,20)}{item?.name}</li>
          
            :
            null
        }
    </div>
  )
}

export default Searchitems