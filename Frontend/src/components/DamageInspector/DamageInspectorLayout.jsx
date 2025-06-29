import React from 'react'
import Sidepanel_in from './Sidepanel_in'
import { Outlet } from 'react-router-dom'
// import ApllicationRead from './ApllicationRead'


const DamageInspectorLayout = () => {
  return (
    <>
    <div className='min-h-screen'>
    <Sidepanel_in/>
    
    <Outlet></Outlet>
    </div>  
    </>
  )
}

export default DamageInspectorLayout
