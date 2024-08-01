import React from 'react'
import Topbar from '../../components/admin/common/Topbar'
import SidebarMenu from '../../components/admin/common/SidebarMenu'
import MainHelp from '../../components/admin/HelpCenter/MainHelp'

const HelpCenter = () => {
  return (
    <>
    {/* TOP BAR */}
    <Topbar/>
    <div className="container-fluid">
        <div className="row">
        {/* SIDEBAR MENU */}
        <SidebarMenu/>
        {/* MAIN CONTENT */}
        <MainHelp/>
        </div>
    </div>
    </>
  )
}

export default HelpCenter