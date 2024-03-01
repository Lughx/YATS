import { ProjectCard } from "./ProjectCard";

export function ProjectList() {
    const projects = [
        {
            labels: ["Web"],
            title: "Paladinslx",
            date: "Enero 2024",
            imageUrl: "/projects/paladinslx.jpg",
            description: "Paladinslx es una plataforma que facilita el acceso a las estadísticas de los jugadores del videojuego Paladins",
            buttons: {
                github: {
                    link: "https://github.com/Luughx/Paladinslx-frontend"
                },
                web: {
                    link: "https://www.paladinslx.com"
                }
            },
            technologies: [
                {
                    name: "Next.js",
                    class: "bg-black",
                    icon: <svg className="size-4" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="256" height="256" preserveAspectRatio="xMidYMid"><defs><linearGradient id="c" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%"><stop offset="0%" stop-color="#FFF" /><stop offset="100%" stop-color="#FFF" stop-opacity="0" /></linearGradient><linearGradient id="d" x1="50%" x2="49.953%" y1="0%" y2="73.438%"><stop offset="0%" stop-color="#FFF" /><stop offset="100%" stop-color="#FFF" stop-opacity="0" /></linearGradient><circle id="a" cx="128" cy="128" r="128" /></defs><mask id="b" fill="#fff"><use href="#a" /></mask><g mask="url(#b)"><circle cx="128" cy="128" r="128" /><path fill="url(#c)" d="M212.634 224.028 98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z" /><path fill="url(#d)" d="M163.556 76.8h17.067v102.4h-17.067z" /></g></svg>
                },
                {
                    name: "Tailwind CSS",
                    class: "bg-[#003159]",
                    icon: <svg className="size-4" viewBox="0 0 256 154" width="256" height="154" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" > <defs ><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"> <stop stop-color="#2298BD" offset="0%"></stop> <stop stop-color="#0ED7B5" offset="100%"></stop> </linearGradient></defs> <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)"></path></svg>
                },
                {
                    name: "Node.js",
                    class: "bg-[#144701]",
                    icon: <svg className="size-4" viewBox="0 0 256 289" width="256" height="289" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385Zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.02-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571Z" fill="#539E43" /></svg>
                },
                {
                    name: "Express.js",
                    class: "bg-black",
                    icon: <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64"><path fill="#fff" d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" /></svg>
                },
                {
                    name: "Mongodb",
                    class: "bg-[#144701]",
                    icon: <svg className="size-4" viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="256" height="549" preserveAspectRatio="xMidYMid"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z" /></svg>
                }
            ],
        },
        {
            labels: ["Simulador"],
            title: "Simulador de F1",
            date: "Diciembre 2023",
            imageUrl: "/projects/game f1.jpg",
            description: "Simulador de automóvil de Fórmula 1 que circula a la velocidad limite a través de una calle generada por una función dada",
            buttons: {
                github: {
                    link: "https://github.com/Luughx/Matlab-F1"
                }
            },
            technologies: [
                {
                    name: "Python",
                    class: "bg-[#9c9c0c]",
                    icon: <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" fill="none" viewBox="0 0 64 64"><path fill="url(#a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"/><path fill="url(#b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"/><defs><linearGradient id="a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs></svg>
                },
                {
                    name: "Matlab",
                    class: "bg-[#630000]",
                    icon: <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 48 48"><linearGradient id="a" x1="22.645" x2="26.757" y1="10.881" y2="23.854" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4adddf"/><stop offset=".699" stop-color="#3f5352"/><stop offset=".863" stop-color="#442729"/></linearGradient><path fill="url(#a)" d="m21 27-7-6s1-1.5 2.5-3 2.736-1.852 4.5-3c3.511-2.284 6.5-12 11-12L21 27z"/><linearGradient id="b" x1="1" x2="37.775" y1="27.033" y2="27.033" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4adddf"/><stop offset=".792" stop-color="#3f5352"/><stop offset="1" stop-color="#442729"/></linearGradient><path fill="url(#b)" d="M11 33.066 1 26l13-5 7.277 5.465L14 32.066z"/><linearGradient id="c" x1="11" x2="47" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset=".206" stop-color="#53140f"/><stop offset=".3" stop-color="#84360f"/><stop offset=".413" stop-color="#b85b10"/><stop offset=".511" stop-color="#df7610"/><stop offset=".59" stop-color="#f68710"/><stop offset=".639" stop-color="#ff8d10"/><stop offset=".729" stop-color="#fd8a10"/><stop offset=".8" stop-color="#f58010"/><stop offset=".865" stop-color="#e86f10"/><stop offset=".925" stop-color="#d65811"/><stop offset=".982" stop-color="#c03a11"/><stop offset="1" stop-color="#b72f11"/></linearGradient><path fill="url(#c)" d="M32 3c5 0 13 27 15 34 0 0-7.017-6.63-11-6s-5.47 6.548-9.725 10.756C23.5 44.5 21 45 21 45s-.206-8.124-5-11c-2.5-1.5-5-1-5-1s6.049-2.901 9.474-8.174S28.5 3 32 3z"/></svg>
                }
            ],
        },
        {
            labels: ["Simulador"],
            title: "Simulador de volcan",
            date: "Octubre 2023",
            imageUrl: "/projects/volcan.jpeg",
            description: "Simulador de proyectiles volcánicos que utilizan ángulo y velocidad. Creado con Python y Matlab",
            buttons: {
                github: {
                    link: "https://github.com/Luughx/Matlab-volcano"
                }
            },
            technologies: [
                {
                    name: "Python",
                    class: "bg-[#9c9c0c]",
                    icon: <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" fill="none" viewBox="0 0 64 64"><path fill="url(#a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"/><path fill="url(#b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"/><defs><linearGradient id="a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs></svg>
                },
                {
                    name: "Matlab",
                    class: "bg-[#630000]",
                    icon: <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 48 48"><linearGradient id="a" x1="22.645" x2="26.757" y1="10.881" y2="23.854" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4adddf"/><stop offset=".699" stop-color="#3f5352"/><stop offset=".863" stop-color="#442729"/></linearGradient><path fill="url(#a)" d="m21 27-7-6s1-1.5 2.5-3 2.736-1.852 4.5-3c3.511-2.284 6.5-12 11-12L21 27z"/><linearGradient id="b" x1="1" x2="37.775" y1="27.033" y2="27.033" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4adddf"/><stop offset=".792" stop-color="#3f5352"/><stop offset="1" stop-color="#442729"/></linearGradient><path fill="url(#b)" d="M11 33.066 1 26l13-5 7.277 5.465L14 32.066z"/><linearGradient id="c" x1="11" x2="47" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset=".206" stop-color="#53140f"/><stop offset=".3" stop-color="#84360f"/><stop offset=".413" stop-color="#b85b10"/><stop offset=".511" stop-color="#df7610"/><stop offset=".59" stop-color="#f68710"/><stop offset=".639" stop-color="#ff8d10"/><stop offset=".729" stop-color="#fd8a10"/><stop offset=".8" stop-color="#f58010"/><stop offset=".865" stop-color="#e86f10"/><stop offset=".925" stop-color="#d65811"/><stop offset=".982" stop-color="#c03a11"/><stop offset="1" stop-color="#b72f11"/></linearGradient><path fill="url(#c)" d="M32 3c5 0 13 27 15 34 0 0-7.017-6.63-11-6s-5.47 6.548-9.725 10.756C23.5 44.5 21 45 21 45s-.206-8.124-5-11c-2.5-1.5-5-1-5-1s6.049-2.901 9.474-8.174S28.5 3 32 3z"/></svg>
                }
            ],
        },
        {
            labels: ["Simulador"],
            title: "Syllogistic",
            date: "Octubre 2023",
            imageUrl: "/projects/syllogistic.jpg",
            description: "Sillogystic es un juego de lógica para entrenar las capacidades cognitivas a través de preguntas",
            buttons: {
                github: {
                    link: "https://github.com/Luughx/Syllogistic"
                }
            },
            technologies: [
                {
                    name: "Python",
                    class: "bg-[#9c9c0c]",
                    icon: <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" fill="none" viewBox="0 0 64 64"><path fill="url(#a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"/><path fill="url(#b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"/><defs><linearGradient id="a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs></svg>
                },
                {
                    name: "Mysql",
                    class: "bg-[#003159]",
                    icon: <svg className="size-4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252"><path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B"/><path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B"/>
                  </svg>
                  
                },
                {
                    name: "Matlab",
                    class: "bg-[#630000]",
                    icon: <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 48 48"><linearGradient id="a" x1="22.645" x2="26.757" y1="10.881" y2="23.854" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4adddf"/><stop offset=".699" stop-color="#3f5352"/><stop offset=".863" stop-color="#442729"/></linearGradient><path fill="url(#a)" d="m21 27-7-6s1-1.5 2.5-3 2.736-1.852 4.5-3c3.511-2.284 6.5-12 11-12L21 27z"/><linearGradient id="b" x1="1" x2="37.775" y1="27.033" y2="27.033" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4adddf"/><stop offset=".792" stop-color="#3f5352"/><stop offset="1" stop-color="#442729"/></linearGradient><path fill="url(#b)" d="M11 33.066 1 26l13-5 7.277 5.465L14 32.066z"/><linearGradient id="c" x1="11" x2="47" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset=".206" stop-color="#53140f"/><stop offset=".3" stop-color="#84360f"/><stop offset=".413" stop-color="#b85b10"/><stop offset=".511" stop-color="#df7610"/><stop offset=".59" stop-color="#f68710"/><stop offset=".639" stop-color="#ff8d10"/><stop offset=".729" stop-color="#fd8a10"/><stop offset=".8" stop-color="#f58010"/><stop offset=".865" stop-color="#e86f10"/><stop offset=".925" stop-color="#d65811"/><stop offset=".982" stop-color="#c03a11"/><stop offset="1" stop-color="#b72f11"/></linearGradient><path fill="url(#c)" d="M32 3c5 0 13 27 15 34 0 0-7.017-6.63-11-6s-5.47 6.548-9.725 10.756C23.5 44.5 21 45 21 45s-.206-8.124-5-11c-2.5-1.5-5-1-5-1s6.049-2.901 9.474-8.174S28.5 3 32 3z"/></svg>
                }
            ],
        },
        {
            labels: ["Web"],
            title: "Prepa 2030",
            date: "Marzo 2023",
            imageUrl: "/projects/prepa2030.avif",
            description: "Página web para la escuela Preparatoria Activo 2030 Albert Einstein con el propósito de proporcionar información de la institución y facilitar la búsqueda de datos",
            buttons: {
                github: {
                    link: "https://github.com/Luughx/Prepa-frontend"
                }
            },
            technologies: [
                {
                    name: "Vue.js",
                    class: "bg-[#144701]",
                    icon: <svg className="size-4" viewBox="0 0 256 221" width="256" height="221" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" fill="#41B883" /><path d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" fill="#41B883" /><path d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" fill="#35495E" /></svg>
                },
                {
                    name: "Typescript",
                    class: "bg-[#003159]",
                    icon: <svg className="size-4" viewBox="0 0 256 256" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6" /><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF" /></svg>
                },
                {
                    name: "Node.js",
                    class: "bg-[#144701]",
                    icon: <svg className="size-4" viewBox="0 0 256 289" width="256" height="289" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385Zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.02-34.187 48.232-34.187 33.921 0 50.617 11.66 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571Z" fill="#539E43" /></svg>
                },
                {
                    name: "Express.js",
                    class: "bg-black",
                    icon: <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64"><path fill="#fff" d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" /></svg>
                },
                {
                    name: "Mongodb",
                    class: "bg-[#144701]",
                    icon: <svg className="size-4" viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="256" height="549" preserveAspectRatio="xMidYMid"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z" /></svg>
                }
            ],
        },
        {
            labels: ["Unity"],
            title: "Videojuego 2D en Unity",
            date: "Febrero 2023",
            imageUrl: "/projects/game.jpg",
            description: "Videojuego en Unity el cual involucraba la supervivencia frente a oleadas de enemigos.",
            buttons: {
                download: {
                    link: "https://drive.google.com/file/d/1Q883Vt940lCc7bXnIU7KIzbL2yz9MO_d/view?usp=sharing"
                }
            },
            technologies: [
                {
                    name: "Unity",
                    class: "bg-black",
                    icon: <svg className="size-4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 263"><path d="M166.9 131.2L212.8 52l22.2 79.2-22.2 79.3-46-79.3zm-22.4 13l46 79.2-80-20.5L52.6 144h91.8zM190.4 39l-45.9 79.3H52.7l57.7-58.8 80-20.5zm65.5 65.2L228 0 123.4 28l-15.5 27.2-31.4-.2L0 131.2l76.5 76.3 31.4-.2 15.5 27.2 104.5 27.9 28-104.2-15.9-27 16-27z" fill="#fff" /></svg>
                },
                {
                    name: "C#",
                    class: "bg-[#300147]",
                    icon: <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="2222" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 -1.43 255.58 290.11"><path fill="#a179dc" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76a24.4 24.4 0 0 0-9.24-9C209.17 43.05 175.1 23.5 141.1 3.86c-9.17-5.3-18.06-5.1-27.16.27-13.54 7.98-81.35 46.83-101.55 58.53C4.06 67.5.02 74.87 0 84.44v118.37c0 4.72 1 8.9 2.99 12.51 2.05 3.72 5.17 6.82 9.38 9.26 20.21 11.7 88.02 50.55 101.56 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25c1.99-3.61 2.98-7.8 2.98-12.52l-.01-118.35" /><path fill="#280068" d="M128.18 143.24 2.98 215.33c2.06 3.7 5.18 6.8 9.4 9.25 20.2 11.7 88.01 50.55 101.55 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25z" /><path fill="#390091" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76l-124.26 71.55 124.41 72.07c2-3.6 2.99-7.79 3-12.51 0 0 0-78.9-.02-118.35" /><g fill="#fff"><path d="M201.9 116.3v13.47h13.47v-13.48h6.73v13.48h13.48v6.73H222.1v13.48h13.48v6.74H222.1v13.47h-6.73V156.7h-13.48v13.48h-6.73V156.7h-13.48v-6.73h13.47V136.5h-13.47v-6.74h13.47v-13.48zm13.47 20.2h-13.48v13.48h13.48z" /><path d="M128.46 48.63a94.96 94.96 0 0 1 82.26 47.45l-.16-.27-41.35 23.8A47.28 47.28 0 0 0 129 96.33h-.54a47.3 47.3 0 0 0-47.3 47.3 47.08 47.08 0 0 0 6.23 23.47 47.28 47.28 0 0 0 82.29-.27l-.2.35 41.29 23.91a94.97 94.97 0 0 1-81.25 47.54h-1.06a94.96 94.96 0 0 1-95-95 95 95 0 0 1 95-95z" /></g></svg>
                }
            ],
        }
    ]
    return (
        <div>
            {projects.map(project => (
                <ProjectCard
                    project={project}
                />
            ))}
        </div>
    )
}