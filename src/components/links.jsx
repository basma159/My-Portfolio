import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Links({className}) {
    const socialClass = "flex justify-center items-center text-gray-700 ring-1 ring-gray-500 w-6 h-6 p-3 rounded-full hover:ring-blue-700 hover:text-blue-700 ";

    return (
        <div>
            <div className={`flex justify-center items-center gap-3 ${className}`}>
                <a href="https://www.linkedin.com/in/basma-ahmed-09366a27b/" target="_blank" rel="noopener noreferrer" className={socialClass}><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://www.facebook.com/basma.ahmed.711951" target="_blank" rel="noopener noreferrer" className={socialClass}><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://wa.me/201146663875" target="_blank" rel="noopener noreferrer" className={socialClass}><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a href="https://github.com/basma159" target="_blank" rel="noopener noreferrer" className={socialClass}><FontAwesomeIcon icon={faGithub} /></a>

            </div>
        </div>
    )
}

export default Links;