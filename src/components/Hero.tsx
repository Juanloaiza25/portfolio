import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X } from 'lucide-react'

export const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 relative overflow-hidden border-b-4 border-black">
            {/* Modal Language Selection */}
            <AnimatePresence>
                {isMenuOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, rotate: -2 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            exit={{ scale: 0.8, opacity: 0, rotate: 2 }}
                            className="bg-white border-4 border-black p-10 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] max-w-md w-full relative"
                        >
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute -top-4 -right-4 bg-red-500 text-white p-2 border-4 border-black shadow-hard hover:bg-black transition-colors cursor-pointer"
                            >
                                <X size={24} />
                            </button>

                            <div className="text-center mb-8">
                                <h3 className="text-4xl font-black uppercase tracking-tighter mb-2">Select Language</h3>
                                <p className="font-bold opacity-60 uppercase text-sm">Choose your preferred CV version</p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <a
                                    href="Juan_Loaiza_CV_EN.pdf" // Placeholder path
                                    download="Juan_Loaiza_CV_EN.pdf"
                                    className="bg-[#FBFF48] text-black border-4 border-black p-5 text-xl font-black shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover text-center flex items-center justify-center gap-3"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="text-2xl">🇺🇸</span> ENGLISH VERSION
                                </a>
                                <a
                                    href="Juan_Loaiza_CV_ES.pdf" // Placeholder path
                                    download="Juan_Loaiza_CV_ES.pdf"
                                    className="bg-[#4ade80] text-black border-4 border-black p-5 text-xl font-black shadow-hard hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover text-center flex items-center justify-center gap-3"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="text-2xl">🇪🇸</span> VERSIÓN ESPAÑOL
                                </a>
                            </div>

                            <div className="mt-8 pt-6 border-t-2 border-black/10 flex justify-between items-center text-[10px] font-black opacity-30 uppercase tracking-widest">
                                <span>SYSTEM_READY</span>
                                <span>TYPE: PDF_DOCUMENT</span>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Decorative Elements */}
            <div className="absolute top-1/3 left-[10%] w-16 h-16 bg-blue-500 border-4 border-black shadow-hard animate-bounce hidden lg:block rotate-12">
            </div>
            <div className="absolute bottom-1/3 right-[10%] w-24 h-24 bg-pink-500 rounded-full border-4 border-black shadow-hard hidden lg:block animate-pulse">
            </div>
            <div className="absolute top-20 right-20 text-9xl opacity-5 font-black select-none pointer-events-none">CODE</div>

            <div className="relative z-10 text-center max-w-5xl">
                <div className="inline-block bg-neo-white border-2 border-black px-4 py-1 mb-6 shadow-hard reveal active">
                    <span className="font-mono font-bold text-neo-green bg-black px-2 mr-2">●</span>
                    <span className="font-mono font-bold uppercase tracking-wider">System Status: Online</span>
                </div>

                <h1 className="text-[12vw] md:text-[10vw] leading-[0.8] font-black uppercase tracking-tighter mb-6 reveal mix-blend-darken active">
                    <span className="block whitespace-nowrap">FULL STACK</span>
                    <span className="block text-white text-stroke-black whitespace-nowrap" style={{ WebkitTextStroke: '2px black' }}>DEVELOPER</span>
                </h1>

                <p className="font-mono text-lg md:text-2xl max-w-2xl mx-auto mb-10 bg-neo-yellow border-2 border-black p-4 shadow-hard reveal active">
                    I build digital products that refuse to be boring. <br />
                    <span className="mt-2 block text-sm md:text-md uppercase tracking-widest bg-black text-[#FBFF48] inline-block px-2">React • Python • Java • Node</span>
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6 reveal active">
                    <a href="#projects" className="bg-black text-white border-2 border-black px-10 py-5 text-xl font-bold shadow-hard hover:bg-neo-green hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover text-center">
                        View Database
                    </a>
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="bg-neo-white text-black border-2 border-black px-10 py-5 text-xl font-bold shadow-hard hover:bg-neo-pink hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                        <Download size={24} /> Download CV
                    </button>
                </div>
            </div>
        </section>
    )
}
