import { Button } from "@mui/material";
import { IoCloudUploadOutline } from "react-icons/io5";

function Subpage3() {
  return (
    <>
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
          {/* <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
            /> */}
        </Button>
            <p className="text-gray-500">only xls,xlsx and csv formats are supported</p>
      </div>

      <div className="w-80% flex justify-center items-center h-10 bg-gray-100 mt-6  rounded-xl">
        <p>Download a sample spreadsheet to quickly start your import</p>
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-[#6311CB] text-white px-6 py-2 text-center rounded-xl">
          Proceed
        </button>
      </div>
    </>
  );
}

export default Subpage3;
