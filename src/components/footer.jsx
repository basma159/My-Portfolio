import Links from "./links";
import Navbar from "./navbar";

function Footer() {
    return (

        <footer id="footer" className="w-full scroll-mt-28 mt-10 px-6 md:px-15" >

                <div className="footer-top  flex flex-col md:flex-row justify-between gap-10 w-full md:items-center border-t-2 border-gray-900 py-6">
                    <div className="flex flex-col justify-start gap-7">
                        <div className="flex justify-start items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-blue-700"></span>
                            <h2>Portfolio</h2>
                        </div>
                        <p className="text-gray-400 text-sm max-w-xs">Front-End Developer building responsive and modern web applications with React, JavaScript, and Tailwind CSS.</p>
                        <Links className={"justify-start text-gray-400 "} />
                    </div>

                    <div className=" flex flex-col items-start gap-3">
                        <h2>Navigation</h2>
                        <Navbar className={"flex-col items-start text-gray-400 gap-3 max-w-xs"} />
                    </div>
                    <div className=" flex flex-col justify-start gap-3">
                        <h2>What I Do</h2>
                        <ul className="text-gray-400 space-y-5">
                            <li>React Development</li>
                            <li>Responsive Web Design</li>
                            <li>JavaScript Applications</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom w-full flex justify-center items-center border-t-2 border-gray-900 py-6">

                    <p className="text-xs text-gray-400">
                        &copy;{new Date().getFullYear()} Basma Ahmed - All Rights Reserved</p>
                </div>

        </footer>
    )
}
export default Footer;