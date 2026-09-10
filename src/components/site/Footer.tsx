import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";
import logoImg from "@/assets/logo.webp";


export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logoImg} alt="Genix" className="h-10 w-10 rounded-lg ring-1 ring-border" />
            <span className="font-display font-bold text-xl">GENIX</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            The official tech society of GTBIT — Guru Tegh Bahadur Institute of Technology.
            Where future technologists begin.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="https://www.instagram.com/genix.gtbit" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-border hover:border-teal hover:text-teal transition">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/company/genix-gtbit" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-border hover:border-teal hover:text-teal transition">
              <Linkedin size={18} />
            </a>
            <a href="mailto:genix.gtbit@gmail.com" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-border hover:border-teal hover:text-teal transition">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-teal">Home</Link></li>
            <li><Link to="/events" className="hover:text-teal">Events</Link></li>
            <li><Link to="/team" className="hover:text-teal">Team</Link></li>
            <li><Link to="/about" className="hover:text-teal">About</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Connect</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>@genix.gtbit</li>
            <li>GTBIT Campus, Delhi</li>
            <li>genix.gtbit@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Genix · GTBIT Tech Society</div>
          <div>Built by students, for students.</div>
        </div>
      </div>
    </footer>
  );
}
