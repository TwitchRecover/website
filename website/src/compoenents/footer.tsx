import { Link } from "react-router-dom"
import { BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";


function Footer() {
    return ( 
        <footer className="bg-gray-400">
            <div className="max-w-7xl mx-auto py-8 flex flex-row items-start md:items-center justify-center ">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-row items-center p-2 sm:p-4 font-bold text-lg md:text-xl">
                    <h3 className="font-bold text-lg md:text-xl  w-16 md:w-auto pr-2">Discord</h3>
                        <a href="https://discord.twitchrecover.com" target="_blank" rel="noopener noreferrer"><FaDiscord size="3em" color="black"/></a>
                    </div>
                    <div className="flex flex-row items-center p-2 sm:p-4">
                        <h3 className="font-bold text-lg md:text-xl w-16 md:w-auto pr-2">Github</h3>
                        <a href="https://github.com/TwitchRecover/TwitchRecover" target="_blank" rel="noopener noreferrer"><BsGithub size="3em" color="black"/></a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row p-2 sm:p-4">
                    <h3 className="font-bold text-lg pr-2">Credits</h3>
                    <ul className="font-medium">
                        <li><a href="https://github.com/daylamtayari" target="_blank" rel="noopener noreferrer" className="underline">Daylam Tayari</a> Developer of Twitch Recover.</li>
                        <li><a href="https://github.com/chakeson" target="_blank" rel="noopener noreferrer" className="underline">CH Åkeson</a> developer of this website</li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}

export default Footer;