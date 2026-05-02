import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Globe, MessageCircle, Star } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages?.find(img => img.id === "hero-prophetic");
  const prophetImage = PlaceHolderImages?.find(img => img.id === "prophet-lead");

  return (
    <div className="flex flex-col bg-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-hero-pattern z-0" />
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-none bg-primary text-black text-[10px] font-black uppercase tracking-[0.4em] mb-10">
            Prophetic Revelation
          </div>
          <h1 className="text-6xl md:text-9xl mb-8 leading-[0.9] font-black tracking-tighter uppercase">
            SPIRIT <span className="text-primary italic">REVELATION</span> CHURCH
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light leading-relaxed uppercase tracking-widest">
            A Supernatural Global Community Impacting Nations Through Power & Revelation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-primary text-black font-black h-16 px-12 text-sm rounded-none hover:bg-white transition-all uppercase tracking-[0.2em]">
              <Link href="/about">Our Vision</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-12 text-sm rounded-none border-white/20 text-white hover:bg-white hover:text-black uppercase tracking-[0.2em]">
              <Link href="/sermons" className="flex items-center gap-3">
                <Play className="h-4 w-4 fill-current" /> Watch Media
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 bg-zinc-950 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <div className="group space-y-8 text-center md:text-left border-l-0 md:border-l border-primary/20 md:pl-8">
              <Zap className="h-12 w-12 text-primary mx-auto md:mx-0" />
              <h3 className="text-3xl font-black italic text-white">SUPERNATURAL POWER</h3>
              <p className="text-muted-foreground leading-relaxed text-sm uppercase tracking-widest">
                Operating in the authentic authority of the Holy Spirit to transform destinies and reveal God's glory.
              </p>
            </div>
            <div className="group space-y-8 text-center md:text-left border-l-0 md:border-l border-primary/20 md:pl-8">
              <Globe className="h-12 w-12 text-primary mx-auto md:mx-0" />
              <h3 className="text-3xl font-black italic text-white">GLOBAL REACH</h3>
              <p className="text-muted-foreground leading-relaxed text-sm uppercase tracking-widest">
                Connecting millions across the globe through prophetic ministry and divine leadership.
              </p>
            </div>
            <div className="group space-y-8 text-center md:text-left border-l-0 md:border-l border-primary/20 md:pl-8">
              <MessageCircle className="h-12 w-12 text-primary mx-auto md:mx-0" />
              <h3 className="text-3xl font-black italic text-white">DEEP REVELATION</h3>
              <p className="text-muted-foreground leading-relaxed text-sm uppercase tracking-widest">
                Unveiling the hidden mysteries of the Word to provide precise direction for your future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prophet / Leadership Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-[4/5] overflow-hidden grayscale group hover:grayscale-0 transition-all duration-1000 border border-white/10 p-2">
              <div className="absolute inset-0 border-[20px] border-black z-10 pointer-events-none" />
              <Image 
                src={prophetImage?.imageUrl || "https://picsum.photos/seed/prophet/800/1000"}
                alt="Leadership"
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint="religious leader"
              />
            </div>
            <div className="space-y-10">
              <div className="inline-block px-4 py-1 bg-primary/10 border-l-4 border-primary text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
                Prophetic Office
              </div>
              <h2 className="text-5xl md:text-7xl font-black italic leading-[1.1]">THE PROPHETIC <br/> MANDATE</h2>
              <p className="text-lg text-muted-foreground leading-relaxed uppercase tracking-wider font-light">
                Led by the vision of our Prophet, Spirit Revelation Church is dedicated to uncovering the deep mysteries of the Kingdom. Through precision, power, and the accurate Word of God, we are raising a generation that walks in divine heritage.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6">
                <div className="space-y-2">
                  <h4 className="text-primary font-black">20M+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Global Followers</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-primary font-black">100+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Global Branches</p>
                </div>
              </div>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black rounded-none h-16 px-10 text-xs font-bold uppercase tracking-widest">
                <Link href="/about">Explore Our Roots</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery/Media Grid */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-1">
          <Link href="/sermons" className="group relative aspect-video md:aspect-[4/5] overflow-hidden border border-white/5">
            <Image 
              src="https://picsum.photos/seed/media1/800/1000" 
              alt="Media" 
              fill 
              className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              data-ai-hint="spiritual gathering"
            />
            <div className="absolute bottom-10 left-10 z-20">
              <h4 className="text-2xl font-black italic text-white group-hover:text-primary transition-colors">LATEST MEDIA</h4>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">Prophetic Messages</p>
            </div>
          </Link>
          <Link href="/events" className="group relative aspect-video md:aspect-[4/5] overflow-hidden border border-white/5">
            <Image 
              src="https://picsum.photos/seed/media2/800/1000" 
              alt="Events" 
              fill 
              className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              data-ai-hint="church conference"
            />
            <div className="absolute bottom-10 left-10 z-20">
              <h4 className="text-2xl font-black italic text-white group-hover:text-primary transition-colors">CONFERENCES</h4>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">Global Summits</p>
            </div>
          </Link>
          <Link href="/give" className="group relative aspect-video md:aspect-[4/5] overflow-hidden border border-white/5">
            <Image 
              src="https://picsum.photos/seed/media3/800/1000" 
              alt="Give" 
              fill 
              className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              data-ai-hint="helping people"
            />
            <div className="absolute bottom-10 left-10 z-20">
              <h4 className="text-2xl font-black italic text-white group-hover:text-primary transition-colors">PARTNERSHIP</h4>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2">Join the Mission</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-primary text-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Zap className="absolute -top-10 -right-10 h-96 w-96 rotate-12" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-6xl md:text-8xl font-black mb-8 italic leading-none">THE SUPERNATURAL AWAITS</h2>
          <p className="text-lg md:text-xl mb-14 font-bold uppercase tracking-[0.2em] max-w-2xl mx-auto">
            Experience the move of God at any of our global branches or join us live online.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-900 rounded-none h-20 px-16 text-sm font-black uppercase tracking-[0.3em]">
              <Link href="/contact">Find A Branch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none h-20 px-16 text-sm font-black uppercase tracking-[0.3em]">
              <Link href="/sermons">Watch Live</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
