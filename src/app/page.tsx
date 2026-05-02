import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages?.find(img => img.id === "hero-prophetic")?.imageUrl;

  return (
    <div className="flex flex-col bg-background overflow-x-hidden">
      {/* Advanced Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage || "https://picsum.photos/seed/church-hero/1920/1080"}
            alt="Prophetic Worship"
            fill
            className="object-cover opacity-20 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest mb-10">
            Prophetic Revelation
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl mb-8 font-black tracking-tighter uppercase italic leading-[0.85] text-foreground">
            Growing <span className="text-primary">In Faith</span> <br/> Global Church
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto italic font-medium">
            Transforming non extinct into existence, Romans 4:17
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-primary text-primary-foreground font-black h-12 px-10 rounded-md uppercase text-[10px] tracking-widest hover:opacity-90 transition-all">
              <Link href="/about">Our Vision</Link>
            </Button>
            <Button variant="outline" asChild className="h-12 px-10 rounded-md border-border text-foreground hover:bg-secondary uppercase text-[10px] font-black tracking-widest transition-all">
              <Link href="/join" className="flex items-center gap-2">
                Join Your Tribe <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clean Professional CTA */}
      <section className="py-32 bg-secondary/20 text-center px-6 border-b border-border">
        <div className="max-w-3xl mx-auto space-y-10">
          <Star className="h-8 w-8 text-primary mx-auto" />
          <h2 className="text-2xl font-black italic text-foreground uppercase leading-none">A Global Mandate</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We are a unique prophetic generation raised to dominate, govern and colonize the earth with kingdom principles, leadership, lifestyle, values and culture.
          </p>
          <div className="pt-6">
            <Button asChild className="bg-primary text-primary-foreground font-black h-12 px-10 rounded-md uppercase text-[10px] tracking-widest transition-all">
              <Link href="/contact">Locate A Branch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}