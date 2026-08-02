import Headsection from "./headSection";
import Card from "./cards";
import { useState } from "react";
const categories = [
    'All Projects',
    'Web Apps',
    'Portfolio'
]

function SecTwo() {
    const [activeCategory, setActiveCategory] = useState('All Projects')

    const projects = [
        {
            id: 1,
            category: "Web Apps",
            image: "/canvaproject-1.png",
            head: "Tech Store Landing Page",
            parap: "Designed and developed a modern landing page for an electronics store featuring a clean user interface, organized sections, and engaging hover animations. The project focuses on building responsive layouts and improving front-end development skills using HTML and CSS.",
            tech: ["HTML", "CSS", "Font Awesome"],
            linkPro: "https://basma159.github.io/project-1/",

        },
        {
            id: 2,
            category: "Web Apps",
            image: "/shotsproject-2.png",
            head: "Oak Furniture Landing Page",
            parap: "A modern and elegant landing page for a furniture store, designed to showcase furniture collections with a clean user interface and engaging CSS animations. The project focuses on creating an attractive shopping experience using only HTML and CSS.",
            tech: ["HTML", "CSS", "Font Awesome", "Google Fonts"],
            linkPro: "https://basma159.github.io/project-2/",

        },
        {
            id: 3,
            category: "Web Apps",
            image: "/shotsproject-3.png",
            head: " DigitalPro - Digital Marketing Landing Page",
            parap: "Designed and developed a responsive landing page for a digital marketing agency using Tailwind CSS. The project focuses on creating modern UI components, responsive layouts, interactive cards, and clean visual hierarchy.",
            tech: ["HTML", "Tailwind CSS", "Font Awesome"],
            linkPro: "https://basma159.github.io/project-1-tailwind-d-1/",

        },
        {
            id: 4,
            category: "Web Apps",
            image: "/shotsproject-4.png",
            head: " Andalus Civilization | Interactive Educational Website",
            parap: "Designed and developed an interactive educational website about the Andalusian civilization using Tailwind CSS and JavaScript. The project includes animated page transitions, multimedia integration, responsive layouts, image sliders, and interactive UI elements to provide an engaging educational experience.",
            tech: ["HTML", "CSS", "Tailwind CSS", "JS", "Plyr.js", "Swiper.js", "Font Awesome", "Google Fonts"],
            linkPro: "https://basma159.github.io/project--Andalusia/",

        },
        {
            id: 5,
            category: "Web Apps",
            image: "/shotsproject-5.png",
            head: " Holy Quran Web Application",
            parap: "Developed a fully interactive Quran web application using JavaScript and multiple public APIs. The application enables users to listen to Quran recitations, access Tafsir, watch Tadabbur videos, browse Quran pages, stream live Islamic TV channels, and listen to Quran radio through a responsive and intuitive interface.",
            tech: ["HTML", "CSS", "Tailwind CSS", "JS", "Fetch API", "HLS.js", "Font Awesome", "Google Fonts"],
            linkPro: "https://basma159.github.io/Quran-Kareem-Website/",

        },
        {
            id: 6,
            category: "Web Apps",
            image: "/canvaproject-6.png",
            head: " Rosy Kids - Kids Clothing E-commerce",
            parap: "A responsive e-commerce website for children's clothing that provides a smooth shopping experience. Users can browse products, manage their shopping cart and favorites, adjust item quantities, and view the total price. The project focuses on dynamic content rendering and interactive user experience using JavaScript and Local Storage.",
            tech: ["HTML", "CSS", "Tailwind CSS", "JS", "Local Storage", "Font Awesome",],
            linkPro: "https://basma159.github.io/Rosy-Kids/",

        },
    ]

    const filterdProjects = activeCategory === 'All Projects' ? projects : projects.filter(project => project.category === activeCategory)

    return (
        <section id="projects" className="w-full flex justify-center gap-3 scroll-mt-28 my-16 px-10">
            <div className="container flex flex-col items-center gap-6">
                <Headsection text1={"My Work"} text2={"Featured Projects"} text3={"Real-world applications built with modern technologies and best practices."} />
                <div className="w-fit ring ring-white flex gap-2 rounded-3xl px-3 py-2 text-sm">
                    {categories.map((category) => {
                        const isActive = activeCategory === category
                        return (
                            <button key={category} onClick={(() => setActiveCategory(category))}
                                className={`px-3 py-2 cursor-pointer  transition-all duration-300 ${isActive ? "bg-sky-700 rounded-3xl text-white " : "text-slate-700 hover:text-gray-300"}`}>
                                {category}
                            </button>
                        )
                    })}

                </div>
                <div className="min-h-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filterdProjects.map((project, index) => (
                        <Card key={project.id}
                            image={project.image}
                            head={project.head}
                            parah={project.parap}
                            tech={project.tech}
                            linkPro={project.linkPro} />
                    ))}

                </div>

            </div>
        </section>
    )
}
export default SecTwo;