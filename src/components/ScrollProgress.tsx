import { useEffect, useState } from 'react';

export const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScroll = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setScrollProgress((currentScroll / scrollHeight) * 100);
            }
        };

        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 h-2 bg-neo-green z-[100] border-b-2 border-black transition-all duration-100 ease-out"
            id="progressBar"
            style={{ width: `${scrollProgress}%` }}
        />
    );
};
