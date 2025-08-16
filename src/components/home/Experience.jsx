import { faDownload, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Experiencie() {
    return (
        <div id="experiences">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-green-300 before:to-transparent">
                <div class="relative">
                    <div class="md:flex items-center md:space-x-4 mb-3">
                        <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                            <div class="flex items-center justify-center w-8 h-8 rounded-full bg-primary-2 shadow md:order-1">
                            </div>
                            <time class="font-caveat font-medium text-xl text-primary-1 md:w-28">January 2024 <br />- <br /> June 2024</time>
                        </div>
                        <div class=" p-4 rounded shadow ml-14 md:ml-44 grid gap-5 grid-cols-1 md:grid-cols-3">
                            <div className="col-span-1 bg-slate-800 p-4 rounded-xl w-full h-full overflow-hidden">
                                <img className=" rounded-xl w-full h-full object-cover img-project" src={"UB-Logo.png"} alt={"Urbrand"} />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <div className="font-semibold text-lg">
                                    URBRAND <span className="text-xs text-slate-600">Full stack intern</span>
                                </div>
                                <div className="text-slate-400 font-medium">
                                    Full stack developer, developing and providing support to web applications on the frontend and the backend
                                </div>
                                <div className="mt-2">
                                        <a className="flex inline-flex py-1 px-2 bg-sky-950 rounded-lg text-sm" href={"https://urbrand.com.mx/"} target="blank">
                                            <div>
                                                <FontAwesomeIcon className="mr-1" icon={faGlobe} />
                                                Ver
                                            </div>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}