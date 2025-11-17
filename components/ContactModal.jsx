import { motion } from "framer-motion";
import { useState } from "react";

// Modal pop up animasi muncul, input animasi focus
export default function ContactModal({ isOpen, onClose }) {
  return (
    <>
      {/* backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-30 z-50"
        />
      )}
      {/* modal box */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0.7, opacity: 0, y: -40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.7, opacity: 0, y: -40 }}
          transition={{ type: "spring", duration: 0.7 }}
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-auto"
        >
          <form className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full relative">
            <button type="button" onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl">
              &times;
            </button>
            <h3 className="text-2xl mb-4 font-bold">Hubungi Saya</h3>
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full mb-3 px-4 py-2 border rounded transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 px-4 py-2 border rounded transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              placeholder="Pesan"
              rows={4}
              className="w-full mb-3 px-4 py-2 border rounded transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
            />
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 2px 10px #3b82f655" }}
              className="w-full bg-blue-500 text-white py-2 rounded font-bold transition"
              type="submit"
            >
              Kirim
            </motion.button>
          </form>
        </motion.div>
      )}
    </>
  );
}