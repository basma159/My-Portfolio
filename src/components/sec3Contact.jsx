import Buttons from "./buttons";
import Headsection from "./headSection";

function SecThree() {
    return (
        <section id="contact" className="w-full scroll-mt-28 my-10 flex justify-center items-center">
            <div className="container w-full flex flex-col justify-center items-center gap-5">
             <Headsection text1={"Say Hello"} text2={"Get In Touch"} text3={"Open to freelance projects, internships, and full-time opportunities. Let's build something great together."}/>
                <div className="w-full flex flex-col md:flex-row gap-5 text-sm px-5">
                    <div className="bg-linear-to-r from-blue-900 to-purple-900 ring-1 ring-blue-500 flex flex-col items-start gap-4
                    hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-2 transition-all duration-300 p-4 h-96 rounded-lg w-full md:w-1/2">
                        <span className="text-2xl">👩‍💻</span> 
                        <h3 className="text-2xl">Basma Ahmed</h3>
                        <p className="text-sm text-gray-900">Full-Stack Developer based in Egypt. I love building elegant, responsive web applications and am always open to new opportunities.</p>
                        <div className="flex gap-3 justify-start items-center text-sm">
                            <span>📍</span>
                            <div className="flex flex-col gap-1">
                                <p className="text-gray-950">Location</p>
                                <h2>Sohag,Egypt</h2>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-start items-center text-sm">
                            <span>📧</span>
                            <div className="flex flex-col gap-1">
                                <p className="text-gray-950">Email</p>
                                <h2>bsmtbdalawl@gmail.com</h2>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-start items-center text-sm">
                            <span>💼</span>
                            <div className="flex flex-col gap-1">
                                <p className="text-gray-950">Focus</p>
                                <h2>Front-End Developer</h2>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-5 bg-gray-900 ring-1 ring-amber-50 px-4 py-7 rounded-lg w-full md:w-1/2
                     hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-2 transition-all duration-300">
                        <h2 className="ml-0 text-xl">Send a Message</h2>
                        <form className="flex flex-col items-center gap-4">
                            <div className="w-full flex justify-center items-center gap-4">
                                <input type="text" placeholder="First Name" className="ring-1 ring-gray-500 rounded-lg p-2 w-1/2" required />
                                <input type="text" placeholder="Last Name" className="ring-1 ring-gray-500 rounded-lg p-2 w-1/2" required />
                            </div>
                              <div className="w-full flex justify-center items-center gap-4">
                                <input type="email" placeholder="Email" className="ring-1 ring-gray-500 rounded-lg p-2 w-1/2" required/>
                                <input type="tel" placeholder="Phone No. (optional)" className="ring-1 ring-gray-500 rounded-lg p-2 w-1/2" />
                            </div>
                            <textarea placeholder="Your Message..."  rows="8" className="w-full ring-1 ring-gray-500 rounded-lg p-2 resize-none"></textarea>
                            <Buttons type={"submit"} text={"Send Message"} className={"px-6 py-4 text-lg w-full"}/>
                        </form>
                    </div>
                </div>


            </div>
        </section>
    )
}
export default SecThree;