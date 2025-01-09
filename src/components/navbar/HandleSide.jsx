import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function HandleSide({ isExpanded, onToggle, navData }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onToggle(false); // Close dropdown if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onToggle]);

  const hasDropdown = navData.dropdown && navData.dropdown.length > 0;

  return (
    <div className={`relative ${isExpanded ? "mb-28" : "mb-0"}`}>
      {/* Parent Item */}
      <div
        onClick={() => hasDropdown && onToggle(!isExpanded)}
        className={`cursor-pointer relative hover:bg-sideNavColor_5-bg shadow-lg flex flex-row items-center pl-2 h-11 text-sm gap-2 focus:outline-none ${
          hasDropdown ? "hover:bg-sideNavColor_5-bg" : ""
        } text-white hover:text-gray-200 border-l-4 border-transparent ${
          hasDropdown && "hover:border-blue-500"
        } pr-6`}
        aria-expanded={isExpanded}
      >
        <img src={navData.icon} alt={`${navData.name} icon`} className="w-5 h-5" />
        {hasDropdown ? (
          <span>{navData.name}</span>
        ) : (
          <Link to={navData.link}>{navData.name}</Link>
        )}
      </div>

      {/* Dropdown Options */}
      {isExpanded && hasDropdown && (
        <ul
          ref={dropdownRef}
          className="absolute left-0 top-full ml-7 text-white rounded-lg w-48 z-50 shadow-lg hover:border-blue-500"
        >
          {navData.dropdown.map((item, index) => (
            <li
              key={index}
              className="px-3 py-2 text-xs font-extralight cursor-pointer hover:bg-sideNavColor_5-bg"
            >
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HandleSide;
