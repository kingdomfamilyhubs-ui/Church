import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-xl font-black italic tracking-tighter uppercase">Spirit Revelation</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed uppercase tracking-wider text-justify">
              Raising a supernatural generation to walk in revelation, power, and authority to influence the world for the kingdom of God.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-primary">Ministry</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Prophet</Link></li>
              <li><Link href="/sermons" className="hover:text-primary transition-colors">Media Center</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Conferences</Link></li>
              <li><Link href="/give" className="hover:text-primary transition-colors">Partnership</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-primary">Contact</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> Revelation HQ, Faith City</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> +1 (800) SPIRIT-NOW</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> office@spiritrevelation.org</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-primary">Socials</h4>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Youtube className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 text-center text-[10px] font-bold uppercase tracking-[0.5em] text-muted-foreground">
          <p>© {new Date().getFullYear()} Spirit Revelation Global Church. All Power To God.</p>
        </div>
      </div>
    </footer>
  );
}
