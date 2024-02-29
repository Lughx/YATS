import { PrepaWeb } from "./projects/PrepaWeb";

export function ProjectCard({ labels, title, description, technologies, setCurrentProject }) {
    return (
        <div onMouseEnter={() => setCurrentProject(<PrepaWeb />)} className="bg-gray-900 p-4 rounded-xl mb-3 cursor-pointer">
            <div className="flex">
                {labels.map(label => (
                    <div className="bg-gray-800 rounded-full px-3 flex font-semibold text-sm mb-2">
                        {label}
                    </div>
                ))}
            </div>
            <div className="font-semibold text-lg">
                {title}
            </div>
            <div>
                {description}
            </div>
            <div className="flex mt-">
                {technologies.map(technology => (
                    <div className="bg-gray-800 rounded-full px-3 flex font-semibold text-sm mr-2 mt-2">
                        {technology}
                    </div>
                ))}
            </div>
        </div>
    )
}