import Card from "./Card";
import main1 from "../../assets/Outline/main1.png";
import main2 from "../../assets/Outline/main2.png";
import HorizontalTimeline from "../PageSection/HorizontalTimeline";

function SubPage1() {
  const cardData = [
    {
      id: 1,
      title: "CASH WALLET",
      img1: main1,
    },
    { id: 2, title: "CARD WALLET", img1: main2 },
  ];
  return (
    <>
      <div className="w-100% bg-white h-auto mt-3 p-3 rounded-xl">
        <HorizontalTimeline />
      </div>
      <div className="w-100% bg-white h-auto mt-3 p-3 rounded-xl">
        <p className="mb-5">Select card type</p>
        <div className="flex justify-evenly ">
          {cardData.map((item, index) => {
            return (
              <div className="flex justify-around items-center" key={index}>
                <Card card1={item} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-[#6311CB] text-white px-6 py-2 text-center rounded-xl">
            Select and Processd
          </button>
        </div>
      </div>
    </>
  );
}

export default SubPage1;
