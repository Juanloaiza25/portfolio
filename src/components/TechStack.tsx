
export const TechStack = () => {
    return (
        <section className="py-24 px-6 bg-black text-white relative z-10 border-y-2 border-black">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-6xl font-black mb-16 tracking-tighter uppercase">
                    TECH <span className="text-[#4ade80]">_STACK</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 border-2 border-black bg-black">
                    {['REACT', 'NEXT.JS', 'PYTHON', 'NODE.JS', 'TAILWIND', 'MYSQL', 'HTML5', 'GIT',
                        'GRAPHQL', 'GITHUB', 'JAVA', 'DJANGO', 'PHP', 'LARAVEL', 'THREE.JS', 'C++'].map((tech) => (
                            <div key={tech} className="border border-white/10 flex flex-col items-center justify-center p-6 gap-2 transition-all hover:bg-[#FBFF48] hover:text-black hover:border-black group cursor-default">
                                <span className="text-[10px] font-bold opacity-40 group-hover:opacity-100 uppercase">Library</span>
                                <span className="text-xs font-black">{tech}</span>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}
