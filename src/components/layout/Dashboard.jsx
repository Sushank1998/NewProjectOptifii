import Navbar from "../navbar/Navbar";
import {  Route, Routes } from "react-router-dom";

import Sidebar from "../navbar/Sidebar";
import Home from "./Home";
import SubPage1 from "../../pages/pageSection2/SubPage1";
import Subpage2 from "../../pages/pageSection2/Subpage2";
import Subpage3 from "../../pages/pageSection2/Subpage3";

function Dashboard() {

  return (
    <div className="w-full h-auto bg-backgroundColor_3-bg">
      <Navbar />
      <div className="min-h-screen flex">
        <Sidebar />
        <main className="flex-grow p-6 ">
          <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/gifts-vouchers/subpage1" element={<SubPage1 />} />
          <Route path="/subpage2" element={<Subpage2 />} />
          <Route path="/subpage3" element={<Subpage3 />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
