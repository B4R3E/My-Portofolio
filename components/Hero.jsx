import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20">
      {/* Parallax,foto/avatar animasi, nama+pekerjaan slide+fade */}
      <motion.img
        src="/avatar.jpg"
        alt="Avatar"
        initial={{ opacity: 0, scale: 0.8, y: -60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
        className="w-32 h-32 rounded-full shadow-lg mb-6"
      />
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-4xl font-bold mb-2"
      >
        B4R3E
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl text-blue-600 mb-6"
      >
        Developer & Desainer
      </motion.h2>
      <motion.a
        whileHover={{ scale: 1.08, boxShadow: "0 4px 20px #3b82f680" }}
        href="#contact"
        className="px-6 py-3 rounded bg-blue-500 text-white font-bold shadow-lg transition"
      >
        Hubungi Saya
      </motion.a>
    </section>
  );
}