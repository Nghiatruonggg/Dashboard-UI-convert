import React from "react";
import Dashboard from "./pages/admin/Dashboard";
import Wallet from "./pages/admin/Wallet";
import Profile from "./pages/admin/Profile";
import Settings from "./pages/admin/Settings";
import HelpCenter from "./pages/admin/HelpCenter";
import TransactionDetail from "./pages/admin/TransactionDetail";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/transaction-detail" element={<TransactionDetail />} />
      </Routes>
    </>
  );
};

export default App;
