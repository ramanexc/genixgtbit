import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Trophy } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import event1 from "@/assets/event1.jpeg";
import event2 from "@/assets/event2.jpeg";
import event3 from "@/assets/event3.jpeg";


export default function Events() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-teal/20 blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-teal mb-4">// Events</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1]">What's next at <span className="text-gradient-brand">Genix</span>.</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Workshops, debates, hack nights — we're always cooking. Here's what's coming up and a look back at what we've shipped.
            </p>
          </Reveal>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Upcoming</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { tag: "Workshop", title: "Intro to Full-Stack: from zero to deployed", when: "Coming soon", where: "GTBIT Campus" },
            { tag: "Competition", title: "Genix Hack Night — 12-hour build sprint", when: "Coming soon", where: "GTBIT Campus" },
          ].map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <div className="group rounded-2xl border border-border p-7 hover:border-teal/60 hover:bg-card/50 transition h-full">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2.5 py-1 rounded-full border border-border">{e.tag}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar size={13} />{e.when}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin size={13} />{e.where}</span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold group-hover:text-teal transition">{e.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">[Short description of the event and what attendees will get out of it.]</p>
                <button className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-teal text-primary-foreground text-sm font-semibold hover:glow-teal transition">
                  RSVP <ArrowRight size={14} />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECH DEBATE RECAP */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs uppercase tracking-widest font-semibold">
            <Trophy size={12} /> Past · Flagship
          </div>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold">Tech Debate 2025.</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
            Our first flagship event — a packed hall, faculty, and Genix's core crew going head-to-head
            on the biggest questions in tech today. Topics ranged from AI ethics to the future of open-source,
            with sharp arguments, sharper rebuttals, and a genuine sense of community around ideas.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-6 gap-3 md:gap-4">
          <Reveal className="col-span-6 md:col-span-4">
            <figure className="rounded-2xl overflow-hidden border border-border">
              <img src={event1} alt="Genix Tech Debate participants" className="w-full aspect-[16/9] object-cover" />
              <figcaption className="p-4 text-sm text-muted-foreground bg-card">Genix core team and participants after the final round.</figcaption>
            </figure>
          </Reveal>
          <Reveal className="col-span-6 md:col-span-2" delay={0.08}>
            <figure className="rounded-2xl overflow-hidden border border-border h-full">
              <img src={event2} alt="Faculty at Tech Debate" className="w-full h-full aspect-[3/4] object-cover" />
            </figure>
          </Reveal>
          <Reveal className="col-span-6 md:col-span-6" delay={0.12}>
            <figure className="rounded-2xl overflow-hidden border border-border">
              <img src={event3} alt="Tech Debate group photo" className="w-full aspect-[21/9] object-cover" />
              <figcaption className="p-4 text-sm text-muted-foreground bg-card">A full house — students, faculty, and organizers together.</figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { k: "80+", v: "Attendees" },
              { k: "2 hrs", v: "Of debate" },
              { k: "5 topics", v: "Argued live" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border p-6 bg-card/40">
                <div className="text-3xl font-display font-bold text-teal">{s.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CLOSING */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="rounded-3xl border border-border p-10 md:p-14 text-center bg-card/50">
          <h2 className="text-3xl md:text-5xl font-bold">Don't miss the next one.</h2>
          <p className="mt-4 text-muted-foreground">Join Genix and get first access to every event we run.</p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal text-primary-foreground font-semibold hover:glow-teal transition">
            Join Genix <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
