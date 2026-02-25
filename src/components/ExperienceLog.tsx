
export const ExperienceLog = () => {
    const experiences = [
        { title: "Freelance Full-Stack Developer", company: "@SELF-EMPLOYED", date: "Nov 2023 - PRESENT", color: "bg-[#FBFF48]" },
        { title: "Data Entry Contract", company: "@INJALA INDIA", date: "Aug 2023 - Nov 2023", color: "bg-[#ff4d4d]" },
        { title: "Project Manager", company: "@SELF-EMPLOYED", date: "Dec 2022 - Aug 2023", color: "bg-[#4ade80]" }
    ];

    return (
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-6xl font-black mb-16 text-center uppercase tracking-tighter">
                    Experience <span className="text-[#ff4d4d] [-webkit-text-stroke:1px_#000] text-transparent md:[-webkit-text-stroke:2px_#000]">_Log</span>
                </h2>

                <div className="flex flex-col gap-12 relative">
                    <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-black" />

                    {experiences.map((exp, i) => (
                        <div key={i} className="pl-16 relative">
                            <div className={`absolute left-0 top-6 w-10 h-10 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center ${exp.color}`}>
                                <div className="w-2 h-2 bg-black" />
                            </div>
                            <div className="border-2 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                    <h3 className="text-xl font-black uppercase tracking-tighter">{exp.title}</h3>
                                    <span className="bg-black text-white px-3 py-1 text-[10px] font-bold">{exp.date}</span>
                                </div>
                                <p className="text-green-600 font-bold mb-4">{exp.company}</p>
                                <ul className="text-sm font-medium opacity-70 list-disc ml-4 flex flex-col gap-2">
                                    <li>Building responsive and interactive web applications</li>
                                    <li>Developing modern web applications using React, Next.js and Node.js</li>
                                    <li>Creating custom web solutions tailored to client requirements</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
