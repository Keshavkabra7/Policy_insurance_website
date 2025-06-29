import React from 'react'
import Sidepanel from './Sidepanelagent'
import { Outlet } from 'react-router-dom'
// import ApllicationRead from './ApllicationRead'


const Agent_layout = () => {
  return (
    <>
    <div className='min-h-screen '>
    <Sidepanel></Sidepanel>
    
    <Outlet></Outlet>
    </div>
    </>
  )
}
    
export default Agent_layout
