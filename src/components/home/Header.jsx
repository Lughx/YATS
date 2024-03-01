import { faFacebook, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
    return (
        <div id="home">
            <div className="mainHeader h-[500px] p-4 flex justify-center items-center">
                <div>
                    <div className="mt-4 text-3xl font-md text-center"> {/* mx-auto */}
                        Soy <span className="font-bold text-blue-600">Yahir Tapia</span>
                    </div>
                    <div className="w-[450px] my-2 text-lg text-center">
                        <p>
                            Estudiante apasionado por la tecnología, siempre dispuesto a
                            desarrollar nuevas habilidades
                        </p>
                    </div>
                    <div className="mt-3 text-xl text-center">
                        <a className="hover:text-blue-700 mr-5" href="https://www.linkedin.com/in/yahir-alfredo-tapia-sifuentes-966108291" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a className="hover:text-blue-700 mr-5" href="https://github.com/Luughx" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className="hover:text-blue-700 mr-5" href="https://www.facebook.com/yahir.tapia.37669/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a className="hover:text-blue-700" href="https://www.instagram.com/yhtps?igsh=ZDI4a3VlMnd6OW9o" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}