import React from "react";
import Topbar from "../../components/admin/common/Topbar";
import SidebarMenu from "../../components/admin/common/SidebarMenu";
import MainContent from "../../components/admin/Dashboard/MainContent";

const Dashboard = () => {
  return (
    <>
      {/* TOP BAR */}
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          {/* SIDEBAR MENU  */}
          <SidebarMenu />
          {/* MAIN CONTENT */}
          <MainContent/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
