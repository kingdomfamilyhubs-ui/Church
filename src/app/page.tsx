import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, Calendar, Heart, Zap, Globe, MessageCircle } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages?.find(img => img.id === "hero-prophetic");
  const prophetImage = PlaceHolderImages?.find(img => img.id === "prophet-lead");

  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-src-hero bg-no-repeat z-0" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-primary/30 animate-pulse">
            Experience the Prophetic
          </div>
          <h1 className="text-6xl md:text-8xl mb-8 leading-tight font-black tracking-tighter">
            SPIRIT <span className="text-primary italic">REVELATION</span> CHURCH
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Where the power of God meets human needs. Join a global movement of believers walking in divine authority and revelation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-primary text-black font-bold h-16 px-10 text-lg rounded-none hover:bg-primary/80 transition-all uppercase tracking-widest">
              <Link href="/about">Join The Movement</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-16 px-10 text-lg rounded-none border-white/20 text-white hover:bg-white/10 uppercase tracking-widest">
              <Link href="/sermons" className="flex items-center gap-3">
                <Play className="h-5 w-5 fill-current" /> Watch Media
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Blocks */}
      <section className="py-32 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group space-y-6 text-center">
              <div className="mx-auto w-20 h-20 bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Divine Power</h3>
              <p className="text-muted-foreground leading-relaxed">
                Operating in the authentic power of the Holy Spirit to transform lives and break every chain.
              </p>
            </div>
            <div className="group space-y-6 text-center">
              <div className="mx-auto w-20 h-20 bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Global Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                A prophetic voice reaching across nations, raising leaders who influence every sphere of society.
              </p>
            </div>
            <div className="group space-y-6 text-center">
              <div className="mx-auto w-20 h-20 bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Prophetic Word</h3>
              <p className="text-muted-foreground leading-relaxed">
                Receiving precise, timely revelation from the throne of God that provides direction and hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prophet Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <Image 
                src={prophetImage?.imageUrl || "https://picsum.photos/seed/prophet/800/1000"}
                alt="Lead Prophet"
                fill
                className="object-cover"
                data-ai-hint="prophet leader"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="space-y-8">
              <div className="w-20 h-1 bg-primary" />
              <h2 className="text-4xl md:text-6xl font-black italic">OUR LEADERSHIP</h2>
              <p className="text-xl text-primary font-bold tracking-[0.3em]">PROPHET OF REVELATION</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Led by the vision of our Prophet, Spirit Revelation Church is dedicated to uncovering the deep mysteries of the Kingdom and empowering believers to walk in their divine heritage. Through signs, wonders, and the accurate prophetic word, thousands have been restored to their purpose.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black rounded-none h-14 px-8">
                <Link href="/about">Read More About Our Vision</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/sermons" className="group relative block aspect-video overflow-hidden border border-white/10">
              <Image 
                src="https://picsum.photos/seed/media1/800/450" 
                alt="Latest Media" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-2xl font-bold tracking-widest text-white drop-shadow-lg">LATEST MESSAGES</h4>
              </div>
            </Link>
            <Link href="/events" className="group relative block aspect-video overflow-hidden border border-white/10">
              <Image 
                src="https://picsum.photos/seed/media2/800/450" 
                alt="Events" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-2xl font-bold tracking-widest text-white drop-shadow-lg">CONFERENCES</h4>
              </div>
            </Link>
            <Link href="/give" className="group relative block aspect-video overflow-hidden border border-white/10">
              <Image 
                src="https://picsum.photos/seed/media3/800/450" 
                alt="Give" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h4 className="text-2xl font-bold tracking-widest text-white drop-shadow-lg">PARTNERSHIP</h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary text-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 italic">READY FOR REVELATION?</h2>
          <p className="text-xl mb-12 font-medium">Join us this Sunday at any of our global locations or experience the service live online.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-800 rounded-none h-16 px-12 text-lg uppercase tracking-widest">
              <Link href="/contact">Find A Branch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white rounded-none h-16 px-12 text-lg uppercase tracking-widest">
              <Link href="/sermons">Watch Live</Link>
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 p-8 opacity-10">
           <Zap className="h-64 w-64" />
        </div>
      </section>
    </div>
  );
}
