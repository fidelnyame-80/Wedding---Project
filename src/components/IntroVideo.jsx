import { AnimatePresence, motion } from "framer-motion";
import envelopeReveal from "../assets/envelope-reveal.mp4";

export default function IntroVideo({ isVisible, onDone }) {
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
            preload="auto"
            onEnded={onDone}
            onError={onDone}
            aria-label="Envelope reveal intro"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
