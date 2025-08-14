import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ProjectCard({ project }) {
    return (
        <div class="relative">
            <div class="md:flex items-center md:space-x-4 mb-3">
                <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                    <div class="flex items-center justify-center w-8 h-8 rounded-full bg-slate-500 shadow md:order-1">
                    </div>
                    <time class="font-caveat font-medium text-xl text-indigo-500 md:w-28">{project.date}</time>
                </div>
                <div class=" p-4 rounded shadow ml-14 md:ml-44 grid gap-5 grid-cols-1 md:grid-cols-3">
                    <div className="col-span-1 rounded-xl w-full h-full overflow-hidden">
                        <img className=" rounded-xl w-full h-full object-cover img-project" src={project.imageUrl} alt={project.title} />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <div className="font-semibold text-lg">
                            {project.title} <span className="text-xs text-slate-600">{project.date}</span>
                        </div>
                        <div className="flex flex-wrap">
                            {project.technologies.map(technology => (
                                <div className={`${technology.class} rounded-full px-3 flex font-semibold text-xs py-1 px-2 mr-2 mt-2`}>
                                    <div className="mr-1">
                                        {technology.icon}
                                    </div>
                                    {technology.name}
                                </div>
                            ))}
                        </div>
                        <div className="text-slate-400 font-medium">
                            {project.description}
                        </div>
                        <div className="mt-2">
                            {project.buttons.github &&
                                <a className="flex inline-flex py-1 px-2 bg-black rounded-lg mr-2 text-sm" href={project.buttons.github.link} target="blank">
                                    <div>
                                        <FontAwesomeIcon className="mr-1" icon={faGithub} />
                                        Github
                                    </div>
                                </a>}
                            {project.buttons.web &&
                                <a className="flex inline-flex py-1 px-2 bg-sky-950 rounded-lg text-sm" href={project.buttons.web.link} target="blank">
                                    <div>
                                        <FontAwesomeIcon className="mr-1" icon={faGlobe} />
                                        Ver
                                    </div>
                                </a>}
                            {project.buttons.download &&
                                <a className="flex inline-flex py-1 px-2 bg-yellow-700 rounded-lg text-sm" href={project.buttons.download.link} target="blank">
                                    <div>
                                        <FontAwesomeIcon className="mr-1" icon={faDownload} />
                                        Descargar
                                    </div>
                                </a>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        /* <div  className="p-4 rounded-xl mb-3 backdrop-blur-lg">
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                <div className="col-span-1 rounded-xl w-full h-full overflow-hidden">
                    <img className=" rounded-xl w-full h-full object-cover img-project" src={project.imageUrl} alt={project.title} />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <div className="font-semibold text-lg">
                        {project.title} <span className="text-xs text-slate-600">{project.date}</span>
                    </div>
                    <div className="flex flex-wrap">
                        {project.technologies.map(technology => (
                            <div className={`${technology.class} rounded-full px-3 flex font-semibold text-xs py-1 px-2 mr-2 mt-2`}>
                                <div className="mr-1">
                                    {technology.icon}
                                </div>
                                {technology.name}
                            </div>
                        ))}
                    </div>
                    <div className="text-slate-400 font-medium">
                        {project.description}
                    </div>
                    <div className="mt-2">
                        {project.buttons.github && 
                            <a className="flex inline-flex py-1 px-2 bg-black rounded-lg mr-2 text-sm" href={project.buttons.github.link} target="blank">
                            <div>
                            <FontAwesomeIcon className="mr-1" icon={faGithub} />
                                Github
                            </div>
                        </a>}
                        {project.buttons.web && 
                            <a className="flex inline-flex py-1 px-2 bg-sky-950 rounded-lg text-sm" href={project.buttons.web.link} target="blank">
                            <div>
                            <FontAwesomeIcon className="mr-1" icon={faGlobe} />
                                Ver
                            </div>
                        </a>}
                        {project.buttons.download && 
                            <a className="flex inline-flex py-1 px-2 bg-yellow-700 rounded-lg text-sm" href={project.buttons.download.link} target="blank">
                            <div>
                            <FontAwesomeIcon className="mr-1" icon={faDownload} />
                                Descargar
                            </div>
                        </a>}
                    </div>
                </div>
            </div>
        </div> */
    )
}