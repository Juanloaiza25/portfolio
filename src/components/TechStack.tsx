export const TechStack = () => {
    const techStack = [
        { name: 'React', type: 'Library', color: 'hover:bg-accent-blue hover:text-white border-accent-blue' },
        { name: 'Python', type: 'Language', color: 'hover:bg-neo-yellow hover:text-black border-neo-yellow' },
        { name: 'Next.js', type: 'Framework', color: 'hover:bg-neo-pink hover:text-white border-neo-pink' },
        { name: 'Node.js', type: 'Backend', color: 'hover:bg-neo-green hover:text-black border-neo-green' },
        { name: 'JavaScript', type: 'Language', color: 'hover:bg-neo-yellow hover:text-black border-neo-yellow' },
        { name: 'HTML5', type: 'Core', color: 'hover:bg-neo-pink hover:text-white border-neo-pink' },
        { name: 'C', type: 'Language', color: 'hover:bg-accent-blue hover:text-white border-accent-blue' },
        { name: 'Tailwind', type: 'Styling', color: 'hover:bg-neo-green hover:text-black border-neo-green' },
        { name: 'Java', type: 'Language', color: 'hover:bg-neo-yellow hover:text-black border-neo-yellow' },
        { name: 'MySQL', type: 'Database', color: 'hover:bg-accent-blue hover:text-white border-accent-blue' },
        { name: 'Git', type: 'Version', color: 'hover:bg-neo-pink hover:text-white border-neo-pink' },
        { name: 'GitHub', type: 'Ops', color: 'hover:bg-neo-green hover:text-black border-neo-green' }
    ];

    return (
        <section id="skills" className="py-24 px-6 bg-black text-white relative z-10 border-y-2 border-black font-mono overflow-hidden">
            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Top Status Bar */}
                <div className="flex justify-between items-center mb-4">
                    <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-[#4ade80] tracking-widest">
                            /// SYSTEM_OPTIMIZED
                        </span>
                    </div>
                </div>

                <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase flex items-baseline gap-2">
                    TECH <span className="text-[#4ade80]">_STACK</span>
                </h2>

                <div className="w-full h-[2px] bg-white/20 mb-8" />

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-[0.5px] border-white/20 cursor-none">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className={`cursor-hover border-[0.5px] border-white/20 flex flex-col items-center justify-center p-8 gap-4 transition-all group cursor-none relative overflow-hidden ${tech.color.split(' ').filter(c => c.startsWith('hover:')).join(' ')}`}
                        >
                            {/* Hover accent border */}
                            <div className={`absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${tech.color.split(' ').find(c => !c.includes(':'))}`} />

                            <span className="text-xs font-bold text-[#4ade80] uppercase tracking-widest flex items-center gap-1 group-hover:text-inherit">
                                <span className="opacity-50 tracking-normal group-hover:text-inherit group-hover:opacity-100">{'>'}_</span> {tech.type}
                            </span>
                            <span className="text-lg font-black tracking-tight uppercase group-hover:scale-110 transition-transform">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="w-full h-[2px] bg-white/20 mt-8" />

                {/* Footer Status */}
                <div className="flex justify-between items-center mt-4">
                    <span className="text-[10px] font-bold text-white/30 tracking-widest">
                        TOTAL_NODES: {techStack.length}
                    </span>
                    <span className="text-[10px] font-bold text-white/30 tracking-widest">
                        MEMORY_USAGE: 128MB
                    </span>
                </div>
            </div>
        </section>
    );
};