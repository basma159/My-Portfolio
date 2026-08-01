function Headsection({text1,text2,text3}) {
    return (
            <div className="flex flex-col justify-center items-center gap-4 mb-10">
                <span className="text-purple-800 text-sm">{text1}</span>
                <h2 className="border-b-2 border-blue-800 text-3xl pb-1">{text2}</h2>
                <p className="text-gray-700 max-w-xs text-center text-xs">{text3}</p>
            </div>
    )
}

export default Headsection;