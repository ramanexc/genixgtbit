import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";
import { PageMeta } from "@/components/site/PageMeta";

export default function NotFound() {
  return (
    <>
      <PageMeta
        title="404 — Page Not Found · Genix"
        description="This page doesn't exist. Head back to the Genix home page."
      />
      <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-5">
        {/* Background */}
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-teal/10 blur-[100px]" />
        <div className="absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-[100px]" />

        <div className="relative text-center max-w-lg">
          {/* 404 number */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-[10rem] font-display font-bold leading-none text-gradient-brand select-none">
              404
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="text-xs uppercase tracking-widest text-teal mb-4">// Not found</div>
            <h1 className="text-3xl md:text-4xl font-bold">
              This page doesn't exist.
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-sm mx-auto">
              Looks like you wandered off the map. Let's get you back to where the building happens.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal text-primary-foreground font-semibold hover:glow-teal transition-all hover:scale-[1.02]"
            >
              <Home size={17} />
              Go home
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border hover:border-teal hover:text-teal font-semibold transition"
            >
              See events
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
