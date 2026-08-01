import Buttons from "./buttons";
import Links from "./links";
import Navbar from "./navbar";

function Footer() {
    return (
        

        <footer id="footer" className=" flex flex-col items-center bg-black/35 scroll-mt-28 mt-10 px-6 md:px-20">

            <div className="footer-top  flex flex-col md:flex-row justify-between gap-10 w-full md:items-center border-t-2 border-gray-900 py-6">
                <div className="flex flex-col justify-start gap-7">
                    <div className="flex justify-start items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-blue-700"></span>
                        <h2>Portfolio</h2>
                    </div>
                    <p className="text-gray-600 text-sm max-w-xs">Full-Stack Developer building beautiful, responsive web experiences with modern front-end technologies.</p>
                    <Links className={"justify-start"} />
                </div>
                
                <div className=" flex flex-col items-start">
                    <h2>Navigation</h2>
                    <Navbar className={"flex-col items-start text-gray-600 gap-3 max-w-xs"} />
                </div>
                <div className=" flex flex-col justify-start">
                    <h2>What I Do</h2>
                    <ul className="text-gray-600 space-y-5">
                        <li>Front-End Development</li>
                        <li>Responsive Web Design</li>
                        <li>React & Tailwind Projects</li>
                        <li>Component Architecture</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom w-full flex justify-center items-center border-t-2 border-gray-900 py-6">
                
                <p className="text-xs text-gray-600">&copy; 2026 Basma Ahmed - All Rights Reserved</p>
            </div>
        </footer>
    )
}
export default Footer;