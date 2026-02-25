
export const SelectedWorks = () => {
    return (
        <section className="bg-[#FBFF48] py-32 px-6 border-y-2 border-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-[10vw] font-black uppercase [-webkit-text-stroke:1px_#000] text-transparent md:[-webkit-text-stroke:2px_#000] leading-none mb-16">Selected Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[1, 2].map(i => (
                        <div key={i} className="bg-white border-2 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group">
                            <div className="aspect-video bg-gray-200 border-2 border-black mb-6 overflow-hidden relative">
                                <img src={`https://picsum.photos/seed/${i + 50}/800/450`} alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-[#FBFF48] border-2 border-black p-2">
                                    <div className="w-4 h-4 bg-black" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">ProjectTitle_0{i}</h3>
                            <p className="text-sm font-bold opacity-60 mb-6 uppercase">Modern web platform with advanced analytics and AI integration.</p>
                            <div className="flex gap-2">
                                {['React', 'Tailwind', 'Node'].map(tag => (
                                    <span key={tag} className="bg-black text-white text-[8px] px-2 py-1 font-black uppercase">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
