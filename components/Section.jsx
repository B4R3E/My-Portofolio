// Reusable section wrapper with parallax/fade/slide animasi.
// Usage: Wrap section content for transition effect
import { motion } from "framer-motion";

export default function Section({ id, children, parallax = false }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1 }}
      variants={
        parallax
          ? {
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 },
            }
          : {
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }
      }
    >
      {children}
    </motion.section>
  );
}