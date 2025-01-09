import { FiAlignRight, FiChevronDown,FiAlignCenter } from "react-icons/fi";
import { LuUpload } from "react-icons/lu";
import avatar_group from '../../assets/Avatar_group.png'



function Subpage5() {

     const listData = [
        {
            id:1,
            Load_Status: '#1234',
            date_time: '10 June 2024, 10am',
            img: avatar_group,
            amount:"7000"
        },
        {
            id:2,
            Load_Status: '#1235',
            date_time: '10 June 2024, 10am',
            img: avatar_group,
            amount:"7000"
        },
        {
            id:3,
            Load_Status: '#1235',
            date_time: '10 June 2024, 10am',
            img: avatar_group,
            amount:"7000"
        },
        {
            id:4,
            Load_Status: '#1236',
            date_time: '10 June 2024, 10am',
            img: avatar_group,
            amount:"7000"
        },
        {
            id:5,
            Load_Status: '#1237',
            date_time: '10 June 2024, 10am',
            img: avatar_group,
            amount:"7000"
        },
        {
            id:6,
            Load_Status: '#1238',
            date_time: '10 June 2024, 10am',
            img: avatar_group,
            amount:"7000"
        },
        {
            id:7,
            Load_Status: '#1238',
            date_time: '10 June 2024, 10am',
            img: avatar_group,
            amount:"7000"
        },
        {
            id:8,
            Load_Status: '#1239',
            date_time: '10 June 2024, 10am',
            img: avatar_group,
            amount:"7000"
        },
    ]
  return (
    <>
    <div className="w-100% bg-white h-auto mt-3 p-3 rounded-xl">
      <div className=" flex justify-between items-center">
        <div className="flex justify-between items-center gap-5">
          <button className=" text-black border-2  flex justify-between gap-2 items-center  border-gray-400  py-1 px-4 rounded">
            <FiAlignRight />
            Sort
            <FiChevronDown />
          </button>
          <p className="text-gray-400">Show</p>
          <input
            placeholder="0"
            type="number"
            className=" border-2 border-gray-400  py-1 px-4 rounded w-[90px] outline-none"
          />
          <p className="text-gray-400">entries</p>
        </div>
        <div className="flex justify-between items-center gap-5">
          <button
            className=" text-black border-2  flex justify-between gap-2 items-center  border-gray-400  py-2 px-4 rounded"
          >
            <LuUpload className="w-5 h-5" />
            Export
            <FiChevronDown className="w-5 h-5" />
          </button>
          <button
            className=" text-black border-2  flex justify-between gap-2 items-center  border-gray-400  py-2 px-4 rounded"
          >
            <FiAlignCenter  className="w-5 h-5" />
            Filter
            <FiChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
     <p>Order Status</p>
     </div>
      <div className="w-100% bg-white h-auto mt-3 p-3 rounded-xl flex flex-col">
        <div className="w-80% bg-gray-200 h-10 rounded-lg px-8 flex justify-between items-center   ">
            <p>Sr. no</p>
            <p>Order ID</p>
            <p>Date & time</p>
            <p>Total employees</p>
            <p>Amount</p>
        </div>
        {listData.map((item,index)=>{
            return(
                <div className="w-80% bg-white h-10 rounded-lg px-8 flex justify-between items-center   " key={index}>
                    <p>{index+1}</p>
                    <p>{item.Load_Status}</p>
                    <p>{item.date_time}</p>
                    <>{item.img? <img src={item.img} alt="user_img" className="w-30 h-5" /> : null}</>
                    <p>{item.amount}</p>
                </div>
            )
        })}
      </div>
    </>
  );
}

export default Subpage5;
