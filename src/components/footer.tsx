import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="bg-primary p-2 rotate-45 group-hover:bg-white transition-all">
                <Zap className="h-5 w-5 text-black -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter text-white leading-none uppercase italic">
                  GROWING <span className="text-primary group-hover:text-white transition-colors">IN FAITH</span>
                </span>
                <span className="text-[7px] tracking-[0.4em] text-muted-foreground uppercase mt-1">Global Church</span>
              </div>
            </Link>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground leading-loose text-justify italic">
              "Transforming non extinct into existence" — Romans 4:17. Operating in divine authority to reveal God's glory globally.
            </p>
          </div>

          <div>
            <h4 className="text-[9px] font-black mb-6 uppercase tracking-[0.4em] text-primary italic">THE MINISTRY</h4>
            <ul className="space-y-3 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">Vision & Mission</Link></li>
              <li><Link href="/sermons" className="hover:text-primary transition-colors">Media Archive</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Upcoming Events</Link></li>
              <li><Link href="/give" className="hover:text-primary transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] font-black mb-6 uppercase tracking-[0.4em] text-primary italic">GET IN TOUCH</h4>
            <ul className="space-y-3 text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              <li className="flex items-center gap-3"><MapPin className="h-3.5 w-3.5 text-primary" /> Faith HQ, Global City Hub</li>
              <li className="flex items-center gap-3"><Phone className="h-3.5 w-3.5 text-primary" /> +1 (800) FAITH-NOW</li>
              <li className="flex items-center gap-3"><Mail className="h-3.5 w-3.5 text-primary" /> office@gifglobalchurch.org</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] font-black mb-6 uppercase tracking-[0.4em] text-primary italic">OUR SOCIALS</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-primary transition-colors"><Facebook className="h-4 w-4" /></Link>
              <Link href="#" className="text-white hover:text-primary transition-colors"><Twitter className="h-4 w-4" /></Link>
              <Link href="#" className="text-white hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></Link>
              <Link href="#" className="text-white hover:text-primary transition-colors"><Youtube className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-[8px] font-black uppercase tracking-[0.5em] text-muted-foreground">
          <p>© {new Date().getFullYear()} Growing In Faith Global Church. All Power To God.</p>
        </div>
      </div>
    </footer>
  );
}
