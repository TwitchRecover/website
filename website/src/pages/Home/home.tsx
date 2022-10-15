import { useEffect, useState } from "react";
import { BsDownload } from "react-icons/bs"
import Cardsection from "./cardsection";
import { getOS } from "../../utils/getos";
import { fetchRelease } from "../../utils/fetchRelease";
// TODO set up download and have it pick based on detected OS
// TODO set up the browser download tool or image of the GUI

function Home() {
    const [ release, setRelease ] = useState<string>("");

    useEffect(() => {
        const callFetchRelease = async () => {
            let fetchData = await fetchRelease();
            if (typeof fetchData !== "string") {
                setRelease(fetchData[0].tag_name);
            }
        }
        callFetchRelease();

        return ()=>{}; // Clean up.
    },[]);

    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        //console.log("Handle download");
        // Should handle download for detected OS.
    }

    return ( 
        <>
        <main className="flex flex-col md:flex-row justify-start md:justify-center items-center fullscreen70">
            <div className="mx-6 md:ml-6 md:mr-0 lg:ml-12">
                <h1 className="font-bold text-3xl md:text-7xl mb-4 md:mb-6 mt-6 md:mt-0">Twitch Recover</h1>
                <p className="text-lg md:text-2xl md:w-4/5 mb-10 md:mb-24">Twitch Recover is a free tool that allows you to view, recover and download all types of Twitch videos.</p>
            
                <button onClick={(e)=>handleClick(e)} className="bg-slate-700 rounded-3xl flex items-center justify-between text-white w-3/4 sm:w-6/12 md:w-7/12 lg:w-5/12 p-4 sm:p-8 md:p-6 mb-8 md:m-20">
                    <div className="flex flex-col items-start text-left">
                        <h3 className="font-medium text-lg md:text-xl">Download Twitch Recover</h3>
                        <a href="https://github.com/TwitchRecover/TwitchRecover/releases" target="_blank" rel="noopener noreferrer"><p>{`Version ${release} ${getOS()}`}</p></a>
                    </div>
                    <div className="text-4xl md:text-5xl pr-2 md:pr-0"><BsDownload /></div>
                </button>
            </div>
            <div className="mx-6 md:ml-0 md:mr-6 w-96 h-96 bg-orange-600">
                Input vod tool
                or image of the GUI tool
            </div>
        </main>
        <Cardsection/>
        </>
     );
}

export default Home;