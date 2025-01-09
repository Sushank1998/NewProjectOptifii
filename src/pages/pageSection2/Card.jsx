import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const ImageCard = ({card1}) => {
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    console.log(`Clicked: ${card1.title}`);
    if (card1.title === "CARD WALLET") {
      navigate("/subpage3");
    } else {
      navigate("/subpage2");
    }
  };
  
  return (
    <div className="max-w-md mx-auto w-[280px] h-[373px] bg-gradient-to-r from-[#1F1584] to-[#6311CB] shadow-lg rounded-lg overflow-hidden">
    <div className="flex flex-col h-full">
      
      <div className="pl-4 pt-8">
        <button onClick={handleSubmit}
         className="outline-white border flex justify-between items-center gap-3 px-5 py-2 text-white rounded-lg hover:bg-white hover:text-gray-500">
          <FaCheck />
          Select
        </button>
      </div>

      <div className="flex flex-col items-center pt-4 px-4 flex-grow">
        <h1 className="text-center text-xl font-bold text-white">{card1.title}</h1>
        <p className="text-xs text-white pt-2 text-start">Choose a plan and get onboard in minutes. Then get $100 credits for your next payment.</p>
      </div>
  
      <div className="flex justify-between w-200%">
        <img src={card1.img1} alt="main image" className="object-fill" />
      </div>
    </div>
  </div>
  
  );
};

export default ImageCard;
