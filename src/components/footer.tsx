import Link from "next/link";
import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="bg-primary p-2 group-hover:bg-white transition-all rotate-45">
                <Zap className="h-5 w-5 text-black -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter text-white leading-none uppercase italic">
                  GROWING <span className="text-primary group-hover:text-white transition-colors">IN FAITH</span>
                </span>
                <span className="text-[7px] tracking-[0.4em] text-muted-foreground uppercase mt-1">Global Church</span>
              </div>
            </Link>
            <p className="text-xs text-muted-foreground leading-loose italic">
              "Transforming non extinct into existence" — Romans 4:17. Our assignment is to raise a unique prophetic generation of disciples who will dominate and colonize the earth with Kingdom principles.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black mb-8 uppercase tracking-widest text-primary italic">THE MINISTRY</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">VISION & MISSION</Link></li>
              <li><Link href="/sermons" className="hover:text-primary transition-colors">MEDIA ARCHIVE</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">UPCOMING EVENTS</Link></li>
              <li><Link href="/give" className="hover:text-primary transition-colors">PARTNER WITH US</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black mb-8 uppercase tracking-widest text-primary italic">GET IN TOUCH</h4>
            <ul className="space-y-5 text-xs text-muted-foreground font-medium">
              <li className="flex items-center gap-4">
                <MapPin className="h-4 w-4 text-primary shrink-0" /> 
                <span>Faith HQ, Global City Hub</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-4 w-4 text-primary shrink-0" /> 
                <span>+1 (800) FAITH-NOW</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-4 w-4 text-primary shrink-0" /> 
                <span>office@gifglobalchurch.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black mb-8 uppercase tracking-widest text-primary italic">OUR SOCIALS</h4>
            <div className="flex gap-6">
              <Link href="#" className="text-white hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-white hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="text-white hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-white hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/5 text-center text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
          <p>© {new Date().getFullYear()} Growing In Faith Global Church. Transforming non extinct into existence.</p>
        </div>
      </div>
    </footer>
  );
}