
'use client';

import Link from "next/link";
import Image from "next/image";
import { useFirestore, useCollection } from "@/firebase";
import { collection, query, where, limit } from "firebase/firestore";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Loader2 } from "lucide-react";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";

export function Footer() {
  const firestore = useFirestore();
  
  const hqQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "branches"), where("isHeadquarters", "==", true), limit(1));
  }, [firestore]);

  const { data: branches, loading } = useCollection(hqQuery);
  const hq = branches && branches.length > 0 ? branches[0] : null;

  return (
    <footer className="bg-card py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-md bg-primary/20 flex items-center justify-center border border-primary/10">
                <Image 
                  src="/logo.png" 
                  alt="GIF Logo" 
                  fill 
                  className="object-contain p-1 z-10"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span className="text-primary font-black italic text-xs absolute z-0">GIF</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black tracking-tighter text-card-foreground leading-none uppercase italic">
                  GROWING <span className="text-primary">IN FAITH</span>
                </span>
                <span className="text-[6px] tracking-[0.4em] text-card-foreground/50 uppercase mt-1 font-black">Global Church</span>
              </div>
            </div>
            <p className="text-[10px] text-card-foreground/60 leading-relaxed italic font-medium">
              "Transforming non extinct into existence" — Romans 4:17. Raising a unique prophetic generation of disciples to govern and colonize the earth.
            </p>
          </div>

          <div>
            <h4 className="text-[9px] font-black mb-8 uppercase tracking-widest text-primary italic">THE MINISTRY</h4>
            <ul className="space-y-4 text-[9px] font-black uppercase tracking-[0.2em] text-card-foreground/70">
              <li><Link href="/about" className="hover:text-primary transition-colors">VISION & MISSION</Link></li>
              <li><Link href="/sermons" className="hover:text-primary transition-colors">MEDIA ARCHIVE</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">UPCOMING EVENTS</Link></li>
              <li><Link href="/give" className="hover:text-primary transition-colors">PARTNER WITH US</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] font-black mb-8 uppercase tracking-widest text-primary italic">GET IN TOUCH</h4>
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin text-primary" />
            ) : (
              <ul className="space-y-5 text-[10px] text-card-foreground/70 font-medium">
                <li className="flex items-center gap-4">
                  <MapPin className="h-4 w-4 text-primary shrink-0" /> 
                  <span className="text-card-foreground uppercase text-[8px] font-black tracking-wider">
                    {hq?.name || "Faith HQ, Global City Hub"}
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="h-4 w-4 text-primary shrink-0" /> 
                  <span className="text-card-foreground uppercase text-[8px] font-black tracking-wider">
                    {hq?.phone || "+260770933607"}
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="h-4 w-4 text-primary shrink-0" /> 
                  <span className="text-card-foreground text-[8px] font-black tracking-wider break-all uppercase">
                    {hq?.email || "growinginfaithglobalchurch@gmail.com"}
                  </span>
                </li>
              </ul>
            )}
          </div>

          <div>
            <h4 className="text-[9px] font-black mb-8 uppercase tracking-widest text-primary italic">FOLLOW THE MANDATE</h4>
            <div className="flex gap-5">
              <Link href="#" className="text-card-foreground/30 hover:text-primary transition-colors"><Facebook className="h-4 w-4" /></Link>
              <Link href="#" className="text-card-foreground/30 hover:text-primary transition-colors"><Twitter className="h-4 w-4" /></Link>
              <Link href="#" className="text-card-foreground/30 hover:text-primary transition-colors"><Instagram className="h-4 w-4" /></Link>
              <Link href="#" className="text-card-foreground/30 hover:text-primary transition-colors"><Youtube className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-[7px] font-black uppercase tracking-[0.3em] text-card-foreground/40">
          <p>© {new Date().getFullYear()} Growing In Faith Global Church. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
