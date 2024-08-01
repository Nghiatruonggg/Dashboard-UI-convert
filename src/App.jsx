import React from "react";
import Dashboard from "./pages/admin/Dashboard";
import Wallet from "./pages/admin/Wallet";
import Profile from "./pages/admin/Profile";
import Settings from "./pages/admin/Settings";
import HelpCenter from "./pages/admin/HelpCenter";
import TransactionDetail from "./pages/admin/TransactionDetail";

const App = () => {
  return (
    <>
      <Dashboard />
      <Wallet />
      <Profile/>
      <Settings/>
      <HelpCenter/>
      <TransactionDetail/>
    </>
  );
};

export default App;
