# Portfolio – Neo‑Brutalist Web Showcase

![Demo Screenshot](https://raw.githubusercontent.com/Juanloaiza25/portfolio/main/public/screenshot.png)

A **personal portfolio** built with **React**, **Vite**, **Tailwind CSS v4**, and **TypeScript** that showcases a bold Neo‑Brutalist aesthetic.  The site features:

- **Custom cursor** with `framer‑motion` that changes color and size on hover.
- **Hard‑shadow utilities** (`shadow‑hard`, `shadow‑hard‑lg`) for that distinctive 3‑D look.
- **Responsive layout** – the header, hero, and sections adapt gracefully from mobile to large screens.
- **Dynamic scroll progress bar**.
- **Animated decorative elements** in the Hero section (bounce, pulse, rotation).
- **Full‑stack developer branding** – "FULL STACK" on one line, "DEVELOPER" on the next, never wrapping.
- **Tailwind theme extensions** for custom colors (`neo‑yellow`, `neo‑pink`, `neo‑green`, etc.) and fonts (`Outfit`, `JetBrains Mono`).

## Tech Stack

| Technology | Version |
|------------|---------|
| React      | 19.x |
| Vite       | 7.x |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| Framer Motion | 12.x |
| Lucide‑React | 0.575 |
| Lenis (smooth scrolling) | 1.3 |
| GSAP (optional animations) | 3.14 |

## Project Structure

```
src/
├─ components/
│  ├─ Header.tsx          # Fixed navigation with Neo‑Brutalist styling
│  ├─ Hero.tsx            # Main hero section with animated shapes
│  ├─ WhoAmI.tsx          # Personal intro card
│  ├─ TechStack.tsx       # List of technologies
│  ├─ ExperienceLog.tsx   # Timeline of work experience
│  ├─ SelectedWorks.tsx   # Portfolio pieces
│  ├─ Footer.tsx          # Footer with custom cursor support
│  ├─ CustomCursor.tsx   # Cursor component powered by framer‑motion
│  └─ ScrollProgress.tsx # Scroll progress bar
├─ App.tsx                # Root component that assembles everything
├─ index.css              # Global styles + custom utilities (shadow‑hard, text‑stroke, etc.)
└─ main.tsx               # Vite entry point
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Juanloaiza25/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```
   The optimized static files will be in the `dist/` folder.

## Customisation

- **Colors & Fonts** – edit `tailwind.config.js` under `theme.extend.colors` and `theme.extend.fontFamily`.
- **Shadow utilities** – defined in `src/index.css` (`.shadow-hard`, `.shadow-hard-lg`).
- **Cursor behaviour** – modify `CustomCursor.tsx` to change size, colour, or animation.
- **Responsive padding** – the Header uses Tailwind’s responsive utilities (`p-4 md:p-10`). Adjust as needed.

## Deploying

The project can be deployed to any static‑host (Vercel, Netlify, GitHub Pages, etc.). Example for GitHub Pages:
```bash
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git push origin main
```
Then enable GitHub Pages from the repository settings, pointing to the `dist/` folder.

## License

This project is **open source** and available under the MIT License.

---

*Made with ❤️ by **Juan Diego** – a full‑stack developer who loves bold, brutalist designs.*
