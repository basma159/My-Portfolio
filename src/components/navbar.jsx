

function Navbar({className}){
    const classLink ="block hover:text-blue-800 w-full text-left "
    
return (
    <nav >
        <ul className={` flex justify-center items-center gap-5 ${className}`}>
            <li className="w-full "><a href="#home" className={classLink}>Home</a></li>
            <li className="w-full "><a href="#skills" className={classLink}>Skills</a></li>
            <li className="w-full "><a href="#projects" className={classLink}>Projects</a></li>
            <li className="w-full "><a href="#contact" className={classLink}>Contact</a></li>

        </ul>
    </nav>
)
}
export default Navbar;