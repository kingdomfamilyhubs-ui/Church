import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Zap, Play, ArrowRight, Shield, Star, Users } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages?.find(img => img.id === "hero-prophetic")?.imageUrl;
  const leadImage = PlaceHolderImages?.find(img => img.id === "prophet-lead")?.imageUrl;

  return (
    <div className="flex flex-col bg-black overflow-x-hidden">
      {/* Advanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage || "https://picsum.photos/seed/church-hero/1920/1080"}
            alt="Prophetic Worship"
            fill
            className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-3 px-4 py-1 border border-primary/30 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest-plus mb-8">
            Prophetic Revelation
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 font-black tracking-tighter uppercase italic leading-[0.9] text-white">
            Growing <span className="text-primary">In Faith</span> <br/> Global Church
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-medium italic leading-relaxed">
            "Transforming non extinct into existence" <br/>
            <span className="text-xs font-light tracking-[0.3em] opacity-60">— Romans 4:17</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild className="bg-primary text-black font-black h-14 px-12 rounded-none uppercase text-[11px] tracking-widest hover:bg-white transition-all">
              <Link href="/about">Discover Our Vision</Link>
            </Button>
            <Button variant="outline" asChild className="h-14 px-12 rounded-none text-white border-white/20 hover:bg-white hover:text-black uppercase text-[11px] tracking-widest transition-all">
              <Link href="/sermons" className="flex items-center gap-2">
                <Play className="h-3 w-3 fill-current" /> Watch Media
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Mandate - Professional Grid */}
      <section className="section-padding bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            <div className="space-y-6 group">
              <div className="w-12 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
              <h3 className="text-lg font-black text-white italic uppercase leading-none">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To save, equip and deploy people into their God ordained purpose here on earth through the power of the Gospel.
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="w-12 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
              <h3 className="text-lg font-black text-white italic uppercase leading-none">Our Purpose</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To help Christians discover who and what they are in Christ Jesus, enabling them to walk in their divine identity and authority.
              </p>
            </div>
            <div className="space-y-6 group">
              <div className="w-12 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
              <h3 className="text-lg font-black text-white italic uppercase leading-none">Our Assignment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To raise a unique prophetic generation of disciples who will dominate, govern and colonize the earth with Kingdom culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Content Section */}
      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border border-primary/20 group-hover:border-primary/50 transition-colors duration-700" />
              <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
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
                  Raising A <span className="text-primary">Prophetic</span> Generation
                </h2>
              </div>
              
              <div className="space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  At Growing In Faith Global Church, we are driven by a specific assignment: to raise disciples who are not just followers, but governors of the earth.
                </p>
                <p>
                  We believe in transforming what is perceived as extinct into existence, anchored in the supernatural power revealed through Romans 4:17. Our global community is built on the principles of Kingdom leadership and prophetic revelation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <Shield className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <h4 className="text-xs font-black text-white uppercase italic mb-1">Authentic Power</h4>
                    <p className="text-xs text-muted-foreground">Operating in the full authority of the Holy Spirit.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="h-5 w-5 text-primary shrink-0" />
                  <div>
                    <h4 className="text-xs font-black text-white uppercase italic mb-1">Divine Wisdom</h4>
                    <p className="text-xs text-muted-foreground">Precise revelation for navigating your God-ordained path.</p>
                  </div>
                </div>
              </div>

              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black rounded-none h-12 px-8 uppercase text-[10px] font-black tracking-widest transition-all">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced CTA Section */}
      <section className="section-padding bg-zinc-950 text-center overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
          <h2 className="text-[20vw] font-black italic text-white select-none leading-none">DOMINION</h2>
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10 space-y-8">
          <Star className="h-10 w-10 text-primary mx-auto" />
          <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase leading-none">Find Your Divine Purpose</h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Join a global family dedicated to your spiritual growth and deployment into your God-ordained purpose. Locate a branch or connect with us online today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button asChild className="bg-primary text-black font-black h-14 px-12 rounded-none uppercase text-[11px] tracking-widest hover:bg-white shadow-2xl">
              <Link href="/contact">Locate A Branch</Link>
            </Button>
            <Button variant="outline" asChild className="h-14 px-12 rounded-none text-white border-white/20 hover:bg-white hover:text-black uppercase text-[11px] tracking-widest group">
              <Link href="/join" className="flex items-center gap-2">
                Join Your Tribe <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
