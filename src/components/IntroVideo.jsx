import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import envelopeReveal from "../assets/envelope-reveal.mp4";
import heroPoster from "../assets/heroImg.webp";

export default function IntroVideo({ isVisible, onDone }) {
  useEffect(() => {
    if (!isVisible) return undefined;

    const fallback = window.setTimeout(onDone, 9000);

    return () => window.clearTimeout(fallback);
  }, [isVisible, onDone]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#2b1725]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <video
            src={envelopeReveal}
            className="h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster={heroPoster}
            onEnded={onDone}
            onError={onDone}
            aria-label="Envelope reveal intro"
          />

          <button
            type="button"
            onClick={onDone}
            className="absolute bottom-6 right-6 rounded-full border border-[#D4AF37]/80 bg-[#2b1725]/55 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#fff7e8] backdrop-blur-sm transition hover:bg-[#2b1725]/80"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
