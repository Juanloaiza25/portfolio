
export const Footer = () => {
    return (
        <footer className="py-20 text-center font-black bg-white border-y-2 border-black">
            <p className="text-sm opacity-40 mb-8 uppercase tracking-widest">Maybe we won't see each other again. Subscribe so you don't lose me</p>
            <div className="flex justify-center gap-12">
                {['Twitter', 'Github', 'Linkedin'].map(social => (
                    <a key={social} href="#" className="text-xs hover:text-red-500 transition-colors uppercase tracking-widest">{social}</a>
                ))}
            </div>
        </footer>
    )
}
