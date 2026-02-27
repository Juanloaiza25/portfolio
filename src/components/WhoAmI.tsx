import { MapPin, Wifi } from 'lucide-react'
import avatarImg from '../assets/avatar_exe.png'

export const WhoAmI = () => {
    return (
        <section id="about" className="w-full py-24 px-6 flex justify-center bg-transparent relative overflow-hidden">
            {/* Background pattern removed to use global blueprint */}

            <div className="max-w-6xl w-full border-[4px] border-black bg-white p-8 md:p-14 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-16 relative z-10 transition-transform ">

                {/* Avatar Section */}
                <div className="relative flex-shrink-0">
                    <div className="absolute -top-4 -left-2 bg-[#FF3B3B] text-white text-[11px] font-black px-3 py-1 border-[3px] border-black z-20 uppercase tracking-tighter transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        AVATAR.jpg
                    </div>
                    <div className="w-[300px] h-[340px] border-[4px] border-black overflow-hidden bg-[#e0e0e0] relative group">
                        <img
                            src={avatarImg}
                            alt="Avatar"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                        />
                        {/* Overlay scanlines effect */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                            style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }} />
                    </div>
                    {/* Corner decoration */}
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 flex items-center justify-center">
                        <div className="w-8 h-8 border-r-4 border-b-4 border-black" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow py-2">
                    <div className="mb-auto">
                        <h2 className="text-6xl md:text-7xl font-black mb-10 uppercase tracking-tighter leading-none">
                            WHO AM I?
                        </h2>

                        <div className="space-y-6">
                            <p className="text-xl md:text-2xl font-bold leading-tight max-w-2xl text-black/90">
                                I am Juan Diego,
                                a full-stack developer who
                                <span className="bg-[#FBFF48] border-2 border-black px-2 py-0.5 mx-1 inline-block">
                                    builds bold systems
                                </span>  not boring websites.
                            </p>

                            <ul className="space-y-4 font-mono text-base md:text-lg">
                                <li className="flex items-start gap-4 group">
                                    <span className="text-[#3b82f6] font-black group-hover:translate-x-1 transition-transform">{'>'}</span>
                                    <span className="font-bold opacity-80 group-hover:opacity-100 italic">Full-stack developer specialized in React, Node & scalable backend systems.</span>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <span className="text-[#3b82f6] font-black group-hover:translate-x-1 transition-transform">{'>'}</span>
                                    <span className="font-bold opacity-80 group-hover:opacity-100 italic">Passionate about system design, SaaS products & AI-driven solutions.</span>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <span className="text-[#3b82f6] font-black group-hover:translate-x-1 transition-transform">{'>'}</span>
                                    <span className="font-bold opacity-80 group-hover:opacity-100 italic">Constantly building, learning and shipping better code.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6 mt-12">
                        <div className="bg-black text-white px-6 py-3 flex items-center gap-4 border-[3px] border-black hover:bg-white hover:text-black transition-colors cursor-default">
                            <MapPin size={18} fill="currentColor" className="text-pink-500" />
                            <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em]">
                                LOCATION: PEI, COLOMBIA
                            </span>
                        </div>

                        <div className="bg-[#4ade80] text-black px-6 py-3 flex items-center gap-4 border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default">
                            <Wifi size={18} className="animate-pulse" />
                            <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em]">
                                STATUS: AVAILABLE
                            </span>
                        </div>
                    </div>
                </div>

                {/* Subtle Inner Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />
            </div>
        </section>
    )
}
