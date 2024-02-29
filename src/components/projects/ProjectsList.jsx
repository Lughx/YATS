import { ProjectCard } from "./ProjectCard";

export function ProjectList({ currentProject, setCurrentProject }) {
    return (
        <div>
            <ProjectCard
                labels={["web"]}
                title={"Paladinslx"}
                description={"Creacion de "}
                technologies={["Typescript", "nodejs", "vuejs"]}
                setCurrentProject={setCurrentProject}
            />
            <ProjectCard
                labels={["web"]}
                title={"Prepa 2030"}
                description={"Creacion de "}
                technologies={["Typescript", "nodejs", "vuejs"]}
                setCurrentProject={setCurrentProject}
            />
            <ProjectCard
                labels={["web"]}
                title={"Videojuego 2D unity"}
                description={"Creacion de "}
                technologies={["Typescript", "nodejs", "vuejs"]}
                setCurrentProject={setCurrentProject}
            />
            <ProjectCard
                labels={["web"]}
                title={"Paladinslx"}
                description={"Creacion de "}
                technologies={["Typescript", "nodejs", "vuejs"]}
                setCurrentProject={setCurrentProject}
            />
            <ProjectCard
                labels={["web"]}
                title={"Paladinslx"}
                description={"Creacion de "}
                technologies={["Typescript", "nodejs", "vuejs"]}
                setCurrentProject={setCurrentProject}
            />
        </div>
    )
}