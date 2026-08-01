import Buttons from "./buttons";

function EmailDiv (){
    return(
        <div>
             <div className="footer-top flex flex-col md:flex-row md:justify-between gap-5 px-6 md:px-20">
                <div>
                    <h2>Stay Updated</h2>
                    <p className="text-gray-600">Subscribe to see my latest projects &amp; articles. </p>
                </div>
                <div className="flex md:justify-center md:items-center gap-3">
                    <input type="email" placeholder="Enter Your Email" className="ring-2 ring-gray-300 rounded-3xl px-4 py-2 outline-0 focus-within:ring-blue-700" />
                    <Buttons className={"px-4 py-3 ring-2 ring-blue-700 hover:ring-transparent"} text="Subscribe" />

                </div>
            </div>
        </div>
    )
}

export default EmailDiv;