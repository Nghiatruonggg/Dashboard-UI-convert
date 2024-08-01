import React from "react";
import Topbar from "../../components/admin/common/Topbar";
import SidebarMenu from "../../components/admin/common/SidebarMenu";
import MainProfile from "../../components/admin/Profile/MainProfile";

const Profile = () => {
  return (
    <>
      {/* TOP BAR */}
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          {/* SIDEBAR MENU */}
          <SidebarMenu />
          {/* MAIN CONTENT */}
          <MainProfile/>
        </div>
      </div>
    </>
  );
};

export default Profile;
