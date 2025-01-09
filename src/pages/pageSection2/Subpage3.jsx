import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { IoCloudUploadOutline } from "react-icons/io5";
import HorizontalTimeline from "../PageSection/HorizontalTimeline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Subpage3() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("Selected file:", file);
  };

  const handleProceed = () => {
    if (!selectedFile) {
      alert("Please upload a file before proceeding.");
      return;
    }

    // Simulate file processing or order ID generation
    console.log("File ready to be processed:", selectedFile);

    // Show popup
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
    <div className="w-100% bg-white h-auto mt-3 p-3 rounded-xl">
        <HorizontalTimeline />
      </div>
      <div className="w-100% bg-white h-auto mt-3 p-3 rounded-xl">
      <p className="mb-5">Import employee</p>
      <div className="w-80% p-10 flex flex-col gap-2 justify-center items-center bg-customColor_1-bg rounded-xl border-[1px] border-dashed border-iconColor_2-bg">
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<IoCloudUploadOutline />}
        >
          Upload spreadsheet
          <input
              type="file"
              accept=".xls,.xlsx,.csv"
              hidden
              onChange={handleFileChange}
            />
        </Button>
        <p className="text-gray-500">Only xls, xlsx, and csv formats are supported</p>
          {selectedFile && (
            <p className="text-green-600 mt-2">
              File selected: {selectedFile.name}
            </p>
          )}
      </div>

      <div className="w-80% flex justify-center items-center h-10 bg-gray-100 mt-6  rounded-xl">
        <p>Download a sample spreadsheet to quickly start your import</p>
      </div>
      <div className="flex justify-center mt-10">
        <button  onClick={handleProceed}
         className="bg-[#6311CB] text-white px-6 py-2 text-center rounded-xl">
          Proceed
        </button>
      </div>
      </div>

      <Dialog open={isPopupOpen} onClose={handlePopupClose}>
        <DialogTitle>Upload Successful</DialogTitle>
        <DialogContent>
          <p><strong>Order ID:</strong> 123456789</p>
          <h3 className="font-bold">Your file has been uploaded</h3>
          <p className="text-gray-500">Thank you for uploading the file. You can now proceed with the next steps.</p>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => {
              setIsPopupOpen(false);
              setSelectedFile(null); // Reset file for a new application
            }}
          >
            Submit New Application
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setIsPopupOpen(false);
              console.log("Navigating to check status...");
              // Add navigation logic if needed
              navigate("/subpage5");
            }}
          >
            Check Status
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Subpage3;
