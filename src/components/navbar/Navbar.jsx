import { useState } from "react";
import logo from "../../assets/logo.svg";
import { CiSearch } from "react-icons/ci";
import {
  IoIosNotificationsOutline,
  IoMdArrowDropdown,
  IoIosArrowBack,
} from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <>
      <nav className="sticky top-0 left-0 w-full  bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Search Bar */}
          <div className="flex justify-end items-center gap-10 lg:space-x-6 sm:space-x-3">
          <img src={logo} alt="logo" />
          <div className="flex items-center justify-between gap-3">
          <div className="w-6 h-6 rounded bg-customColor_1-bg flex items-center justify-center ">
            <IoIosArrowBack className="text-iconColor_2-bg" />
          </div>
            <div className="flex items-center bg-white border border-gray-300 rounded-xl focus-within:ring-2 flex-grow lg:flex-grow-0 lg:w-[36rem] sm:w-[16rem]">
              <CiSearch className="w-6 h-6 ml-2 text-gray-500" />
              <input
                type="text"
                placeholder="Type to search..."
                className="px-4 py-2 outline-none flex-grow rounded-xl"
              />
            </div>
          </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <HiOutlineX className="w-6 h-6" />
            ) : (
              <HiOutlineMenu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop View: Notifications & Profile */}
          <div
            className={`hidden lg:flex items-center space-x-6 ${
              isMenuOpen ? "block" : ""
            }`}
          >
            <div className="flex items-center">
              <IoIosNotificationsOutline className="w-8 h-8 text-gray-500" />
            </div>
            <div className="flex items-center space-x-3">
              <img
                className="h-10 w-10 rounded-full"
                src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"
                alt="Profile"
              />
              <div className="text-left">
                <div className="flex items-center">
                  <p className="text-gray-800 font-semibold">John Doe</p>
                  <IoMdArrowDropdown className="w-4" />
                </div>
                <p className="text-gray-500 text-sm">johndoe@email.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-100">
            <div className="flex flex-col space-y-4 p-4">
              <div className="flex items-center space-x-3">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"
                  alt="Profile"
                />
                <div className="text-left">
                  <div className="flex items-center">
                    <p className="text-gray-800 font-semibold">John Doe</p>
                    <IoMdArrowDropdown className="w-4" />
                  </div>
                  <p className="text-gray-500 text-sm">johndoe@email.com</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
