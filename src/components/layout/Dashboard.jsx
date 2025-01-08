
import Navbar from "../navbar/Navbar";
import Sidebar from "../navbar/Sidebar";
import Home from "./Home";

function Dashboard() {
  return (
    <div className="w-full h-auto bg-backgroundColor_3-bg" >
      <Navbar />
      <div className="min-h-screen flex">
        <Sidebar />
        <main className="flex-grow p-6 ">
          <Home/>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
