import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Contact() {
    return (
        <div>
            <div className="mt-4 mb-4 text-primary-1">
                <div className="text-lg flex justify-center items-center">
                    <div>
                        <span className="mr-2">
                            <FontAwesomeIcon className="" icon={faEnvelope} />
                        </span>
                        <span>
                            yahir@yats.dev
                        </span>
                    </div>
                    <div className="flex justify-center items-center ml-5">
                        <a className="hover:text-gray-300 mr-5" href="https://www.linkedin.com/in/yahir-alfredo-tapia-sifuentes-966108291/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}