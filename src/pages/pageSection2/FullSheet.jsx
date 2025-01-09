import { FiAlignRight, FiChevronDown, FiAlignCenter } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { LuUpload } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";

function Subpage6() {
  const navigate=useNavigate()
  const location = useLocation();
  const parsedData = location.state?.data || []; // Use an empty array as a fallback
  console.log("Parsed Data from Subpage3:", parsedData);

  const getCount = (val) => {
    const dataArray = val
      .trim()
      .split('\n')
      .map(row => row
        .replace(/[\[\]]/g, '') // Remove square brackets
        .split(', ') // Split by comma and space
        .map(item => item.trim())
      );
  
    console.log("🚀 ~ getCount ~ dataArray:", dataArray);
    console.log("🚀 ~ getCount ~ Number of rows:", dataArray.length);
    console.log("🚀 ~ getCount ~ Number of columns in first row:", dataArray[0]?.length);
  
    return dataArray[0]?.length;
  };
  
  const handleRow=(row)=>{
    navigate('/employee',{state:{data:row}})
    console.log("click",row)

  }
  return (
    <>
      <p className="text-gray-500">
        OptiFii gifts & rewards /{" "}
        <span className="text-black"> Application status</span>
      </p>
      <div className="w-full bg-white h-auto mt-3 p-3 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between gap-2">
            <button className="text-black border-2 flex gap-2 items-center border-gray-400 py-1 px-4 rounded">
              <FiAlignRight />
              Sort
              <FiChevronDown />
            </button>
            <p className="text-gray-400">Show</p>
            <input
              placeholder="0"
              type="number"
              className="border-2 border-gray-400 py-1 px-4 rounded w-[90px] outline-none"
            />
            <p className="text-gray-400">entries</p>
          </div>
          <div className="flex items-center justify-between gap-2">
          <button className=" text-black border-2  flex justify-between gap-2 items-center  border-gray-400  py-2 px-4 rounded">
              <LuUpload className="w-5 h-5" />
              Export
              <RiArrowDropDownLine className="w-5 h-5" />
            </button>
            <button className="text-black border-2 flex gap-2 items-center border-gray-400 py-2 px-4 rounded">
              <FiAlignCenter className="w-5 h-5" />
              Filter
              <FiChevronDown className="w-5 h-5" />
            </button>
            
          </div>
        </div>
        <p className="mt-5  text-gray-600 font-medium">Order Status:</p>
      </div>

      <div className="w-full bg-white h-auto mt-3 py-3 rounded-xl">
        {/* Grid Header */}
        <div className="grid grid-cols-6 bg-gray-100 py-5 px-4 font-medium text-sm  border-b border-gray-500 text-gray-500">
          <div className="flex items-center justify-centers gap-2">
            <MdCheckBoxOutlineBlank />
            <p>Sr. no</p>
          </div>
          
          <p>Order ID</p>
          <p>Load Status</p>
          <p>Date & time</p>
          <p>Total employees</p>
          <p>Amount</p>
        </div>

        {/* Render Rows Dynamically */}
        {parsedData.length > 0 ? (
          parsedData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-6 py-2 px-4 cursor-pointer hover:bg-slate-50  mt-6 border-b text-sm border-gray-100 text-gray-600"
           onClick={()=>handleRow(row)}
           >

              <p>{row["Sr. no"] || ""}</p>
              <p>{row["Order ID"] || ""}</p>
              <p>{row["Load Status"] || ""}</p>
              <p>{row["Date & time"] || ""}</p>
              <p>{getCount (row["Employees"] )|| ""}</p>
              <p>{row["Amount"] || ""}</p>
            </div>
          ))
        ) : (
          <p className="text-center mt-5 text-gray-500">No data available.</p>
        )}
      </div>
    </>
  );
}

export default Subpage6;
