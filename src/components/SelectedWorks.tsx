export const SelectedWorks = () => {
    const projects = [
        {
            title: "ADOC - SaaS Platform",
            description: "SaaS platform for documentary advisory in operations and quality. Manages checklists, forms, and compliance for INVIMA and BPM standards.",
            tags: ["TypeScript", "React", "Supabase", "Tailwind"],
            link: "https://github.com/Juanloaiza25/ADOC",
            image: "/adoc.png"
        },
        {
            title: "Salud & Vida - HMS",
            description: "Full-stack Hospital Management System specializing in pharmaceutical and administrative control with a premium Med-Tech UI.",
            tags: ["Spring Boot", "React", "SQL", "Tailwind"],
            link: "https://github.com/Juanloaiza25/Proyecto-final-db",
            image: "/health_tech.png"
        },
        {
            title: "Airline Data Systems",
            description: "Advanced airline management core using complex data structures and C++ optimization for flight and passenger handling.",
            tags: ["C++", "Algorithms", "Data Structures"],
            link: "https://github.com/Juanloaiza25/Proyecto-estructura",
            image: "/airline_new.png"
        },
        {
            title: "Portfolio",
            description: "This own portfolio website built with React and Tailwind CSS.",
            tags: ["React", "Tailwind", "TypeScript", "Next.js"],
            link: "https://github.com/Juanloaiza25/Portfolio",
            image: "/portfolio.png"
        },

        {
            title: "Pokedex",
            description: "Website built with HTML5 CSS3 and JavaScript consuming the PokeAPI, one of my first projects.",
            tags: ["HTML5", "CSS3", "JavaScript"],
            link: "https://github.com/Juanloaiza25/Pokedex",
            image: "/pokedex.png"
        }

    ];

    return (
        <section id="projects" className="bg-[#FBFF48] py-32 px-6 border-y-2 border-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-[10vw] font-black uppercase [-webkit-text-stroke:1px_#000] text-transparent md:[-webkit-text-stroke:2px_#000] leading-none mb-16">Selected Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, i) => (
                        <a
                            key={i}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-hover block ${i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                        >
                            <div className="aspect-video bg-gray-200 border-2 border-black mb-6 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-[#FBFF48] border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <div className="w-4 h-4 bg-black" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">{project.title}</h3>
                            <p className="text-sm font-bold opacity-60 mb-6 uppercase leading-snug">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-black text-white text-[9px] px-2 py-1 font-black uppercase tracking-tight">{tag}</span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
                <div className="mt-20 flex justify-center">
                    <a
                        href="https://github.com/Juanloaiza25?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white border-2 border-black px-12 py-6 text-xl font-black uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(251,255,72,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all cursor-hover"
                    >
                        View all repos on github
                    </a>
                </div>
            </div>
        </section>
    );
};
