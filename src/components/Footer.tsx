import { Instagram, Github, Linkedin, Code } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-[#000000] text-white pt-24 pb-12 px-6 relative overflow-hidden border-t-2 border-black">
            {/* Top accent bar match image */}
            <div className="absolute top-0 left-0 w-full h-2 bg-[#4ade80]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Background Large Text (Watermark) */}
                <div className="absolute -bottom-10 left-0 text-[18vw] font-black opacity-[0.03] select-none pointer-events-none tracking-tighter leading-none align-center">
                    BRUTAL
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20 relative">
                    {/* Brand Section */}
                    <div className="md:col-span-5">
                        <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter italic">JUAN-DIEGO.</h2>
                        <p className="font-mono text-sm leading-relaxed opacity-60 max-w-sm">
                            Designing for the future with the raw aesthetics of the past.
                            No cookies, no trackers, just code.
                        </p>
                    </div>

                    {/* Sitemap */}
                    <div className="md:col-span-3">
                        <h4 className="text-[#4ade80] text-xs font-black uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-2">Sitemap</h4>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-sm font-bold opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest cursor-hover">Home</a>
                            <a href="#projects" className="text-sm font-bold opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest cursor-hover">Works</a>
                            <a href="#about" className="text-sm font-bold opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest cursor-hover">About</a>
                            <a href="#contact" className="text-sm font-bold opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest cursor-hover">Contact</a>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="md:col-span-4">
                        <h4 className="text-[#4ade80] text-xs font-black uppercase tracking-[0.2em] mb-8 border-b border-white/20 pb-2">Socials</h4>
                        <div className="flex gap-6">
                            <a href="#" className="opacity-40 hover:opacity-100 hover:text-[#4ade80] transition-all cursor-hover transform hover:scale-110">
                                <Code size={24} />
                            </a>
                            <a href="https://instagram.com/juanloaiza25" target="_blank" rel="noreferrer" className="opacity-40 hover:opacity-100 hover:text-[#4ade80] transition-all cursor-hover transform hover:scale-110">
                                <Instagram size={24} />
                            </a>
                            <a href="https://github.com/Juanloaiza25" target="_blank" rel="noreferrer" className="opacity-40 hover:opacity-100 hover:text-[#4ade80] transition-all cursor-hover transform hover:scale-110">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/juan-diego-loaiza" target="_blank" rel="noreferrer" className="opacity-40 hover:opacity-100 hover:text-[#4ade80] transition-all cursor-hover transform hover:scale-110">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-11 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4">
                    <div className="font-mono text-[10px] opacity-40 font-bold uppercase tracking-[0.3em]">
                        © 2025 JUAN-DIEGO.exe // SYSTEM_END
                    </div>
                </div>
            </div>
        </footer>
    );
};
