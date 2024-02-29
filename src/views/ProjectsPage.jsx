import { useState } from "react";
import { ProjectList } from "../components/projects/ProjectsList";

export function ProjectsPage() {
    const [currentProject, setCurrentProject] = useState()

    return (
        <div>
            <div className="min-h-screen">
                <div className="container max-w-4xl w-full mx-auto grid gap-4 grid-cols-1">
                    <div className="grid gap-4 grid-cols-2">
                        <div>
                            <ProjectList 
                            currentProject={currentProject}
                            setCurrentProject={setCurrentProject}
                            />
                        </div>
                        <div>
                            {currentProject}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}