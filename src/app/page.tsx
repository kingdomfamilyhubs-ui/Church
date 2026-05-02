
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages?.find(img => img.id === "hero-landing")?.imageUrl;

  return (
    <div className="flex flex-col bg-background overflow-x-hidden">
      {/* Cinematic Hero Section - Adjusted Height */}
      <section className="relative h-[75vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage || "https://picsum.photos/seed/gif-landing/1920/1080"}
            alt="Prophetic Landing"
            fill
            className="object-cover brightness-[0.4]"
            priority
            data-ai-hint="modern church"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-background" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-6 py-2 border border-primary/40 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8 backdrop-blur-sm rounded-full animate-in fade-in slide-in-from-top-4 duration-1000">
            Prophetic Global Mandate
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-black tracking-tighter uppercase italic leading-[1] text-white animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            TRANSFORMING <br/> 
            <span className="text-primary">NON EXTINCT</span> <br/> 
            INTO EXISTENCE
          </h1>
          
          <p className="text-sm md:text-base text-white/80 mb-10 max-w-2xl mx-auto italic font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            Welcome to Growing In Faith Global Church, a unique prophetic generation raised to dominate, govern and colonize the earth with kingdom principles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in zoom-in-95 duration-1000 delay-700">
            <Button asChild className="bg-primary text-primary-foreground font-black h-14 px-10 rounded-md uppercase text-[10px] tracking-[0.2em] transition-all border-none">
              <Link href="/about">Discover Our Vision</Link>
            </Button>
            <Button variant="outline" asChild className="h-14 px-10 rounded-md border-white/20 text-white hover:bg-white/10 uppercase text-[10px] font-black tracking-[0.2em] transition-all backdrop-blur-sm">
              <Link href="/join" className="flex items-center gap-2">
                Join Your Tribe <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Strategic Value Grid */}
      <section className="py-24 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6 group">
              <div className="bg-card p-4 w-fit rounded-xl border border-border group-hover:border-primary transition-all duration-500">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-black italic uppercase text-foreground leading-none mb-3 tracking-tight">PROPHETIC IDENTITY</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  Discover who and what you are in Christ Jesus through deep scriptural revelation and supernatural spiritual growth.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 group">
              <div className="bg-card p-4 w-fit rounded-xl border border-border group-hover:border-primary transition-all duration-500">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-black italic uppercase text-foreground leading-none mb-3 tracking-tight">KINGDOM GOVERNANCE</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  We equip you with the principles and lifestyle needed to dominate and colonize the earth with authentic kingdom culture.
                </p>
              </div>
            </div>

            <div className="space-y-6 group">
              <div className="bg-card p-4 w-fit rounded-xl border border-border group-hover:border-primary transition-all duration-500">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-black italic uppercase text-foreground leading-none mb-3 tracking-tight">DIVINE PURPOSE</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  Our core mission is to save, equip and deploy you into your God-ordained purpose on this earth for global impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Clean CTA */}
      <section className="py-32 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black italic uppercase text-primary whitespace-nowrap">
            DOMINATE
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <div className="w-16 h-1 bg-primary mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-black italic text-card-foreground uppercase leading-[1] mb-8 tracking-tighter">
            READY TO FULFILL <br/> YOUR ASSIGNMENT?
          </h2>
          <p className="text-xs md:text-sm text-card-foreground/70 mb-12 max-w-xl mx-auto italic font-medium leading-relaxed">
            Join a global community of believers dedicated to kingdom leadership, core values, and supernatural excellence in every sphere of life.
          </p>
          <Button asChild className="bg-primary text-primary-foreground font-black h-16 px-12 rounded-md uppercase text-[10px] tracking-[0.3em] transition-all hover:opacity-90 active:scale-95 shadow-xl">
            <Link href="/contact">Locate A Branch Near You</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
