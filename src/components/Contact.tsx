import { useState } from 'react';
import { Mail, MapPin, Check } from 'lucide-react';

export const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        formData.append("access_key", "6da113bd-b92d-43da-81ad-fd0ccb80fc34");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert("Transmission failed. Please try again.");
            }
        } catch (error) {
            alert("System error. Connection lost.");
        }
    };

    return (
        <section id="contact" className="py-32 px-6 bg-transparent relative">
            <div className="max-w-6xl mx-auto relative">
                {/* START A PROJECT Badge */}
                <div className="absolute -top-12 -left-8 md:-left-12 bg-neo-yellow border-[6px] border-black px-10 py-4 shadow-hard rotate-[-5deg] z-20">
                    <span className="text-xl font-black uppercase tracking-tighter">Start a project</span>
                </div>

                {/* Main Card */}
                <div className="bg-white border-[3px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row overflow-hidden">

                    {/* Left Column: Info */}
                    <div className="flex-1 p-12 md:p-16 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black flex flex-col justify-center">
                        <h2 className="text-6xl md:text-7xl font-black mb-8 leading-[0.9] uppercase tracking-tighter">
                            Let's<br />talk<br />code.
                        </h2>
                        <p className="text-lg font-bold opacity-60 mb-12 max-w-sm leading-tight uppercase">
                            I am currently available for freelance work and open to full-time opportunities.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:juandiegoloaiza25@gmail.com" className="flex items-center gap-4 group cursor-hover">
                                <div className="w-12 h-12 bg-black flex items-center justify-center border-2 border-black group-hover:bg-[#FBFF48] group-hover:text-black text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-black uppercase tracking-tight hover:underline decoration-2">juanloaiza25@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-black flex items-center justify-center border-2 border-black group-hover:bg-[#FBFF48] group-hover:text-black text-white transition-colors cursor-hover">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <span className="text-sm font-black uppercase tracking-tight">Remote / Earth</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form or Success */}
                    <div className="flex-1 p-12 md:p-16 bg-[#f8f8f8] flex items-center justify-center relative">
                        {!isSubmitted ? (
                            <div className="border-[2px] border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full">
                                <form className="space-y-8" onSubmit={handleSubmit}>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Identity</label>
                                        <input
                                            name="name"
                                            type="text"
                                            placeholder="NAME / COMPANY"
                                            required
                                            className="w-full bg-white border-2 border-black p-4 text-sm font-bold uppercase focus:outline-none focus:bg-[#FBFF48] transition-colors placeholder:opacity-50"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Coordinates</label>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="EMAIL ADDRESS"
                                            required
                                            className="w-full bg-white border-2 border-black p-4 text-sm font-bold uppercase focus:outline-none focus:bg-[#FBFF48] transition-colors placeholder:opacity-50"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Transmission</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            placeholder="PROJECT DETAILS..."
                                            required
                                            className="w-full bg-white border-2 border-black p-4 text-sm font-bold uppercase focus:outline-none focus:bg-[#FBFF48] transition-colors placeholder:opacity-50 resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#3b82f6] text-white py-5 font-black uppercase tracking-widest border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                                    >
                                        Transmit Data
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="border-[2px] border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full aspect-square md:aspect-auto md:h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
                                {/* Yellow Circle Decoration */}


                                <div className="bg-[#4ade80] w-16 h-16 rounded-full flex items-center justify-center border-2 border-black mb-8">
                                    <Check className="text-white w-10 h-10" strokeWidth={4} />
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter text-center mb-4">
                                    Transmission Received
                                </h3>
                                <p className="font-mono text-center text-sm font-bold leading-relaxed max-w-[250px] opacity-80">
                                    System response initialized. I will reach out shortly.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
