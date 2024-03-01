export function Navbar() {
    return (
        <nav className="mb-3 backdrop-blur-[2px] fixed z-10 w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-end mx-auto p-4">
                <div className="w-full block w-auto">
                    <ul className="font-medium flex p-0 mt-4 rounded-lg flex-row space-x-8 rtl:space-x-reverse mt-0 border-0">
                        <li>
                            <a href="#home" className="block text-white rounded hover:text-blue-700 p-0">Inicio</a>
                        </li>
                        <li>
                            <a href="#aboutMe" className="block text-white rounded hover:text-blue-700 p-0">Sobre mí</a>
                        </li>
                        <li>
                            <a href="#projects" className="block text-white rounded hover:text-blue-700 p-0">Proyectos</a>
                        </li>
                        <li>
                            <a href="#contact" className="block text-white rounded hover:text-blue-700 p-0">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}