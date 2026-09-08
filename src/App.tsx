import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { BackToTop } from "@/components/site/BackToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Events from "@/pages/Events";
import Team from "@/pages/Team";
import NotFound from "@/pages/NotFound";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.2, ease: "easeIn" } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="initial" animate="animate" exit="exit">
        <Routes location={location}>
          <Route path="/"       element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team"   element={<Team />} />
          <Route path="*"       element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main className="pt-16">
        <AnimatedRoutes />
      </main>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}
