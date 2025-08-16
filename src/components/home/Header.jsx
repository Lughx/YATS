import { faFacebook, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Technologies } from "./Technologies";

export function Header() {
    return (
        <div id="home">
            <div className="h-[400px] p-4 flex justify-center items-center">
                <div>
                    <div className="mt-4 text-3xl font-md"> {/* mx-auto */}
                        I'm <span className="font-bold text-primary-1">Yahir Tapia</span>
                    </div>
                    <div className="">
                        <div className="w-2/3 my-2 text-lg">
                            <p>
                                Student passionate about technology, always willing to develop new skills
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
                    {/* <div className="w-2/3">
                        <Technologies/>
                    </div> */}
                </div>
            </div>
        </div>
    )
}