import MainComponent from "./MainComponent";
import Sidebar from "./Sidebar";

export default function Body() {
  return (
    <>
    <div className="m-2">
      {/* <div className="m-4">I am Body</div> */}
      <div className='flex'>
        <Sidebar />
        {/* <MainComponent /> */}
      </div>
      </div>
    </>
  );
}
