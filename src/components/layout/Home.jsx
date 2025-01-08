import HorizontalTimeline from "../../pages/PageSection/HorizontalTimeline";
import Page1 from "../../pages/pageSection2/Page1";

function Home() {
  return (
    <>
      <div className="flex flex-col">
        <div className="">
          <p className="text-gray-500">
            OptiFii gifts & rewards/{" "}
            <span className="text-black"> Apply for gift card</span>
          </p>
          <div className="w-100% bg-white h-auto mt-3 p-3 rounded-xl">
            <HorizontalTimeline />
          </div>
          <div className="w-100% bg-white h-auto mt-3 p-3 rounded-xl">
            <Page1 />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
