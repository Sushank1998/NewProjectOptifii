import { CiSearch } from "react-icons/ci";
import { FiAlignRight, FiChevronDown, FiAlignCenter } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function Subpage5() {
  const location = useLocation();
  const rawData = location.state?.data || {}; // Fallback to an empty object
  console.log("row",rawData)
  const employeeData = rawData.Employees
    ? rawData.Employees.split(";") // Split string into individual employee records
        .map(row => {
          const fields = row
            .replace(/[\[\]]/g, "") // Remove square brackets
            .trim()
            .split(", "); // Split by comma and space
          return {
            Emp_Id: fields[0] || "",
            Name: fields[1] || "",
            Email_address: fields[2] || "",
            Card_Number: fields[3] || "",
            Card_balance: fields[4] || "",
          };
        })
    : []; // Fallback to an empty array if no employees
// console.log("ee",employeeData);
  return (
    <>
      <p className="text-gray-500">
        OptiFii gifts & rewards /{" "}
        <span className="text-black"> Application status</span>
      </p>
      <div className="w-full bg-white h-auto mt-3 p-3 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
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
        </div>
        <p className="mt-5 text-gray-600 font-medium">
          Order Status:{" "}
          <span className="text-blue-700">
            {rawData['Order ID']}
          </span>
        </p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center bg-white border border-gray-300 rounded-lg focus-within:ring-2 flex-grow lg:flex-grow-0 lg:w-[36rem] sm:w-[16rem]">
            <CiSearch className="w-6 h-6 ml-2 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 outline-none flex-grow rounded-xl"
            />
          </div>
          <button className="text-black border-2 flex gap-2 items-center border-gray-400 py-2 px-4 rounded">
            <FiAlignCenter className="w-5 h-5" />
            Filter
            <FiChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="w-full bg-white h-auto mt-3 py-3 rounded-xl">
        {/* Grid Header */}
        <div className="grid grid-cols-5 bg-gray-100 py-5 px-4 font-medium text-sm border-b border-gray-500 text-gray-500">
          <div className="flex items-center justify-centers gap-2">
            <MdCheckBoxOutlineBlank />
            <p>Emp_Id</p>
          </div>
          <p>Name</p>
          <p>Email Address</p>
          <p>Card number</p>
          <p>Card balance</p>
        </div>

        {/* Render Rows Dynamically */}
        {employeeData.length > 0 ? (
          employeeData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-5 py-2 px-4 mt-6 border-b text-sm border-gray-100 text-gray-600"
            >
              <div className="flex items-center justify-centers gap-2">
                <MdCheckBoxOutlineBlank />
                <p>{row.Emp_Id}</p>
              </div>
              <p>{row.Name}</p>
              <p>{row.Email_address}</p>
              <p>{row.Card_Number}</p>
              <p>{row.Card_balance}</p>
            </div>
          ))
        ) : (
          <p className="text-center mt-5 text-gray-500">No data available.</p>
        )}
      </div>
    </>
  );
}

export default Subpage5;
