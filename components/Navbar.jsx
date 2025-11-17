import { motion } from "framer-motion";

const links = [
  { name: "Beranda", to: "hero" },
  { name: "Tentang", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Portofolio", to: "projects" },
  { name: "Prestasi", to: "achievements" },
  { name: "Kontak", to: "contact" },
];

// Animasi smooth scroll + indikator active pada navigasi
export default function Navbar({ activeSection, setActiveSection }) {
  return (
    <nav className="fixed w-full top-0 bg-white/80 backdrop-blur z-50 shadow">
      <ul className="flex justify-center gap-8 py-4 text-lg font-medium">
        {links.map((link, i) => (
          <li key={link.to}>
            <a
              href={`#${link.to}`}
              onClick={() => setActiveSection(link.to)}
              className="relative px-2 py-1 hover:text-blue-600 transition"
            >
              {link.name}
              {activeSection === link.to && (
                <motion.span
                  className="absolute left-0 bottom-0 w-full h-1 bg-blue-500 rounded origin-left"
                  layoutId="navbar-underline"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}