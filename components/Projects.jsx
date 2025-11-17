import { motion } from "framer-motion";
import { projects } from "../data/projects";

// Horizontal swipe, card masuk animasi, hover efek card
export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
    >
      <h3 className="text-2xl font-semibold mb-8 text-center">Portofolio</h3>
      <div className="flex overflow-x-auto gap-6 px-2 hide-scrollbar">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0 6px 32px #3b82f682",
              rotate: [0, 4, -4, 0],
            }}
            className="min-w-[280px] max-w-xs flex-shrink-0 bg-white rounded-xl shadow-lg cursor-pointer transition"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-xl" />
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap text-xs">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-600 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener" className="inline-block mt-4 text-blue-500 font-semibold hover:underline">Lihat Projek</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}