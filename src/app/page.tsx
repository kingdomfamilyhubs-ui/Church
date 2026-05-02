import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Zap, MessageCircle, Shield } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const prophetImage = PlaceHolderImages?.find(img => img.id === "prophet-lead");

  return (
    <div className="flex flex-col bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern z-0 opacity-40" />
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary text-black text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            Prophetic Revelation
          </div>
          <h1 className="text-3xl md:text-5xl mb-6 leading-[1.1] font-black tracking-tighter uppercase italic text-white">
            GROWING <span className="text-primary">IN FAITH</span> <br/> GLOBAL CHURCH
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground mb-10 max-w-3xl mx-auto font-medium italic leading-relaxed text-white/80">
            "Transforming non extinct into existence" <br/>
            <span className="text-[11px] font-light tracking-widest opacity-70">— Romans 4:17</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-black font-black h-12 px-10 text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all">
              <Link href="/about">Our Vision</Link>
            </button>
            <button className="h-12 px-10 text-[10px] border border-white/20 text-white hover:bg-white hover:text-black uppercase tracking-[0.2em] transition-all">
              <Link href="/sermons" className="flex items-center gap-2">
                <Play className="h-3 w-3 fill-current" /> Watch Media
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: Zap, 
                title: "SUPERNATURAL POWER", 
                desc: "Operating in the authentic authority of the Holy Spirit to transform destinies." 
              },
              { 
                icon: Shield, 
                title: "PROPHETIC ASSIGNMENT", 
                desc: "Raising a unique generation of disciples to dominate with Kingdom principles." 
              },
              { 
                icon: MessageCircle, 
                title: "DEEP REVELATION", 
                desc: "Unveiling the hidden mysteries of the Word to provide precise direction." 
              }
            ].map((pillar, idx) => (
              <div key={idx} className="group space-y-4 text-center md:text-left border-l-0 md:border-l border-primary/20 md:pl-8 transition-all hover:border-primary">
                <pillar.icon className="h-6 w-6 text-primary mx-auto md:mx-0 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-black italic text-white leading-tight uppercase">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-xs">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden grayscale group hover:grayscale-0 transition-all duration-1000 border border-white/10 p-1 bg-zinc-900">
              <div className="absolute inset-0 border-[15px] border-black z-10 pointer-events-none" />
              <Image 
                src={prophetImage?.imageUrl || "https://picsum.photos/seed/prophet/800/1000"}
                alt="Leadership"
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                data-ai-hint="religious leader"
              />
            </div>
            <div className="space-y-8">
              <div className="inline-block px-3 py-1 bg-primary/10 border-l-2 border-primary text-primary text-[9px] font-bold uppercase tracking-[0.3em]">
                The Prophetic Mandate
              </div>
              <h2 className="text-2xl md:text-3xl font-black italic leading-[1.1] text-white uppercase">Transforming <br/> <span className="text-primary underline decoration-primary/30 underline-offset-4">Non Extinct</span> <br/> Into Existence</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Growing In Faith Global Church is dedicated to helping believers discover who they are in Christ and raising a generation that will govern the earth with Kingdom values.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6 border-y border-white/5">
                <div className="space-y-2">
                  <h4 className="text-xl text-primary font-black italic">20M+</h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Global Partnership</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl text-primary font-black italic">100+</h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Global Branches</p>
                </div>
              </div>
              <button className="border border-primary text-primary hover:bg-primary hover:text-black h-12 px-8 text-[10px] font-black uppercase tracking-[0.3em] transition-all">
                <Link href="/about">Explore Our Roots</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid CTA Section */}
      <section className="bg-zinc-950 grid grid-cols-1 md:grid-cols-3">
        {[
          { label: "LATEST MEDIA", sub: "Prophetic messages", href: "/sermons", hint: "spiritual gathering" },
          { label: "CONFERENCES", sub: "Global summits", href: "/events", hint: "church conference" },
          { label: "PARTNERSHIP", sub: "Join the mission", href: "/give", hint: "helping people" }
        ].map((item, idx) => (
          <Link key={idx} href={item.href} className="group relative aspect-square md:aspect-[4/5] overflow-hidden border border-white/5">
            <Image 
              src={`https://picsum.photos/seed/media${idx+1}/800/1000`} 
              alt={item.label} 
              fill 
              className="object-cover opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              data-ai-hint={item.hint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8 z-20">
              <h4 className="text-sm font-black italic text-white group-hover:text-primary transition-colors leading-none mb-2 uppercase">{item.label}</h4>
              <p className="text-[10px] font-medium text-muted-foreground">{item.sub}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <h2 className="text-[10vw] font-black italic opacity-20 select-none uppercase">FAITH</h2>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-4xl font-black mb-8 italic leading-[1.1] tracking-tighter uppercase">The Supernatural Awaits You</h2>
          <p className="text-sm md:text-base mb-10 font-bold max-w-2xl mx-auto leading-relaxed italic">
            "Transforming non extinct into existence"
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="bg-black text-white hover:bg-zinc-900 h-14 px-12 text-[11px] font-black uppercase tracking-[0.3em] shadow-xl">
              <Link href="/contact">Find A Branch</Link>
            </button>
            <button className="border border-black text-black hover:bg-black hover:text-white h-14 px-12 text-[11px] font-black uppercase tracking-[0.3em] transition-all">
              <Link href="/sermons">Watch Live</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
