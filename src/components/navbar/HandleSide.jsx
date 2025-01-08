import { useEffect, useRef } from "react";

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

  const hasDropdown = navData.list1 || navData.list2 || navData.list3;

  return (
    <div className={`relative ${isExpanded ? "mb-28" : "mb-0"}`}>
      {/* Parent Item */}
      <div
        onClick={() => hasDropdown && onToggle(!isExpanded)}
        className="cursor-pointer relative flex flex-row items-center pl-2 h-11 text-sm gap-2 focus:outline-none hover:bg-sideNavColor_5-bg text-white hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6"
        aria-expanded={isExpanded}
      >
        <img src={navData.icon} alt={`${navData.name} icon`} className="w-5 h-5" />
        <p>{navData.name}</p>
      </div>

      {/* Dropdown Options */}
      {isExpanded && hasDropdown && (
        <ul
          ref={dropdownRef}
          className="absolute left-0 top-full ml-7 text-white rounded-lg w-48 z-50"
        >
          {navData.list1 && (
            <li className="px-3 py-2 hover:px-6 text-xs font-extralight cursor-pointer hover:list-disc hover:pl-5">
              {navData.list1}
            </li>
          )}
          {navData.list2 && (
            <li className="px-3 py-2 hover:px-6 text-xs font-extralight cursor-pointer hover:list-disc hover:pl-5">
              {navData.list2}
            </li>
          )}
          {navData.list3 && (
            <li className="px-3 py-2 hover:px-6 text-xs font-extralight cursor-pointer hover:list-disc hover:pl-5">
              {navData.list3}
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default HandleSide;
