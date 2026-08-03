import Navbar from "./navbar";
import Links from "./links";
import LinkATage from "./linkATag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    function click() {
        setOpenMenu(!openMenu)
    }
    return (
        <header id="header" className="top-0 left-0 fixed z-50 w-full border-b-2 text-sm border-amber-50 bg-slate-900/50 backdrop-blur-lg
         h-16 px-6 md:px-20 flex justify-between items-center font-bold">
            <div className="flex justify-center items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-700"></span>
                <h2>Portfolio</h2>
            </div>
            <div className="block md:hidden ml-auto">
                <button onClick={click} className="menuBtn block text-2xl md:hidden cursor-pointer"><FontAwesomeIcon icon={faBars} /></button>
                <div className={`menu ${openMenu ? "flex" : "hidden"} w-full md:hidden transition-all duration-500
                 bg-gray-900 absolute top-full left-0 p-6 flex flex-col items-start gap-3`}>
                    <Navbar className={"w-full flex-col md:flex-row"} />
                    <Links className={"flex-row"} />
                </div>
            </div>

            <Navbar className={"hidden md:flex md:flex-row  md:border-0"} />
            <div className="hidden md:flex justify-center items-center gap-5 ">
                <Links className={"hidden md:flex md:flex-row md:border-0"} />
                <LinkATage href="#contact" text="Let's Connect" className={""} />
            </div>

        </header>
    )
}

export default Header;