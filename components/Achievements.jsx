import { motion, useAnimation } from "framer-motion";
import { achievements } from "../data/achievements";
import { useEffect, useRef } from "react";

// Count-up effect animasi
function useCountUp(target, duration = 1) {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    let start = 0;
    const end = target;
    let increment = end / (duration * 60);
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      let val = Math.min(end, Math.round(start + increment * frame));
      setCount(val);
      if (val >= end) clearInterval(counter);
    }, 1000 / 60);
    return () => clearInterval(counter);
  }, [target, duration]);
  return count;
}

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="max-w-3xl mx-auto py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
      variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
    >
      <h3 className="text-2xl font-semibold mb-8">Prestasi & Capaian</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map(({ title, count }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-blue-100/50 rounded-lg p-8 flex flex-col items-center shadow text-center"
          >
            <span className="text-5xl font-bold text-blue-600">
              {useCountUp(count, 1 + idx * 0.3)}
            </span>
            <span className="text-lg mt-2">{title}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}