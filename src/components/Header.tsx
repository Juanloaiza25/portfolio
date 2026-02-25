
export const Header = () => {
    return (
        <nav className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none">
            <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
                {/* Logo */}
                <a href="#" className="bg-neo-white border-2 border-black px-4 py-1 text-2xl font-black shadow-hard hover:bg-neo-yellow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-hover">
                    JUAN-DIEGO.exe
                </a>

                {/* Navigation Box */}
                <div className="hidden md:flex gap-4 bg-white border-2 border-black p-2 shadow-hard">
                    <div className="flex gap-8">
                        <a href="#about" className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover">/ABOUT</a>
                        <a href="#skills" className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover">/SKILLS</a>
                        <a href="#experience" className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover">/LOGS</a>
                        <a href="#projects" className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover">/WORK</a>

                    <a href="#contact" className="px-3 py-1 font-mono font-bold text-sm bg-[#FBFF48] border border-black hover:bg-pink-500 transition-colors cursor-hover">
                        HIRE ME
                    </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
