import React from "react";
import Topbar from "../../components/admin/common/Topbar";
import SidebarMenu from "../../components/admin/common/SidebarMenu";
import MainSettings from "../../components/admin/Settings/MainSettings";

const Settings = () => {
  return (
    <>
      {/* TOP BAR */}
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          {/* SIDEBAR MENU */}
          <SidebarMenu />
          {/* MAIN CONTENT */}
          <MainSettings />
        </div>
      </div>
    </>
  );
};

export default Settings;
