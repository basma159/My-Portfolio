import { useEffect, useState } from "react";
import LinkATage from "./linkATag";

const jobs = ["Front-End Developer",
    "React Developer",
    "Full-Stack Developer",
]
function Main() {
    //  Typing Animation أو Typewriter Effect.
    const [text, setText] = useState("") /// الكلام الظاهر في الشاشة
    const [jobIndex, setJobIndex] = useState(0)///رقم الوظيفة الحالية 
    const [isDeleting, setIsDeleting] = useState(false) ///false => writing ,true => deleting

    useEffect(() => {
        const currentJob = jobs[jobIndex]
        const timer = setInterval(() => {
            if (!isDeleting) {
                setText(currentJob.substring(0, text.length + 1))
                if (text.length === currentJob.length) {
                    clearInterval(timer)
                    setTimeout(() => {
                        setIsDeleting(true)
                    }, 1000)
                }
            }
            else {
                setText(currentJob.substring(0, text.length - 1))
                if (text === "") {
                    setIsDeleting(false)
                    setJobIndex((prev) => (prev + 1) % jobs.length)
                }
            }
        }, 100)

        return () => clearInterval(timer)

    }, [text, isDeleting, jobIndex])

    return (
        <main id="home" className="w-full min-h-screen mt-28 mx-auto px-6 md:px-20 flex scroll-mt-28 my-10">
            <div className="container min-h-screen w-full mx-auto flex flex-col md:flex-row justify-between gap-10 ">
                <div className="left-side w-full mx-auto md:w-1/2 flex flex-col gap-5 ">
                    <div className="w-fit flex justify-center items-center gap-2 ring-1 ring-blue-950 rounded-3xl px-4 py-2">
                        <span className="w-2 h-2 rounded-lg bg-blue-400"></span>
                        <h6 className="text-gray-500 text-sm">Available for opportunities</h6>

                    </div>
                    <h2 className="text-4xl md:text-4xl lg:text-6xl font-bold">Hi! I'm <span className="bg-linear-to-r from-blue-400 via-purple-500 to-green-300 bg-clip-text text-transparent">Basma Ahmed</span> </h2>
                    <h2 className=" flex gap-2 text-3xl md:text-4xl lg:text-5xl bg-linear-to-l from-blue-400 to-purple-400 bg-clip-text text-transparent">{text}<span className="animate-pulse">|</span></h2>
                    <p className="text-gray-400 font-semibold">Crafting <span className="text-white">beautiful, responsive web applications</span> with modern front-end technologies. Passionate about clean code, elegant UI, and delightful user experiences.</p>
                    <div className="flex  items-center gap-3">

                        <LinkATage href="#projects" className={"px-4 py-2 ring-1 ring-blue-700 hover:ring-transparent"} text="View My Projects" />

                        <a href="#contact" className="ring-1 ring-gray-700 text-white rounded-3xl px-4 py-2 text-sm  transition-all duration-500
                hover:ring-blue-600">Get In Touch</a>
                    </div>
                </div>


                <div className="right-side w-full mx-auto md:w-1/2 flex flex-col md:items-center md:py-16 ">
                    <div className="w-72 bg-black/45 ring-1 ring-blue-400 shadow-2xl shadow-blue-400/40 rounded-2xl p-7 space-y-2 relative ml-0 md:ml-20">
                        <div className="floating ring-1 ring-white/45 bg-gray-950 text-blue-500 text-sm w-fit rounded-2xl px-3 py-1 absolute z-10 -right-3 -top-3  transition-all duration-1000">
                            <h2> Frontend Dev</h2>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="w-3 h-3 rounded-lg bg-red-400"></span>
                            <span className="w-3 h-3 rounded-lg bg-yellow-400"></span>
                            <span className="w-3 h-3 rounded-lg bg-green-400"></span>
                            <h6 className="text-gray-500 text-sm font-semibold ml-2">basma.jsx</h6>
                        </div>
                        <div className="flex gap-3 text-sm">
                            <h3 className="text-purple-400">const</h3>
                            <h3 className="text-blue-400">developer</h3>
                            <h3 className="text-gray-300">=</h3>
                            <h3 className="text-yellow-300">{"{"}</h3>
                        </div>
                        <div className="flex gap-1 text-sm ml-6">
                            <h3 className="text-cyan-400">name :</h3>
                            <h3 className="text-green-400">"Basma Ahmed"</h3>
                            <h3 className="text-gray-500">,</h3>
                        </div>
                        <div className="flex gap-1 text-sm ml-6 ">
                            <h3 className="text-cyan-400">role :</h3>
                            <h3 className="text-green-400">"Front-End-Dev"</h3>
                            <h3 className="text-gray-500">,</h3>
                        </div>
                        <div className="flex flex-col gap-1 text-sm">
                            <div className="flex gap-1 text-sm ml-6 ">
                                <h3 className="text-cyan-400">stack :</h3>
                                <h3 className="text-yellow-300">{"["}</h3>
                            </div>

                            <div className="flex gap-1 text-sm ml-6">
                                <h3 className="text-green-400">"HTML"</h3>
                                <h3 className="text-green-400">,</h3>
                                <h3 className="text-green-400">"CSS"</h3>
                                <h3 className="text-green-400">,</h3>
                            </div>
                            <div className="flex gap-1 text-sm ml-6">
                                <h3 className="text-green-400">"JavaScript"</h3>
                                <h3 className="text-green-400">,</h3>
                                <h3 className="text-green-400">"React"</h3>
                                <h3 className="text-green-400">,</h3>
                            </div>
                            <div className="flex gap-1 text-sm ml-6">
                                <h3 className="text-green-400">"Tailwind"</h3>

                            </div>
                            <h3 className="text-yellow-300 ml-4">{"]"}</h3>
                            <h3 className="text-yellow-300">{"}"}</h3>
                        </div>
                        <div className="flex gap-2 text-sm">
                            <h3 className="text-white/40">{">"}</h3>
                            <h3 className="text-blue-600 float-start">ready_to_build( )</h3>
                            <h3 className="text-blue-500">✓</h3>
                        </div>
                        <div className="floating ring-1 ring-white/45 bg-gray-950  text-blue-500 text-sm w-fit rounded-2xl px-3 py-1 absolute z-10 -left-3 -bottom-3  transition-all duration-1000">
                            <h2> React Dev</h2>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}


export default Main;