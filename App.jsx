import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import ContactModal from "./components/ContactModal";
import { AnimatePresence } from "framer-motion";
import "./index.css";

// Main SPA: smooth scroll, section, modal state
export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isContactOpen, setContactOpen] = useState(false);

  React.useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    // Listen hash change for navbar active
    const onScroll = () => {
      const offsets = [
        "hero",
        "about",
        "skills",
        "projects",
        "achievements",
      ].map((id) => ({
        id,
        top: document.getElementById(id)?.getBoundingClientRect()?.top,
      }));

      const found = offsets.find((section) => section.top < 200 && section.top > -500);
      if (found) setActiveSection(found.id);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
      </main>
      <footer className="py-8 text-center text-gray-500">
        &copy; 2025 Muhammad Akbar Kurniawan. All rights reserved.
        <button
          className="ml-6 px-4 py-2 bg-blue-500 text-white rounded shadow hover:scale-105 transition"
          onClick={() => setContactOpen(true)}
        >
          Hubungi Saya
        </button>
      </footer>
      <AnimatePresence>
        <ContactModal isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
      </AnimatePresence>
    </div>
  );
}