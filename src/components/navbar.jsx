

function Navbar({className,onClick }){
    const classLink ="block hover:text-blue-800 w-full text-left "
    
return (
    <nav >
        <ul className={` flex justify-center items-center gap-5 ${className}`}>
            <li className="w-full "><a href="#home" className={classLink} onClick={onClick}>Home</a></li>
            <li className="w-full "><a href="#skills" className={classLink} onClick={onClick}>Skills</a></li>
            <li className="w-full "><a href="#projects" className={classLink} onClick={onClick}>Projects</a></li>
            <li className="w-full "><a href="#contact" className={classLink} onClick={onClick}>Contact</a></li>

        </ul>
    </nav>
)
}
export default Navbar;