import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="max-w-3xl mx-auto py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h3 className="text-2xl font-semibold mb-8">Skills</h3>
      <div className="space-y-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            className="mb-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-lg font-medium">{skill.name}</span>
              <span className="text-gray-600">{skill.level}%</span>
            </div>
            {/* Progress bar animated */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
              className="h-3 bg-blue-400 rounded"
              style={{ maxWidth: "100%" }}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}