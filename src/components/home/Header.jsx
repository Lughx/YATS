import { faFacebook, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header() {
    return (
        <div id="home">
            <div className="h-[500px] p-4 flex justify-center items-center">
                <div>
                    <div className="mt-4 text-3xl font-md"> {/* mx-auto */}
                        Soy <span className="font-bold text-primary-1">Yahir Tapia</span>
                    </div>
                    <div className="">
                        <div className="w-2/3 my-2 text-lg">
                            <p>
                                Estudiante apasionado por la tecnología, siempre dispuesto a
                                desarrollar nuevas habilidades
                            </p>
                        </div>
                    </div>
                    <div className="mt-3 text-xl">
                        <a className="hover:text-blue-700 mr-5" href="https://www.linkedin.com/in/yahir-t-966108291/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a className="hover:text-blue-700 mr-5" href="https://github.com/Lughx" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}