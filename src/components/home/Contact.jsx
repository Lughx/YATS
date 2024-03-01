import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Contact() {
    return (
        <div>
            <div className="mt-4 mb-4">
                <div className="text-center font-semibold text-xl mb-3">
                    Contacto
                </div>
                <div className="text-lg flex justify-center items-center">
                    <div className="bg-black p-4 rounded-xl">
                        <div>
                            <span className="mr-2">
                                <FontAwesomeIcon className="" icon={faEnvelope} />
                            </span>
                            <span>
                                yahiralfredotap@gmail.com
                            </span>
                        </div>
                        <div className="mt-2">
                            <span className="mr-2">
                                <FontAwesomeIcon className="" icon={faPhone} />
                            </span>
                            <span>
                                +52 639-149-3767
                            </span>
                        </div>
                        <div className="flex justify-center items-center">
                            <a className="hover:text-gray-300 mr-5" href="https://www.linkedin.com/in/yahir-alfredo-tapia-sifuentes-966108291/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}