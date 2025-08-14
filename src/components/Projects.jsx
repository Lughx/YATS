import { ProjectList } from "./projects/ProjectsList";

export function Projects() {
    return (
        <div className="mt-4">
            <div className="text-center font-semibold text-xl mb-3">
                Projects
            </div>
            <div>
                <ProjectList />
            </div>
        </div>
    )
} 