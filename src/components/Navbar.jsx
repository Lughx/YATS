export function Navbar() {
    return (
        <nav className="mb-3 backdrop-blur-[2px] fixed z-10 w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
                <div className="w-full flex justify-center">
                    <ul className="font-medium flex p-0 mt-4 rounded-lg flex-row space-x-8 rtl:space-x-reverse mt-0 border-0">
                        <li>
                            <a href="#home" className="text-white rounded hover:text-blue-700 p-0">Home</a>
                        </li>
                        <li>
                            <a href="#technologies" className="text-white rounded hover:text-blue-700 p-0">Technologies</a>
                        </li>
                        <li>
                            <a href="#experiences" className="text-white rounded hover:text-blue-700 p-0">Experiences</a>
                        </li>
                        <li>
                            <a href="#projects" className="text-white rounded hover:text-blue-700 p-0">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white rounded hover:text-blue-700 p-0">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}