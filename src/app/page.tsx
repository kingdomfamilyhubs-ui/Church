
"use client";

import Link from "next/link";
import Image from "next/image";
import { useFirestore, useCollection, useDoc } from "@/firebase";
import { collection, query, orderBy, limit, doc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, ShieldCheck, Zap, Calendar, Clock, MapPin, Loader2 } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";

export default function Home() {
  const firestore = useFirestore();

  const brandingRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, "settings", "branding");
  }, [firestore]);

  const { data: branding } = useDoc(brandingRef);

  const heroImage = branding?.heroUrl || PlaceHolderImages?.find(img => img.id === "hero-landing")?.imageUrl;
  const mandate = branding?.mandate || "Transforming non extinct into existence";

  const eventsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "events"), orderBy("createdAt", "desc"), limit(4));
  }, [firestore]);

  const { data: events, loading: eventsLoading } = useCollection(eventsQuery);

  return (
    <div className="flex flex-col bg-background overflow-x-hidden">
      {/* Cinematic Hero Section - Optimized for Logo/Photo Visibility */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage || "https://picsum.photos/seed/gif-landing/1920/1080"}
            alt="Prophetic Landing"
            fill
            className="object-cover brightness-[0.35] contrast-[1.1]"
            priority
            data-ai-hint="modern church"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-background" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/40 bg-primary/10 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-8 backdrop-blur-md rounded-md">
            PROPHETIC GLOBAL MANDATE
          </div>
          
          <h1 className="text-4xl md:text-6xl mb-8 font-black tracking-tighter uppercase italic leading-[1.05] text-white text-shadow-glow">
            {mandate.split(' ').slice(0, 1).join(' ')} <br/> 
            <span className="text-primary">{mandate.split(' ').slice(1, 3).join(' ')}</span> <br/> 
            {mandate.split(' ').slice(3).join(' ')}
          </h1>
          
          <p className="text-xs md:text-sm text-white/90 mb-12 max-w-2xl mx-auto italic font-medium leading-relaxed uppercase tracking-widest">
            Raising a unique prophetic generation to dominate, govern and colonize the earth with kingdom principles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild className="bg-primary text-black font-black h-14 px-10 rounded-md uppercase text-[10px] tracking-[0.3em] transition-all border-none shadow-2xl hover:scale-105 active:scale-95">
              <Link href="/about">DISCOVER OUR VISION</Link>
            </Button>
            <Button asChild className="bg-white text-black hover:bg-white/90 font-black h-14 px-10 rounded-md uppercase text-[10px] tracking-[0.3em] transition-all border-none shadow-2xl hover:scale-105 active:scale-95">
              <Link href="/join" className="flex items-center gap-2">
                JOIN YOUR TRIBE <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Strategic Value Grid */}
      <section className="py-32 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6 group">
              <div className="bg-card p-5 w-fit rounded-xl border border-border group-hover:border-primary transition-all duration-500 shadow-xl">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-black italic uppercase text-foreground leading-none mb-4 tracking-tight">PROPHETIC IDENTITY</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium italic">
                  Discover who and what you are in Christ Jesus through deep scriptural revelation and supernatural spiritual growth.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 group">
              <div className="bg-card p-5 w-fit rounded-xl border border-border group-hover:border-primary transition-all duration-500 shadow-xl">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-black italic uppercase text-foreground leading-none mb-4 tracking-tight">KINGDOM GOVERNANCE</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium italic">
                  We equip you with the principles and lifestyle needed to dominate and colonize the earth with authentic kingdom culture.
                </p>
              </div>
            </div>

            <div className="space-y-6 group">
              <div className="bg-card p-5 w-fit rounded-xl border border-border group-hover:border-primary transition-all duration-500 shadow-xl">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-black italic uppercase text-foreground leading-none mb-4 tracking-tight">DIVINE PURPOSE</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium italic">
                  Our core mission is to save, equip and deploy you into your God-ordained purpose on this earth for global impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Programs Section */}
      <section className="py-32 bg-secondary/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-4 rounded-md">
              Apostolic Gatherings
            </div>
            <h2 className="text-4xl font-black italic uppercase text-foreground tracking-tighter mb-4">WEEKLY PROGRAMS</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>

          {eventsLoading ? (
            <div className="flex justify-center py-24">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : events && events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {events.map((service: any) => (
                <Card key={service.id} className="bg-card border-white/5 hover:border-primary transition-all group rounded-xl shadow-2xl overflow-hidden">
                  <CardContent className="p-8 space-y-6 text-center">
                    <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">{service.date}</h4>
                      <h3 className="text-lg font-black italic uppercase text-white leading-none mb-4">{service.title}</h3>
                      <div className="space-y-3 pt-4 border-t border-white/5">
                         <p className="text-[9px] font-black text-white/50 flex items-center justify-center gap-2 uppercase tracking-widest">
                          <Clock className="h-3 w-3 text-primary" /> {service.time}
                        </p>
                        <p className="text-[9px] font-black text-white/50 flex items-center justify-center gap-2 uppercase tracking-widest">
                          <MapPin className="h-3 w-3 text-primary" /> {service.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-24 bg-card/50 border border-dashed border-white/10 rounded-2xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">No programs currently listed. Visit the Admin Portal to add services.</p>
            </div>
          )}
        </div>
      </section>

      {/* Final Deployment CTA */}
      <section className="py-32 bg-card border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black italic uppercase text-primary whitespace-nowrap">
            DOMINATE
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
          <div className="w-16 h-1 bg-primary mx-auto mb-10" />
          <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase leading-[1.1] mb-10 tracking-tighter">
            READY TO FULFILL <br/> YOUR ASSIGNMENT?
          </h2>
          <p className="text-xs md:text-sm text-white/60 mb-12 max-w-xl mx-auto italic font-medium leading-relaxed uppercase tracking-widest">
            Join a global community dedicated to kingdom leadership, core values, and supernatural excellence in every sphere of life.
          </p>
          <Button asChild className="bg-primary text-black font-black h-14 px-12 rounded-md uppercase text-[10px] tracking-[0.4em] transition-all hover:scale-105 active:scale-95 shadow-2xl">
            <Link href="/contact">LOCATE A BRANCH NEAR YOU</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
