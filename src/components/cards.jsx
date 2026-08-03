import LinkATage from "./linkATag";

function Card({ image, head, parah, tech, linkPro }) {
    return (
        <div className="w-full bg-gray-900 ring-1 flex flex-col gap-4 ring-amber-100 rounded-lg md:hover:shadow-lg md:hover:shadow-amber-100
        md:hover:-translate-y-2 transition-all duration-300 relative group">
            <div className="w-full relative overflow-hidden rounded-t-lg">
                <span className="text-sm ring-1 ring-green-500 text-green-400 bg-transparent rounded-xl p-1 absolute top-2 left-2 z-10">completed</span>
                <img src={image} alt={head} className="w-full object-cover h-52 md:group-hover:scale-110 transition-transform duration-300 "/>
                <LinkATage href={linkPro} text={"View project"} className={"absolute z-10 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 top-1/2 left-1/2 text-lg py-2 -translate-x-1/2 -translate-y-1/2"} />
                <div className="absolute inset-0 md:bg-black/50 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 rounded-t-lg">

                </div>
            </div>
            <div className="flex flex-col gap-8 p-4">
                <h2 className="h-12">{head}</h2>
                <p className="text-xs text-gray-500 line-clamp-3">{parah}</p>
                <div className="flex gap-2 flex-wrap">

                    {tech.map((item, index) => (
                        <span key={index}
                            className="text-gray-500 bg-blue-950 ring-1 ring-blue-400 rounded-lg px-2 py-1 text-xs cursor-pointer">
                            {item}
                        </span>
                    ))}

                </div>
            </div>
        </div>
    )
}
export default Card;