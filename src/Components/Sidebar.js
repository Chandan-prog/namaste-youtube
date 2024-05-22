import { useSelector } from "react-redux";
export default function Sidebar() {

    const {isMenuOpen} = useSelector((store) => store.app);
    // console.log(isMenuOpen);
    if(!isMenuOpen)
        return null;
    return <>
        <div className="border shadow-md p-4 w-64">
        
            <ul>
                <li className="p-2 hover:bg-slate-100">Home</li>
                <li className="p-2 hover:bg-slate-100">Shorts</li>
                <li className="p-2 hover:bg-slate-100">Subscriptions</li>
                <li className="p-2 hover:bg-slate-100">Youtube Music</li>
            </ul>
            <h1 className="font-bold pt-4">You</h1>
            <ul className="">
                <li className="p-2 hover:bg-slate-100">Your Channel</li>
                <li className="p-2 hover:bg-slate-100">History</li>
                <li className="p-2  hover:bg-slate-100">Playlist</li>
                <li className="p-2 hover:bg-slate-100">Your videos</li>
                <li className="p-2 hover:bg-slate-100">Watch later</li>
                <li className="p-2 hover:bg-slate-100">Liked Videos</li>
                <li className="p-2 hover:bg-slate-100">Downloads</li>
            </ul>
            <h1 className="font-bold pt-4">Subscriptions</h1>
            <ul>
                <li className="p-2 hover:bg-slate-100">Muse Asia</li>
                <li className="p-2 hover:bg-slate-100">F1</li>
                <li className="p-2 hover:bg-slate-100">Akshay Saini</li>
                <li className="p-2 hover:bg-slate-100">GFG</li>
            </ul>
            <h1 className="font-bold pt-4">Explore</h1>
            <ul>
                <li className="p-2 hover:bg-slate-100">Trending</li>
                <li className="p-2 hover:bg-slate-100">Shoping</li>
                <li className="p-2 hover:bg-slate-100">Music</li>
                <li className="p-2 hover:bg-slate-100">Movies</li>
            </ul>
            <div className="pt-4">AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</div>
        </div>
    </>
}