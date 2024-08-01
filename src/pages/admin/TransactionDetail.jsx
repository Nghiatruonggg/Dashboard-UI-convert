import React from 'react'
import Topbar from '../../components/admin/common/Topbar'
import SidebarMenu from '../../components/admin/common/SidebarMenu'
import TransDetail from '../../components/admin/TransactionDetail/TransDetail'

const TransactionDetail = () => {
  return (
   <>
   {/* TOP BAR */}
   <Topbar/>
   {/* SIDEBAR MENU */}
   <SidebarMenu/>
   <div className="container-fluid">
        <div className="row">
        {/* MAIN CONTENT */}
        <TransDetail/>
        </div>
    </div>
   </>
  )
}

export default TransactionDetail