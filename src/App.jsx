import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import IntroVideo from "./components/IntroVideo";
import Home from "./pages/Home";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <IntroVideo
        isVisible={showIntro}
        onDone={() => setShowIntro(false)}
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{
          opacity: showIntro ? 0 : 1,
          y: showIntro ? 18 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </motion.div>
    </>
  );
}

export default App;
