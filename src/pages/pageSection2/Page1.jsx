// import SubPage1 from "./subPage1";
import Subpage2 from "./Subpage2";
import Subpage3 from "./Subpage3";

function Page1() {
  

  return (
    <div className="flex flex-col  flex-wrap ">
      
      {/* <SubPage1/> */}
      <Subpage2/>
      <Subpage3/>
      
    </div>
  );
}

export default Page1;
