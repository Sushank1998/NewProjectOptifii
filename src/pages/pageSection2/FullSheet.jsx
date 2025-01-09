import { FiAlignRight, FiChevronDown, FiAlignCenter } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { LuUpload } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";

function Subpage6() {
  const navigate = useNavigate();
  const location = useLocation();
  const parsedData = location.state?.data || []; // Default to empty array

  console.log("Parsed Data from Subpage3:", parsedData);

  const getCount = (val) => {
    if (!val || typeof val !== "string") return 0; // Handle empty or invalid input
    const dataArray = val
      .trim()
      .split('\n')
      .map(row =>
        row
          .replace(/[\[\]]/g, '') // Remove square brackets
          .split(', ') // Split by comma and space
          .map(item => item.trim())
      );

    return dataArray[0]?.length || 0;
  };

  const handleRow = (row) => {
    navigate('/employee', { state: { data: row } });
    console.log("Row clicked:", row);
  };

  // Extract table headers dynamically
  const headers = parsedData.length > 0 ? Object.keys(parsedData[0]) : [];

  return (
    <>
      <p className="text-gray-500">
        OptiFii gifts & rewards /{" "}
        <span className="text-black">Application status</span>
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
            <button className="text-black border-2 flex justify-between gap-2 items-center border-gray-400 py-2 px-4 rounded">
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
        <p className="mt-5 text-gray-600 font-medium">Order Status:</p>
      </div>

      <div className="w-full bg-white h-auto mt-3 py-7 px-7 rounded-xl">
        {/* Grid Header */}
        {headers.length > 0 ? (
          <div className="grid grid-cols-7 justify-evenly items-center text-center py-2 px-4 bg-gray-100 font-medium text-sm border-b border-gray-500 text-gray-500">
            {headers.map((header, index) => (
              <p key={index} className="capitalize">
                {header}
              </p>
            ))}
          </div>
        ) : (
          <p className="text-center mt-5 text-gray-500">No headers available.</p>
        )}

        {/* Render Rows Dynamically */}
        {parsedData.length > 0 ? (
          parsedData.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-7 justify-evenly items-center text-center py-2 px-4  cursor-pointer hover:bg-slate-50 mt-6 border-b text-sm border-gray-100 text-gray-600"
              onClick={() => handleRow(row)}
            >
              {headers.map((header, idx) => (
                <p key={idx}>
                  {header === "Employees"
                    ? getCount(row[header]) // Handle special "Employees" field
                    : row[header] || "N/A"}
                </p>
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

export default Subpage6;


