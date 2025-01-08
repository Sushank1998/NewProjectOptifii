import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

function Subpage2() {
  return (
    <>
    <p className="mb-5">Select card type</p>
      <div className="flex flex-col p-10">
        <div className="flex  flex-col gap-2">
          <label>Wallet name</label>
          <input
            type="text"
            className="border border-gray-500 rounded-xl  px-2 py-2  w-[500px] outline-none "
          />
        </div>
        <div className="flex justify-between items-start mt-10">
          <div>
            <h2 className="text-xl font-medium ">Select transaction type</h2>
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
            <h2 className="text-xl font-medium ">Merchant transaction rule</h2>
            <div className="flex flex-col">
              <div className="flex justify-between gap-4">
                <div className="flex  flex-col gap-2">
                  <label>Transaction rule</label>
                  <input
                    type="text"
                    className="border border-gray-500 rounded-xl  px-2 py-2   outline-none "
                  />
                </div>
                <div className="flex  flex-col gap-2">
                  <label>Merchant category</label>
                  <input
                    type="text"
                    className="border border-gray-500 rounded-xl  px-2 py-2   outline-none "
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex  flex-col gap-2">
                  <label>Transaction rule</label>
                  <input
                    type="text"
                    className="border border-gray-500 rounded-xl  px-2 py-2   outline-none "
                  />
                </div>
                <div className="flex  flex-col gap-2">
                  <label>Merchant category</label>
                  <input
                    type="text"
                    className="border border-gray-500 rounded-xl  px-2 py-2   outline-none "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
        <button className="bg-[#6311CB] text-white px-6 py-2 text-center rounded-xl">
        Save & proceed
        </button>
      </div>
      </div>
    </>
  );
}

export default Subpage2;
