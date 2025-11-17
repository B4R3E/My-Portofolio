import { motion } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";

// Reveal effect on scroll section About
export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-2xl mx-auto py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          initial={{ rotate: -30 }}
          animate={{ rotate: [0, -20, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-blue-500 text-3xl"
        >
          <FaUserAlt />
        </motion.div>
        <h3 className="text-2xl font-semibold">Tentang Saya</h3>
      </div>
      <p className="text-gray-800 text-lg leading-relaxed">
        Saya seorang developer dan desainer yang berfokus pada pembuatan aplikasi dan website dengan tampilan menarik, modern, serta pengalaman pengguna optimal. Berpengalaman di frontend & UI/UX, selalu mengikuti tren desain terbaru untuk menciptakan solusi digital inovatif.
      </p>
    </motion.section>
  );
}
