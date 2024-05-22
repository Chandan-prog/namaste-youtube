import { useDispatch } from "react-redux";
import store from "../utils/store";
import { toggleMenu } from "../utils/appSlice";
export default function Header() {

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <>
      <div className="grid grid-flow-col p-5 shadow-lg">
        <div className="col-span-1 flex ">
          
          <div className="mx-2 cursor-pointer" onClick={toggleMenuHandler}>
            <img
              className="h-8"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX///8AAACOjo7CwsItLS3c3Nw/Pz/6+vrGxsaSkpKZmZmIiIjy8vK+vr7w8PA4ODgfHx+3t7fi4uKY3kT7AAAAzklEQVR4nO3byQ3CQAxA0TGQDQhZ+i+WHCiAi2UU3uvga6Q52HJrAAAAAAAAAAAAAAAAAAAAAAA/4N7fKvX37MBHVHskF1b3HXIDn9V5h2du4lrdF2tuYOuqA6NLLmzDeK00DtmBAAAAAAB8dNOl0pQ+8p6rh/oxJxdW90X2du1VnXd45SZW50X2G7atui+25MLz/6UAAAAAAHyc/t5irx7qx55cuFQHxpIb+Ae3a9V5kb5dO/8N6fnvgAEAAAAAAAAAAAAAAAAAAAAAvvEGU4ASPASDdpgAAAAASUVORK5CYII="
              alt="hamburger-image"
            />
          </div>
        
          <div className="mx-2">
            <img
              className="h-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1teF2mdFK3-BzeU0EKyCjDYchWwVYd6s4w&s"
              alt="youtube-image"
            />
          </div>
        </div>
        <div className=" col-span-10  border-black">
          <input className="w-1/2 ml-40 p-2 border border-gray-400 rounded-l-full" type="text" placeholder="Search" />
          <button className="border border-slate-400 py-2 px-5 rounded-r-full hover:bg-slate-400">🔎</button>
        </div>
        <div className=" col-span-1">
          <img
            className="h-8"
            src="data:image/png;base64,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"
            alt="profile-image"
          />
        </div>
      </div>
    </>
  );
}
