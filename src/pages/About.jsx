import { Link } from "react-router-dom";
import { ArrowRight, Code2, MessageSquare, Mic, Users } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import event1 from "@/assets/event1.JPEG";
import event2 from "@/assets/event2.JPEG";
import event3 from "@/assets/event3.JPEG";
import event4 from "@/assets/event4.JPEG";

const activities = [
  { icon: Code2, title: "Workshops", copy: "Hands-on sessions on the tools students actually want to learn." },
  { icon: MessageSquare, title: "Tech Debates", copy: "Structured arguments on the biggest questions in tech." },
  { icon: Mic, title: "Tech Talks", copy: "Talks from seniors, alumni, and industry — the real playbook." },
  { icon: Users, title: "Community", copy: "A tight-knit group of curious builders across all years." },
];

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-teal/15 blur-[100px]" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-teal mb-4">// About</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-none">The story of <span className="text-gradient-brand">Genix</span>.</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              A student-run tech society at GTBIT built around one belief: the best way to learn tech is together, out loud, and by building.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid md:grid-cols-[1fr_1.4fr] gap-14">
        <Reveal>
          <div className="text-xs uppercase tracking-widest text-teal mb-3">// Mission</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Why we exist.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              Genix started with a simple frustration — classrooms teach syntax, but rarely the craft of
              actually building. We wanted a space at GTBIT where students could ship real projects, argue
              hard about ideas, and learn from each other without permission.
            </p>
            <p>
              Today, Genix is the official tech society of GTBIT — a home for anyone who takes tech seriously,
              regardless of year, branch, or how much they already know. If you're willing to show up and try,
              you're already one of us.
            </p>
            <p className="text-foreground font-medium">
              We stand for: <span className="text-teal">innovation</span>, <span className="text-teal">hands-on learning</span>, and <span className="text-teal">community first</span>.
            </p>
          </div>
        </Reveal>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <div className="text-xs uppercase tracking-widest text-teal mb-3">// What we do</div>
          <h2 className="text-4xl md:text-5xl font-bold">More than a club.</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {activities.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-card/50 p-6 hover:border-teal/60 transition">
                <div className="h-11 w-11 rounded-xl bg-teal/10 border border-teal/30 flex items-center justify-center text-teal">
                  <a.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONNECT */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-widest text-teal mb-3">// Connect</div>
            <h2 className="text-4xl md:text-5xl font-bold">Come find us.</h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              We're most active on Instagram — event drops, behind-the-scenes, and the day-to-day of Genix live there.
              Come say hi on campus or slide into our DMs.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://www.instagram.com/genix.gtbit" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-teal text-primary-foreground font-semibold hover:glow-teal transition">
                📸 @genix.gtbit
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:border-teal hover:text-teal font-semibold transition">
                💼 LinkedIn
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-2">
              <a href="https://www.instagram.com/genix.gtbit" target="_blank" rel="noreferrer" className="group relative block aspect-square rounded-xl overflow-hidden border border-border">
                <img src={event1} alt="Genix Event 1" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              </a>
              <a href="https://www.instagram.com/genix.gtbit" target="_blank" rel="noreferrer" className="group relative block aspect-square rounded-xl overflow-hidden border border-border">
                <img src={event2} alt="Genix Event 2" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              </a>
              <a href="https://www.instagram.com/genix.gtbit" target="_blank" rel="noreferrer" className="group relative block aspect-square rounded-xl overflow-hidden border border-border">
                <img src={event3} alt="Genix Event 3" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              </a>
              <a href="https://www.instagram.com/genix.gtbit" target="_blank" rel="noreferrer" className="group relative block aspect-square rounded-xl overflow-hidden border border-border">
                <img src={event4} alt="Genix Event 4" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-border p-12 md:p-20 text-center">
          <div className="absolute inset-0 gradient-brand opacity-90" />
          <div className="absolute inset-0 bg-background/60" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold">Join Genix.</h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg mx-auto">
              Membership is open every semester. First-years especially — this is your invite.
            </p>
            <a href="https://www.instagram.com/genix.gtbit" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal text-primary-foreground font-bold text-lg hover:glow-teal transition hover:scale-[1.03]">
              Become a member <ArrowRight />
            </a>
            <div className="mt-4">
              <Link to="/events" className="text-sm text-muted-foreground hover:text-foreground">or see upcoming events →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
