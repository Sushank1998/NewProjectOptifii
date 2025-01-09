
import { useLocation, useNavigate } from 'react-router-dom';
import HorizontalTimeline from '../PageSection/HorizontalTimeline'
import { useState } from 'react';
import { MdDriveFolderUpload } from "react-icons/md";
import { LuUpload } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";

function Subpage4() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputData = location.state?.inputData || "";
  console.log("Subpage4", inputData);

  const handleSubmit =()=>{
    console.log("click",Date.now())
    navigate("/Subpage3")
  }

  return (
    <>
    <p className="text-gray-500">
    OptiFii gifts & rewards/{" "}
    <span className="text-black"> Apply for gift card</span>
  </p>
      <div className="w-100% bg-white h-auto mt-3 p-3 rounded-xl">
        <HorizontalTimeline />
      </div>
      <div className="w-100% bg-white h-auto mt-3 p-3 rounded-xl">
      <div className='flex justify-between item-center'>
      <p className="mb-5">Select card type</p> 
      <div className='flex justify-between items-center gap-2'>
      <button className=" text-black border-2 flex justify-between gap-2 items-center border-gray-400   py-2 px-4 rounded">
      <MdDriveFolderUpload className='w-5 h-5' />
          View Achieve
        </button>
        <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className=" text-black border-2  flex justify-between gap-2 items-center  border-gray-400  py-2 px-4 rounded"
          >
            <LuUpload  className='w-5 h-5' />
            Export
            <RiArrowDropDownLine  className='w-5 h-5' />
            {isDropdownOpen && (
            <ul className="absolute mt-3  w-48 text-left pl-3 bg-white border border-gray-300 rounded shadow-lg">
              <li>
                Option 1
              </li>
              <li>
              Option 1
              </li>
              <li>
              Option 1
              </li>
            </ul>
          )}
          </button>
          
           <button className="border-2 border-[#6211CB]  flex justify-between gap-2 items-center text-white bg-[#6211CB]  py-2 px-4 rounded">
           <IoIosAdd  className='w-5 h-5' />
          Create Wallet
        </button>
      </div>
      </div>
      <div className='flex flex-wrap justify-between items-center mt-10'>
        <div 
        onClick={handleSubmit}
        className='w-[332px] h-[195px] cursor-pointer  bg-gradient-to-br from-[#3E0982] to-[#851472] rounded-xl flex justify-center items-center'>
            <h1 className='font-medium text-2xl text-white'> {inputData}</h1>
        </div>
      </div>
      
      </div>
    </>
  )
}

export default Subpage4
