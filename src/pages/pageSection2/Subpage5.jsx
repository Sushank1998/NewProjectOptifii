import { CiSearch } from "react-icons/ci";
import { FiAlignRight, FiChevronDown, FiAlignCenter } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

function Subpage5() {
  const location = useLocation();
  const rawData = location.state?.data || {}; // Fallback to an empty object

  const employeeData = rawData.Employees
    ? rawData.Employees.split(";").map((row) => {
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

  const otherData = Object.entries(rawData).filter(
    ([key]) => key !== "Employees"
  );

  // Extract dynamic headers from employee data
  const headers =
    employeeData.length > 0 ? Object.keys(employeeData[0]) : [];

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
     
      </div>

      {/* Search and Filter */}
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

      {/* Employee Data Table */}
      <div className="w-full bg-white h-auto mt-3 py-3 rounded-xl">
        {/* Dynamic Grid Header */}
        <div
          className={`grid grid-cols-${headers.length} text-center bg-gray-100 py-5 px-4 font-medium text-sm border-b border-gray-500 text-gray-500`}
        >
          {headers.map((header, index) => (
            <div key={index} className="flex items-center justify-center gap-2">
              {header === "Emp_Id" ? <MdCheckBoxOutlineBlank /> : null}
              <p>{header}</p>
            </div>
          ))}
        </div>

        {/* Render Rows Dynamically */}
        {employeeData.length > 0 ? (
          employeeData.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-${headers.length} text-center py-2 px-4 mt-6 border-b text-sm border-gray-100 text-gray-600`}
            >
              {headers.map((header, idx) => (
                <p key={idx}>{row[header]}</p>
              ))}
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
