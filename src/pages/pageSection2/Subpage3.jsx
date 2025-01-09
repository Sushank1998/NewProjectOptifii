import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { MdOutlineUploadFile } from "react-icons/md";
import HorizontalTimeline from "../PageSection/HorizontalTimeline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import FeaturedIcon from '../../assets/Outline/FeaturedIcon.png'

function Subpage3() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Validate file type
    const validTypes = ["text/csv", "application/vnd.ms-excel"];
    if (file && !validTypes.includes(file.type)) {
      alert("Invalid file type. Please upload a CSV or Excel file.");
      return;
    }

    setSelectedFile(file);

    // Parse the CSV file
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          console.log("Parsed Data:", result.data);
          setParsedData(result.data); // Save parsed data to state
        },
        error: (error) => {
          console.error("Error parsing CSV file:", error);
          alert("Error parsing the file. Please ensure it is a valid CSV.");
        },
      });
    }
  };

  const handleProceed = () => {
    if (!selectedFile) {
      alert("Please upload a file before proceeding.");
      return;
    }
    if (!parsedData) {
      alert("File parsing is incomplete. Please wait or try again.");
      return;
    }
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = () => {
    if (parsedData) {
      navigate("/fullsheet", { state: { data: parsedData } });
    } else {
      alert("No data to submit. Please upload and parse a file first.");
    }
  };

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
        <p className="mb-5">Import employee</p>
        <div className="w-80% p-6 flex flex-col gap-2 justify-center items-center bg-[#f9f5fd] rounded-xl border-[1px] border-dashed border-iconColor_2-bg">
          <div className="flex flex-col items-center ">
            <input
              id="upload-spreadsheet"
              type="file"
              accept=".xls,.xlsx,.csv"
              hidden
              onChange={handleFileChange}
            />
            <label
              htmlFor="upload-spreadsheet"
              className="flex flex-col items-center cursor-pointer"
            >
              <MdOutlineUploadFile className="w-10 h-10 text-[#3725EA]" />
              <span className="text-[#3725EA] text-lg font-medium">
                Upload spreadsheet
              </span>
            </label>
          </div>
          <p className="text-gray-500">
            Only xls, xlsx, and csv formats are supported
          </p>
          {selectedFile && (
            <p className="text-green-600 mt-2">
              File selected: {selectedFile.name}
            </p>
          )}
        </div>

        <div className="w-80% flex justify-center items-center h-10 bg-gray-100 mt-6 rounded-xl">
          <p>Download a <span className="text-[#3725EA]">sample spreadsheet</span> to quickly start your import</p>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={handleProceed}
            className="bg-[#6311CB] text-white px-6 py-2 text-center rounded-xl"
          >
            Proceed
          </button>
        </div>
      </div>

      <Dialog open={isPopupOpen} onClose={handlePopupClose}>
        <img src={FeaturedIcon} alt="icon" className="w-12 " />
        <DialogContent>

          <p className="text-blue-800">
            <span className="text-gray-400">Order ID:</span> 123456789
          </p>
          <h3 className="font-bold">Your file has been uploaded</h3>
          <p className="text-gray-500">
            Thank you for uploading the file. You can now proceed with the next
            steps.
          </p>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              setIsPopupOpen(false);
              setSelectedFile(null);
            }}
          >
            Submit New Application
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Check Status
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Subpage3;
