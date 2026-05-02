import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages?.find(img => img.id === "hero-prophetic")?.imageUrl;
  const leadImage = PlaceHolderImages?.find(img => img.id === "prophet-lead")?.imageUrl;

  return (
    <div className="flex flex-col bg-black overflow-x-hidden">
      {/* Professional Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage || "https://picsum.photos/seed/church-hero/1920/1080"}
            alt="Prophetic Worship"
            fill
            className="object-cover opacity-50 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-3 px-4 py-1 border border-primary/30 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-8">
            Prophetic Revelation
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 font-black tracking-tighter uppercase italic leading-[0.9] text-white">
            Growing <span className="text-primary">In Faith</span> <br/> Global Church
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto italic font-medium">
            Transforming non extinct into existence, Romans 4:17
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild className="bg-primary text-black font-black h-14 px-12 rounded-none uppercase text-[11px] tracking-widest hover:bg-white transition-all">
              <Link href="/about">Our Vision</Link>
            </Button>
            <Button variant="outline" asChild className="h-14 px-12 rounded-none text-white border-white/20 hover:bg-white hover:text-black uppercase text-[11px] tracking-widest transition-all">
              <Link href="/join" className="flex items-center gap-2">
                Join Your Tribe <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clean High-Impact Section */}
      <section className="py-32 bg-black px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -inset-4 border border-primary/20" />
              <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <Image 
                  src={leadImage || "https://picsum.photos/seed/lead/800/1000"}
                  alt="Prophetic Leadership"
                  fill
                  className="object-cover"
                  data-ai-hint="religious leader"
                />
              </div>
            </div>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">The Divine Mandate</span>
                <h2 className="text-3xl md:text-5xl font-black italic text-white leading-none uppercase">
                  A UNIQUE <span className="text-primary">PROPHETIC</span> GENERATION
                </h2>
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                We are a global family united by faith, driven by divine purpose, and anchored in the supernatural power of God. Our ministry is focused on raising disciples who will dominate, govern and colonize the earth with kingdom principles.
              </p>

              <div className="flex gap-4 pt-4">
                <Button asChild className="bg-primary text-black rounded-none h-12 px-8 uppercase text-[10px] font-black tracking-widest">
                  <Link href="/about">Discover More</Link>
                </Button>
                <Button variant="outline" asChild className="border-white/20 text-white rounded-none h-12 px-8 uppercase text-[10px] font-black tracking-widest">
                  <Link href="/sermons">Watch Media</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Professional CTA */}
      <section className="py-32 bg-zinc-950 text-center px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-8">
          <Star className="h-10 w-10 text-primary mx-auto" />
          <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase leading-none">START YOUR JOURNEY</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Locate a branch or connect with us online today to become part of what God is doing globally through this prophetic ministry.
          </p>
          <div className="pt-8">
            <Button asChild className="bg-primary text-black font-black h-14 px-12 rounded-none uppercase text-[11px] tracking-widest hover:bg-white transition-all">
              <Link href="/contact">Locate A Branch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
