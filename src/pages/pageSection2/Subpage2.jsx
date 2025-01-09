import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import HorizontalTimeline from "../PageSection/HorizontalTimeline";
import { CiCircleCheck } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

function Subpage2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputData, setInputData] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSaveAndProceed = () => {
    setIsModalOpen(true);
    console.log(inputData);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/subpage4", { state: { inputData } });
   
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
        <p className="mb-5">Select card type</p>
        <div className="flex flex-col p-10">
          <div className="flex flex-col gap-2">
            <label>Wallet name</label>
            <input
              type="text"
              onChange={handleInputChange}
              className="border border-gray-500 rounded-xl px-2 py-2 w-[500px] outline-none"
            />
          </div>
          <div className="flex justify-between items-start mt-10">
            <div>
              <h2 className="text-xl font-medium">Select transaction type</h2>
              <div className="flex flex-col">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Ecommerce"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="POS"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="ATM"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Contactless"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Wallet transfer"
                  />
                </FormGroup>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-medium">Merchant transaction rule</h2>
              <div className="flex flex-col mt-3">
                <div className="flex justify-between gap-4 ">
                  <div className="flex flex-col gap-2 ">
                    <label>Transaction rule</label>
                    <div className="w-90 h-10 border-2 rounded-md border-gray-400 flex justify-center items-center text-gray-700 gap-2 px-2 ">
                    Either of them
                    <AiOutlineExclamationCircle className="text-[#3725EA] w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Merchant category</label>
                    <div className="w-[300px] h-10 border-2 rounded-md border-gray-400 flex items-center text-gray-700 gap-2 px-2 ">
                    <div className="w-30 h-8 bg-[#efeefe] text-[#3725EA] flex justify-center items-center px-4 rounded-sm gap-2">Food<RxCross2 /></div>
                    <div className="w-30 h-8 bg-[#efeefe] text-[#3725EA] flex justify-center items-center px-4 rounded-sm gap-2">Fuel<RxCross2 /></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex flex-col gap-2">
                    <label>Transaction rule</label>
                    <div className="w-90 h-10 border-2 rounded-md border-gray-400 flex justify-center items-center text-gray-700 gap-2 px-2 ">
                    None of them
                    <AiOutlineExclamationCircle className="text-[#3725EA] w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Merchant category</label>
                    <div className="w-[300px] h-10 border-2 rounded-md border-gray-400 flex items-center text-gray-700 gap-2 px-2 ">
                    <div className="w-30 h-8 bg-[#efeefe] text-[#3725EA] flex justify-center items-center px-4 rounded-sm gap-2">Food<RxCross2 /></div>
                    <div className="w-30 h-8 bg-[#efeefe] text-[#3725EA] flex justify-center items-center px-4 rounded-sm gap-2">Fuel<RxCross2 /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={handleSaveAndProceed}
              className="bg-[#6311CB] text-white px-6 py-2 text-center rounded-xl"
            >
              Save & proceed
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]  text-center">
          <div className="flex justify-center items-center">
            <CiCircleCheck className="w-20 h-20  text-[#159F2B]" />
            </div>
            <h2 className="text-2xl font-bold mb-4">All Done!</h2>
            <p className="text-gray-600 mb-6">
            You’re all set and ready to start
            </p>
            <button
              onClick={closeModal}
              className="text-xl font-medium text-[#6311CB] px-6 py-2 rounded-lg"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Subpage2;
