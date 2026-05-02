import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Zap, Globe, MessageCircle } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const prophetImage = PlaceHolderImages?.find(img => img.id === "prophet-lead");

  return (
    <div className="flex flex-col bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern z-0 opacity-40" />
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-black text-[10px] font-black uppercase tracking-[0.4em] mb-10 animate-in fade-in slide-in-from-top-4 duration-1000">
            Prophetic Revelation
          </div>
          <h1 className="text-6xl md:text-[10rem] mb-8 leading-[0.85] font-black tracking-tighter uppercase italic animate-in fade-in zoom-in-95 duration-1000 text-white">
            GROWING <span className="text-primary">IN FAITH</span> <br/> GLOBAL CHURCH
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto font-light leading-relaxed uppercase tracking-[0.3em] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Deeper Faith • Supernatural Power • Global Mandate
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <Button asChild size="lg" className="bg-primary text-black font-black h-20 px-16 text-xs rounded-none hover:bg-white transition-all uppercase tracking-[0.3em]">
              <Link href="/about">Our Vision</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-20 px-16 text-xs rounded-none border-white/20 text-white hover:bg-white hover:text-black uppercase tracking-[0.3em]">
              <Link href="/sermons" className="flex items-center gap-3">
                <Play className="h-4 w-4 fill-current" /> Watch Media
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-40 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
        <div className="absolute -right-20 top-20 opacity-5 pointer-events-none">
          <Zap className="h-[40rem] w-[40rem] text-primary rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {[
              { 
                icon: Zap, 
                title: "SUPERNATURAL POWER", 
                desc: "Operating in the authentic authority of the Holy Spirit to transform destinies and reveal God's glory." 
              },
              { 
                icon: Globe, 
                title: "GLOBAL REACH", 
                desc: "Connecting millions across the globe through prophetic ministry and divine leadership." 
              },
              { 
                icon: MessageCircle, 
                title: "DEEP REVELATION", 
                desc: "Unveiling the hidden mysteries of the Word to provide precise direction for your future." 
              }
            ].map((pillar, idx) => (
              <div key={idx} className="group space-y-10 text-center md:text-left border-l-0 md:border-l-2 border-primary/20 md:pl-12 transition-all hover:border-primary">
                <pillar.icon className="h-16 w-16 text-primary mx-auto md:mx-0 group-hover:scale-110 transition-transform" />
                <h3 className="text-4xl font-black italic text-white leading-tight">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[11px] font-bold uppercase tracking-[0.25em]">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-40 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative aspect-[4/5] overflow-hidden grayscale group hover:grayscale-0 transition-all duration-1000 border border-white/10 p-2 bg-zinc-900">
              <div className="absolute inset-0 border-[30px] border-black z-10 pointer-events-none" />
              <Image 
                src={prophetImage?.imageUrl || "https://picsum.photos/seed/prophet/800/1000"}
                alt="Leadership"
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                data-ai-hint="religious leader"
              />
            </div>
            <div className="space-y-12">
              <div className="inline-block px-4 py-1 bg-primary/10 border-l-4 border-primary text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
                The Prophetic Mandate
              </div>
              <h2 className="text-6xl md:text-8xl font-black italic leading-[0.9] text-white">Raising a <br/> <span className="text-primary underline decoration-primary/30 underline-offset-8">Supernatural</span> <br/> Generation</h2>
              <p className="text-lg text-muted-foreground leading-relaxed uppercase tracking-widest font-light text-justify">
                Growing In Faith Global Church is dedicated to uncovering the deep mysteries of the Kingdom. Through precision, power, and the accurate Word of God, we are raising a generation that walks in divine heritage and global influence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 py-8 border-y border-white/5">
                <div className="space-y-4">
                  <h4 className="text-5xl text-primary font-black italic">20M+</h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Global Partnership</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-5xl text-primary font-black italic">100+</h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Global Branches</p>
                </div>
              </div>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black rounded-none h-20 px-12 text-xs font-black uppercase tracking-[0.4em] transition-all">
                <Link href="/about">Explore Our Roots</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid CTA Section */}
      <section className="bg-zinc-950 grid grid-cols-1 md:grid-cols-3">
        {[
          { label: "LATEST MEDIA", sub: "Prophetic Messages", href: "/sermons", hint: "spiritual gathering" },
          { label: "CONFERENCES", sub: "Global Summits", href: "/events", hint: "church conference" },
          { label: "PARTNERSHIP", sub: "Join the Mission", href: "/give", hint: "helping people" }
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
            <div className="absolute bottom-12 left-12 z-20">
              <h4 className="text-4xl font-black italic text-white group-hover:text-primary transition-colors leading-none mb-4">{item.label}</h4>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">{item.sub}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* Final CTA */}
      <section className="py-60 bg-primary text-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <h2 className="text-[30vw] font-black italic opacity-20 select-none">FAITH</h2>
        </div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-7xl md:text-[9rem] font-black mb-12 italic leading-[0.85] tracking-tighter">THE SUPERNATURAL <br/> AWAITS YOU</h2>
          <p className="text-xl md:text-2xl mb-20 font-black uppercase tracking-[0.4em] max-w-3xl mx-auto leading-relaxed">
            Experience the move of God at any of our global branches or join us live online.
          </p>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-900 rounded-none h-24 px-20 text-xs font-black uppercase tracking-[0.4em] shadow-2xl">
              <Link href="/contact">Find A Branch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none h-24 px-20 text-xs font-black uppercase tracking-[0.4em] transition-all">
              <Link href="/sermons">Watch Live</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
