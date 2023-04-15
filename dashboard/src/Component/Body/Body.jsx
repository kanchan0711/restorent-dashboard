 import React from 'react'
 import {AiOutlineSearch} from 'react-icons/ai'

const Body = () => {
  return (
    <div className='bg-bodyBg h-[100%] w-[100%] basic-80 p-8'>
      {/* top section */}
      <div className='flex  justify-center '>
        <div className='flex item-center border-b-2 pb-2 basic-1/2 gap-2'>
          <AiOutlineSearch className='text-hoverColor text-[20px] curser-pointer'>
            <input type='text' placeholder='Search your Favourite' className='border-none outline-none placeholder:text-sm focus:outline-none'/>
          </AiOutlineSearch>
        </div>
      </div>
    </div>
  )
}

export default Body
