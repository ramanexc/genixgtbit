import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Trophy, Rocket, Share2, Calendar, Instagram } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import genixImg from "@/assets/genix.jpeg";
import event1 from "@/assets/event1.jpeg";
import event2 from "@/assets/event2.jpeg";
import event3 from "@/assets/event3.jpeg";
import event4 from "@/assets/event4.jpeg";
import gunitImg from "@/assets/gunit.jpeg";
import gurnoorImg from "@/assets/gurnoor.jpeg";
import jasnoorImg from "@/assets/jasnoor.jpeg";
import agamjotImg from "@/assets/agamjot.jpeg";


const benefits = [
  { icon: Rocket, title: "Build real skills", copy: "Ship projects, learn tools, and turn theory into things that actually run." },
  { icon: Users, title: "Find your people", copy: "A crew of curious builders — seniors, peers, and mentors who care." },
  { icon: Trophy, title: "Lead & compete", copy: "Organize events, represent GTBIT, and stack wins on your résumé." },
  { icon: Sparkles, title: "Grow your network", copy: "Talks with industry, alumni connects, and doors that open early." },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-40 -right-40 h-150 w-150 rounded-full bg-teal/20 blur-[120px]" />
        <div className="absolute bottom-0 -left-40 h-125 w-125 rounded-full bg-accent/15 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center w-full">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                GTBIT · Official Tech Society
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
                Where GTBIT's <br />
                <span className="text-gradient-brand">future technologists</span> begin.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Genix is the student-run tech society of GTBIT — a place to build, compete, debate,
                and grow alongside people who take their craft seriously.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/about" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-teal text-primary-foreground font-semibold hover:glow-teal transition-all hover:scale-[1.02]">
                  Join Genix
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/events" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border hover:border-teal hover:text-teal font-semibold transition">
                  Explore Events
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
                <div><div className="text-2xl font-display font-bold text-foreground">100+</div>Active members</div>
                <div className="h-8 w-px bg-border" />
                <div><div className="text-2xl font-display font-bold text-foreground">15+</div>Events hosted</div>
                <div className="h-8 w-px bg-border" />
                <div><div className="text-2xl font-display font-bold text-foreground">4</div>Core verticals</div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative hidden lg:block">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square max-w-md mx-auto"
            >
              <div className="absolute inset-0 rounded-4xl gradient-brand opacity-30 blur-3xl" />
              <div className="relative h-full w-full rounded-4xl border border-border bg-card/60 backdrop-blur-xl p-10 flex items-center justify-center glow-teal">
                <img src={genixImg} alt="Genix" className="w-full h-full object-contain drop-shadow-2xl" />
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-teal mb-4">// About Genix</div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">A society built by students who ship.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground">
              We run workshops, debates, and competitions that make classroom theory feel real.
              If you like building things, arguing about tech, or just want a community that pushes you
              forward — Genix is where you belong.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all">
              Learn more about us <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <div className="text-xs uppercase tracking-widest text-teal mb-4">// Why join</div>
          <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">Built for first-years who want more than lectures.</h2>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group h-full rounded-2xl border border-border bg-card/50 p-6 hover:border-teal/60 hover:bg-card transition-colors"
              >
                <div className="h-11 w-11 rounded-xl bg-teal/10 border border-teal/30 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-primary-foreground transition">
                  <b.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.copy}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECH DEBATE HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24">
        <div className="relative rounded-3xl overflow-hidden border border-border bg-card/60">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-10 md:p-14 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs uppercase tracking-widest font-semibold">
                Flagship Event
              </div>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold">Tech Debate 2025</h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                Our flagship event brought together GTBIT's sharpest minds to argue the future of tech —
                AI ethics, open-source, and the next decade of software. A packed house, fierce rounds,
                and a room full of ideas.
              </p>
              <Link to="/events" className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-teal text-primary-foreground font-semibold hover:glow-teal transition">
                See more events <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative grid grid-cols-2 gap-2 p-4 lg:p-6">
              <img src={event1} alt="Tech Debate participants" className="rounded-xl object-cover h-full w-full aspect-4/5 col-span-2" loading="lazy" />
              <img src={event2} alt="Tech Debate group" className="rounded-xl object-cover h-full w-full aspect-square" loading="lazy" />
              <img src={event3} alt="Tech Debate faculty" className="rounded-xl object-cover h-full w-full aspect-square" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING TEASER */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="flex items-end justify-between mb-10">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-teal mb-3">// What's next</div>
            <h2 className="text-4xl md:text-5xl font-bold">Upcoming events</h2>
          </Reveal>
          <Link to="/events" className="hidden md:inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all">
            View all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { tag: "Workshop", title: "Intro to Full-Stack: from zero to deployed", when: "Coming soon" },
            { tag: "Competition", title: "Genix Hack Night — 12-hour build sprint", when: "Coming soon" },
          ].map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <div className="group rounded-2xl border border-border p-7 hover:border-teal/60 hover:bg-card/50 transition">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="px-2.5 py-1 rounded-full border border-border">{e.tag}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar size={13} />{e.when}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold group-hover:text-teal transition">{e.title}</h3>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal">RSVP <ArrowRight size={14} /></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TEAM TEASER */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24">
        <div className="flex items-end justify-between mb-10">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-teal mb-3">// Core team</div>
            <h2 className="text-4xl md:text-5xl font-bold">Meet the crew</h2>
          </Reveal>
          <Link to="/team" className="hidden md:inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all">
            Full team <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Gunit Singh", role: "President", img: gunitImg },
            { name: "Gurnoor Singh", role: "Vice President", img: gurnoorImg },
            { name: "Jasnoor Kaur", role: "Head of Operations", img: jasnoorImg },
            { name: "Agamjot Singh", role: "Executive Director", img: agamjotImg },
          ].map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <div className="group rounded-2xl overflow-hidden border border-border bg-card">
                <div className="aspect-4/5 overflow-hidden">
                  <img src={m.img} alt={m.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-4">
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-teal mb-3">// On the gram</div>
            <h2 className="text-4xl md:text-5xl font-bold">Follow us on Instagram</h2>
            <p className="mt-4 text-muted-foreground">The daily pulse of Genix — behind the scenes, event recaps, and more.</p>
          </Reveal>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { url: event1 },
            { url: event2 },
            { url: event3 },
            { url: event4 },
          ].map((e, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <a href="https://www.instagram.com/genix.gtbit" target="_blank" rel="noreferrer noopener" className="group relative block aspect-square rounded-xl overflow-hidden border border-border">
                <img src={e.url} alt="Instagram post" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <Instagram className="text-teal" size={24} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="https://www.instagram.com/genix.gtbit" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:border-teal hover:text-teal transition font-semibold">
            <Instagram size={18} /> Follow @genix.gtbit
          </a>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-border p-12 md:p-20 text-center gradient-brand">
          <div className="absolute inset-0 bg-background/70" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold">Ready to be part of Genix?</h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              First-years, second-years, seniors — if you build, argue, or just love tech, we want you in.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal text-primary-foreground font-bold text-lg hover:glow-teal transition hover:scale-[1.03]">
              Join Now <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
