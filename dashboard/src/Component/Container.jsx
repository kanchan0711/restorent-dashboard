import React from 'react'
import SideMenu from './SideMenu/SideMenu'
import Body from './Body/body'


const Container = () => {
  return (
    <div className='flex h-[90vh] item-center w-[85vw] my-10 rounded-x1 overflow-hidden '>
      <SideMenu />
     <Body/>
    </div>
  )
}

export default Container
