
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
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage || "https://picsum.photos/seed/gif-landing/1920/1080"}
            alt="Prophetic Landing"
            fill
            className="object-cover brightness-[0.35]"
            priority
            data-ai-hint="modern church"
          />
          {/* Advanced Multi-layered Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 px-8 py-2.5 border border-primary/40 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.6em] mb-10 backdrop-blur-md rounded-full shadow-2xl animate-in fade-in slide-in-from-top-4 duration-1000">
            Prophetic Global Mandate
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-8 font-black tracking-tighter uppercase italic leading-[0.85] text-white drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            TRANSFORMING <br/> 
            <span className="text-primary decoration-primary/30 underline-offset-[12px]">NON EXTINCT</span> <br/> 
            INTO EXISTENCE
          </h1>
          
          <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-14 max-w-3xl mx-auto italic font-medium leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            Welcome to Growing In Faith Global Church, a unique prophetic generation raised to dominate, govern and colonize the earth with kingdom principles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in zoom-in-95 duration-1000 delay-700">
            <Button asChild className="bg-primary text-primary-foreground font-black h-16 px-14 rounded-md uppercase text-[11px] tracking-[0.3em] hover:scale-105 transition-all shadow-2xl border-none">
              <Link href="/about">Discover Our Vision</Link>
            </Button>
            <Button variant="outline" asChild className="h-16 px-14 rounded-md border-white/30 text-white hover:bg-white/10 uppercase text-[11px] font-black tracking-[0.3em] transition-all backdrop-blur-md">
              <Link href="/join" className="flex items-center gap-3">
                Join Your Tribe <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Strategic Value Grid */}
      <section className="py-32 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            <div className="space-y-8 group">
              <div className="bg-card p-5 w-fit rounded-2xl border border-border shadow-lg group-hover:border-primary group-hover:shadow-primary/10 transition-all duration-500">
                <Star className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-black italic uppercase text-foreground leading-none mb-4 tracking-tight">PROPHETIC IDENTITY</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  Discover who and what you are in Christ Jesus through deep scriptural revelation and supernatural spiritual growth.
                </p>
              </div>
            </div>
            
            <div className="space-y-8 group">
              <div className="bg-card p-5 w-fit rounded-2xl border border-border shadow-lg group-hover:border-primary group-hover:shadow-primary/10 transition-all duration-500">
                <ShieldCheck className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-black italic uppercase text-foreground leading-none mb-4 tracking-tight">KINGDOM GOVERNANCE</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  We equip you with the principles and lifestyle needed to dominate and colonize the earth with authentic kingdom culture.
                </p>
              </div>
            </div>

            <div className="space-y-8 group">
              <div className="bg-card p-5 w-fit rounded-2xl border border-border shadow-lg group-hover:border-primary group-hover:shadow-primary/10 transition-all duration-500">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-black italic uppercase text-foreground leading-none mb-4 tracking-tight">DIVINE PURPOSE</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  Our core mission is to save, equip and deploy you into your God-ordained purpose on this earth for global impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Clean CTA */}
      <section className="py-48 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black italic uppercase text-primary whitespace-nowrap">
            DOMINATE
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />
          <h2 className="text-4xl md:text-7xl font-black italic text-card-foreground uppercase leading-[0.9] mb-10 tracking-tighter">
            READY TO FULFILL <br/> YOUR ASSIGNMENT?
          </h2>
          <p className="text-sm md:text-lg text-card-foreground/70 mb-16 max-w-2xl mx-auto italic font-medium leading-relaxed">
            Join a global community of believers dedicated to kingdom leadership, core values, and supernatural excellence in every sphere of life.
          </p>
          <Button asChild className="bg-primary text-primary-foreground font-black h-20 px-16 rounded-md uppercase text-[12px] tracking-[0.5em] transition-all hover:scale-105 active:scale-95 shadow-2xl">
            <Link href="/contact">Locate A Branch Near You</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
