import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageMeta } from "@/components/site/PageMeta";
import gunitImg from "@/assets/gunit.webp";
import gurnoorImg from "@/assets/gurnoor.webp";
import jasnoorImg from "@/assets/jasnoor.webp";
import agamjotImg from "@/assets/agamjot.webp";

const team = [
  { name: "Gunit Singh", role: "President", img: gunitImg, quote: "Ideas beat titles. Ship the thing." },
  { name: "Gurnoor Singh", role: "Vice President", img: gurnoorImg, quote: "Build hard, stay curious." },
  { name: "Jasnoor Kaur", role: "Head of Operations", img: jasnoorImg, quote: "Great events are 90% details." },
  { name: "Agamjot Singh", role: "Executive Director", img: agamjotImg, quote: "The best community learns loud." },
];

export default function Team() {
  return (
    <div>
      <PageMeta
        title="Team — Genix · GTBIT Tech Society"
        description="Meet the core team behind Genix — the students running events, workshops, and everything at GTBIT's official tech society."
      />
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-accent/15 blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-teal mb-4">// The crew</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1]">Meet the people <br />behind <span className="text-gradient-brand">Genix</span>.</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              A small core team of GTBIT students running events, workshops, and everything in between.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ transformPerspective: 1000 }}
                className="group rounded-3xl overflow-hidden border border-border bg-card"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={m.img} alt={m.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs uppercase tracking-widest text-teal">{m.role}</div>
                    <div className="mt-1 text-xl font-bold">{m.name}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground italic">"{m.quote}"</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOIN CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="rounded-3xl border border-border p-10 md:p-14 text-center bg-card/50">
          <h2 className="text-3xl md:text-5xl font-bold">Want to join the team?</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">We open applications every semester for new coordinators, designers, and organizers.</p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal text-primary-foreground font-semibold hover:glow-teal transition">
            Apply to Genix <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
