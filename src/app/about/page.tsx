
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { User, Shield, Briefcase, Star } from "lucide-react";

export default function AboutPage() {
  const visionImage = PlaceHolderImages.find(img => img.id === "about-vision")?.imageUrl;
  const founderImage = PlaceHolderImages.find(img => img.id === "leadership-founder")?.imageUrl;
  const directorImage = PlaceHolderImages.find(img => img.id === "leadership-director")?.imageUrl;

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header - Advanced Professional */}
      <section className="bg-card py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] font-black italic uppercase text-primary whitespace-nowrap">
            IDENTITY
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-8 rounded-md">
            OUR DIVINE MANDATE
          </div>
          <h1 className="text-3xl md:text-5xl mb-6 font-black italic tracking-tighter uppercase text-card-foreground leading-none">WHO WE ARE</h1>
          <p className="text-[11px] md:text-xs text-card-foreground/80 max-w-2xl mx-auto leading-relaxed italic uppercase tracking-widest font-medium">
            A global family united by faith, driven by divine purpose, and anchored in the supernatural power of God.
          </p>
        </div>
      </section>

      {/* Core Identity Pillars */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-1 gap-8">
              {[
                { title: "OUR VISION", desc: "Transforming non extinct into existence, Romans 4:17. We call forth the realities of the Kingdom into the visible realm." },
                { title: "OUR MISSION", desc: "Our mission is to save, equip and deploy people into their God ordained purpose here on earth." },
                { title: "OUR PURPOSE", desc: "To help believers discover their identity in Christ Jesus and activate their God-ordained assignment for global impact." },
                { title: "OUR ASSIGNMENT", desc: "To raise a unique prophetic generation of disciples who will dominate, govern and colonize the earth with kingdom culture." }
              ].map((item, idx) => (
                <div key={idx} className="relative group p-6 border-l-2 border-primary/20 hover:border-primary transition-all duration-500 bg-secondary/10 rounded-r-xl">
                  <h2 className="text-lg font-black italic mb-3 text-foreground uppercase tracking-tight">{item.title}</h2>
                  <p className="text-[11px] text-muted-foreground leading-relaxed italic font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute -inset-3 border border-border/50 rounded-xl" />
              <div className="relative aspect-[4/5] bg-card overflow-hidden transition-all duration-1000 rounded-lg shadow-2xl">
                <Image 
                  src={visionImage || "https://picsum.photos/seed/about-vision/800/1000"} 
                  alt="Global Community" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="spiritual community"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kingdom Leadership Section */}
      <section className="py-24 bg-secondary/10 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-4 rounded-md">
              Apostolic Oversight
            </div>
            <h2 className="text-3xl md:text-4xl font-black italic mb-4 text-foreground uppercase tracking-tighter">KINGDOM LEADERSHIP</h2>
            <div className="w-12 h-0.5 bg-primary mx-auto" />
          </div>

          {/* Founders */}
          <div className="mb-24">
            <h3 className="text-sm font-black italic text-primary uppercase tracking-[0.3em] mb-12 flex items-center gap-3">
              <Star className="h-4 w-4" /> FOUNDERS & VISIONARIES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[1, 2].map((i) => (
                <Card key={i} className="bg-card border-none shadow-2xl overflow-hidden group rounded-xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="relative aspect-[4/5] sm:aspect-auto h-80 sm:h-auto overflow-hidden">
                      <Image 
                        src={founderImage || `https://picsum.photos/seed/founder-${i}/600/800`}
                        alt="Founder"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        data-ai-hint="visionary leader"
                      />
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <h4 className="text-xl font-black italic text-white uppercase mb-2">FOUNDER NAME</h4>
                      <p className="text-[9px] font-black text-primary uppercase tracking-widest mb-4">Lead Visionary</p>
                      <p className="text-[11px] text-white/60 leading-relaxed italic font-medium">
                        Dedicated to raising a prophetic generation through apostolic authority and divine revelation.
                      </p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Directors & Board */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <h3 className="text-xs font-black italic text-primary uppercase tracking-[0.3em] flex items-center gap-3">
                <Briefcase className="h-4 w-4" /> DIRECTORS
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-6 p-4 bg-card rounded-xl border border-white/5 hover:border-primary/20 transition-all">
                    <div className="relative h-20 w-20 rounded-lg overflow-hidden shrink-0">
                      <Image 
                        src={directorImage || `https://picsum.photos/seed/dir-${i}/200/200`}
                        alt="Director"
                        fill
                        className="object-cover grayscale"
                        data-ai-hint="corporate leader"
                      />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black text-white uppercase">DIRECTOR NAME</h4>
                      <p className="text-[8px] text-primary font-black uppercase tracking-widest">Departmental Head</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <h3 className="text-xs font-black italic text-primary uppercase tracking-[0.3em] flex items-center gap-3">
                <Shield className="h-4 w-4" /> BOARD OF LEADERS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-5 p-5 bg-card/50 border border-white/5 rounded-xl group hover:bg-card transition-all">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-white uppercase">BOARD MEMBER</h4>
                      <p className="text-[7px] text-white/40 font-black uppercase tracking-[0.2em]">Council Representative</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kingdom Principles */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black italic mb-4 text-foreground uppercase tracking-tighter">KINGDOM PRINCIPLES</h2>
            <div className="w-12 h-0.5 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "THE HOLY SCRIPTURES", desc: "We believe the Bible is the inspired, only infallible, and authoritative Word of God." },
              { title: "THE ETERNAL GODHEAD", desc: "We believe there is one God, eternally existent in three persons: Father, Son, and Holy Spirit." },
              { title: "THE REDEMPTIVE WORK", desc: "We believe in the deity of our Lord Jesus Christ, His virgin birth, and His vicarious death." },
              { title: "SPIRITUAL RENEWAL", desc: "We believe that for the salvation of lost and sinful people, regeneration by the Holy Spirit is essential." },
              { title: "DIVINE HEALING", desc: "We believe that the redemptive work of Christ provides healing for the whole human person." },
              { title: "DOMINION MANDATE", desc: "We believe in the power and authority of the believer to govern and occupy the earth for the Kingdom." }
            ].map((belief, idx) => (
              <div key={idx} className="bg-secondary/10 p-8 border border-border/10 hover:border-primary transition-all duration-500 rounded-lg group">
                <h4 className="text-[10px] font-black italic mb-3 text-primary uppercase tracking-widest">{belief.title}</h4>
                <p className="text-[11px] text-muted-foreground group-hover:text-foreground leading-relaxed transition-colors font-medium italic">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
