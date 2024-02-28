import { faFacebook, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
    return (
        <div>
            <div className="mainHeader h-[500px] bg-gray-900 p-4 flex justify-center items-center">
                <div>
                    <div className="mt-4 text-3xl font-md"> {/* mx-auto */}
                        Yo soy <span className="font-bold text-blue-600">Yahir Tapia</span>
                    </div>
                    <div className="mt-3 text-xl text-center">
                        <a className="hover:text-gray-300 mr-5" href="https://www.linkedin.com/in/yahir-alfredo-tapia-sifuentes-966108291/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a className="hover:text-gray-300 mr-5" href="https://github.com/Luughx" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className="hover:text-gray-300 mr-5" href="https://www.linkedin.com/in/yahir-alfredo-tapia-sifuentes-966108291/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a className="hover:text-gray-300" href="https://www.linkedin.com/in/yahir-alfredo-tapia-sifuentes-966108291/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}