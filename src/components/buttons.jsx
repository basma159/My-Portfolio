
function Buttons({ text ,className ,type}) {
    return (
        <div>
            <button type={type} className={`bg-blue-700 cursor-pointer text-white rounded-3xl px-4 py-1 text-sm shadow-sm shadow-blue-500 transition-all duration-500
                hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500 ${className}`}>
                 {text}</button>
        </div>
    )
}

export default Buttons;