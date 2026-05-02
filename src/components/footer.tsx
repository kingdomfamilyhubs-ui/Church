import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Cross } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-40 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24">
          <div className="col-span-1 md:col-span-1 space-y-12">
            <Link href="/" className="flex items-center gap-6 group">
              <div className="bg-primary p-3 rotate-45 group-hover:bg-white transition-all">
                <Zap className="h-8 w-8 text-black -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-white leading-none uppercase italic">
                  SPIRIT <span className="text-primary group-hover:text-white transition-colors">REVELATION</span>
                </span>
                <span className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase mt-1">Global Church</span>
              </div>
            </Link>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground leading-loose text-justify">
              Raising a supernatural generation to walk in revelation, power, and authority to influence the world for the kingdom of God.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black mb-12 uppercase tracking-[0.5em] text-primary italic">THE MINISTRY</h4>
            <ul className="space-y-6 text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">Prophetic Vision</Link></li>
              <li><Link href="/sermons" className="hover:text-primary transition-colors">Media Archive</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Global Conferences</Link></li>
              <li><Link href="/give" className="hover:text-primary transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black mb-12 uppercase tracking-[0.5em] text-primary italic">GET IN TOUCH</h4>
            <ul className="space-y-6 text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
              <li className="flex items-center gap-6"><MapPin className="h-5 w-5 text-primary" /> Revelation HQ, Global Hub</li>
              <li className="flex items-center gap-6"><Phone className="h-5 w-5 text-primary" /> +1 (800) SPIRIT-NOW</li>
              <li className="flex items-center gap-6"><Mail className="h-5 w-5 text-primary" /> office@spiritrevelation.org</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black mb-12 uppercase tracking-[0.5em] text-primary italic">OUR SOCIALS</h4>
            <div className="flex gap-10">
              <Link href="#" className="text-white hover:text-primary transition-colors"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="text-white hover:text-primary transition-colors"><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="text-white hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" className="text-white hover:text-primary transition-colors"><Youtube className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        
        <div className="mt-40 pt-12 border-t border-white/5 text-center text-[10px] font-black uppercase tracking-[0.8em] text-muted-foreground">
          <p>© {new Date().getFullYear()} Spirit Revelation Global Church. All Power To God.</p>
        </div>
      </div>
    </footer>
  );
}