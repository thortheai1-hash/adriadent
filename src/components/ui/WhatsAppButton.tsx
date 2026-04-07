"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay to not distract immediately on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open("https://wa.me/355692082491", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] group overflow-hidden focus:outline-none"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping" style={{ animationDuration: '3s' }}></span>
          <MessageCircle className="w-8 h-8 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
