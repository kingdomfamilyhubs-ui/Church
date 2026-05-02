
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages?.find(img => img.id === "hero-landing")?.imageUrl;

  return (
    <div className="flex flex-col bg-background overflow-x-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage || "https://picsum.photos/seed/church-hero/1920/1080"}
            alt="Prophetic Landing"
            fill
            className="object-cover brightness-[0.4]"
            priority
            data-ai-hint="modern church"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-primary/30 bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.5em] mb-12 backdrop-blur-sm rounded-full">
            Prophetic Global Mandate
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl mb-8 font-black tracking-tighter uppercase italic leading-[0.8] text-white">
            TRANSFORMING <br/> <span className="text-primary">NON EXTINCT</span> <br/> INTO EXISTENCE
          </h1>
          <p className="text-sm md:text-xl text-white/80 mb-14 max-w-2xl mx-auto italic font-medium leading-relaxed">
            Welcome to Growing In Faith Global Church, a unique prophetic generation raised to dominate, govern and colonize the earth with kingdom principles.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild className="bg-primary text-primary-foreground font-black h-14 px-12 rounded-md uppercase text-[11px] tracking-widest hover:opacity-90 transition-all shadow-2xl">
              <Link href="/about">Discover Our Vision</Link>
            </Button>
            <Button variant="outline" asChild className="h-14 px-12 rounded-md border-white/20 text-white hover:bg-white/10 uppercase text-[11px] font-black tracking-widest transition-all backdrop-blur-md">
              <Link href="/join" className="flex items-center gap-3">
                Join Your Tribe <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advanced Features Grid - Strategic Entrance */}
      <section className="py-32 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6 group">
              <div className="bg-card p-4 w-fit rounded-xl border border-border shadow-sm group-hover:border-primary transition-colors">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-black italic uppercase text-foreground leading-none">PROPHETIC IDENTITY</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Discover who and what you are in Christ Jesus through deep scriptural revelation and spiritual growth.
              </p>
            </div>
            
            <div className="space-y-6 group">
              <div className="bg-card p-4 w-fit rounded-xl border border-border shadow-sm group-hover:border-primary transition-colors">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-black italic uppercase text-foreground leading-none">KINGDOM GOVERNANCE</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We equip you with the principles and lifestyle needed to dominate and colonize the earth with kingdom culture.
              </p>
            </div>

            <div className="space-y-6 group">
              <div className="bg-card p-4 w-fit rounded-xl border border-border shadow-sm group-hover:border-primary transition-colors">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-black italic uppercase text-foreground leading-none DIVINE PURPOSE">DIVINE PURPOSE</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our mission is to save, equip and deploy you into your God-ordained purpose on this earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Clean CTA */}
      <section className="py-40 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black italic uppercase text-primary whitespace-nowrap">
            DOMINATE
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black italic text-card-foreground uppercase leading-[0.9] mb-10 tracking-tighter">
            READY TO FULFILL <br/> YOUR ASSIGNMENT?
          </h2>
          <p className="text-sm md:text-base text-card-foreground/70 mb-12 max-w-xl mx-auto italic">
            Join a global community of believers dedicated to kingdom leadership, values, and supernatural excellence.
          </p>
          <Button asChild className="bg-primary text-primary-foreground font-black h-16 px-14 rounded-md uppercase text-[11px] tracking-[0.4em] transition-all hover:scale-105 active:scale-95">
            <Link href="/contact">Locate A Branch Near You</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
