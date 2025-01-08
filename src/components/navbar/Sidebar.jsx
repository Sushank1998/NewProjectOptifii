import { useState } from "react";
import blackLogo from "../../assets/black_logo.png";
import HandleSide from "./HandleSide";
import { data } from "./data";

function Sidebar() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="sticky flex flex-col top-0 left-0 h-screen w-64 bg-sideBarColor_4-bg shadow-lg">
      {/* Logo Section */}
      <div className="flex flex-col items-center">
        <div className="w-4/5 h-14 flex items-center rounded-xl bg-sideNavColor_5-bg mt-6 p-3 gap-3">
          <img src={blackLogo} alt="Company Logo" />
          <p className="text-white text-[12px]">Website Developers India Pvt Ltd</p>
        </div>
      </div>

      {/* Sidebar Items */}
      <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="flex flex-col py-6 space-y-1">
          {data.map((item, index) => (
            <li key={item.id}>
              <HandleSide
                isExpanded={expandedIndex === index}
                onToggle={() => handleToggle(index)}
                navData={item}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
