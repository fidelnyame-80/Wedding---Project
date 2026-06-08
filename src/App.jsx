import { motion } from "framer-motion";
import Home from "./pages/Home";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Home />
    </motion.div>
  );
}

export default App;
