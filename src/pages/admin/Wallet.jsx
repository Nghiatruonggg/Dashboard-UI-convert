import SidebarMenu from "../../components/admin/common/SidebarMenu";
import Topbar from "../../components/admin/common/Topbar";
import MainWallet from "../../components/admin/Wallet/MainWallet";

const Wallet = () => {
  return (
    <>
      {/* TOP BAR */}
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          {/* SIDEBAR MENU  */}
          <SidebarMenu />
          {/* MAIN CONTENT */}
          <MainWallet />
        </div>
      </div>
    </>
  );
};

export default Wallet;
