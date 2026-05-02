import Image from "next/image";
import { Star, Shield, Zap, Target, Users } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function AboutPage() {
  const visionImage = PlaceHolderImages.find(img => img.id === "about-vision")?.imageUrl;

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header Section */}
      <section className="bg-zinc-950 py-32 px-4 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black italic uppercase text-white whitespace-nowrap">
            IDENTITY
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 border border-primary/30 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10">
            Our Divine Identity
          </div>
          <h1 className="text-4xl md:text-6xl mb-8 font-black italic tracking-tighter uppercase text-white leading-[0.9]">WHO WE ARE</h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
            A global family united by faith, driven by divine purpose, and anchored in the supernatural power of God.
          </p>
        </div>
      </section>

      {/* Core Identity Grid */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
              <div className="relative group">
                <div className="absolute -left-6 top-0 w-1 h-full bg-primary" />
                <h2 className="text-2xl font-black italic mb-6 text-white uppercase tracking-tight">OUR VISION</h2>
                <p className="text-lg md:text-xl text-primary leading-tight font-black italic mb-2">
                  "Transforming non extinct into existence"
                </p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase opacity-60">— Romans 4:17</p>
              </div>

              <div className="relative group">
                <div className="absolute -left-6 top-0 w-1 h-full bg-primary" />
                <h2 className="text-2xl font-black italic mb-6 text-white uppercase tracking-tight">OUR MISSION</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  To save, equip and deploy people into their God ordained purpose here on earth.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute -left-6 top-0 w-1 h-full bg-primary" />
                <h2 className="text-2xl font-black italic mb-6 text-white uppercase tracking-tight">OUR PURPOSE</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  To help Christians or believers to discover who and what they are in Christ Jesus, and to help people to discover their God's ordained purpose on earth.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute -left-6 top-0 w-1 h-full bg-primary" />
                <h2 className="text-2xl font-black italic mb-6 text-white uppercase tracking-tight">OUR ASSIGNMENT</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  To raise a unique prophetic generation of disciples who will dominate, govern and colonize the earth with the kingdom principles, leadership, lifestyle, values and culture.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 border border-primary/20" />
              <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <Image 
                  src={visionImage || "https://picsum.photos/seed/about-vision/800/1000"} 
                  alt="Global Community" 
                  fill 
                  className="object-cover"
                  data-ai-hint="spiritual community"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-black italic mb-6 text-white uppercase leading-none">KINGDOM PILLARS</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Zap, title: "PROPHETIC REVELATION", desc: "Walking in precise spiritual insight for everyday living." },
              { icon: Shield, title: "KINGDOM AUTHORITY", desc: "Exercising the dominion and power given to us through Christ." },
              { icon: Target, title: "DIVINE DEPLOYMENT", desc: "Empowering every believer to manifest their specific earthly assignment." },
              { icon: Users, title: "GLOBAL FAMILY", desc: "A unified body of believers colonizing the earth with God's culture." }
            ].map((pillar, idx) => (
              <div key={idx} className="group p-8 border border-white/5 bg-black/50 hover:border-primary/50 transition-all duration-500">
                <pillar.icon className="h-8 w-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xs font-black italic text-white uppercase mb-4 tracking-widest">{pillar.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Beliefs Grid */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { title: "THE HOLY SCRIPTURES", desc: "We believe the Bible is the inspired, only infallible, and authoritative Word of God." },
              { title: "THE ETERNAL GODHEAD", desc: "We believe there is one God, eternally existent in three persons: Father, Son, and Holy Spirit." },
              { title: "THE REDEMPTIVE WORK", desc: "We believe in the deity of our Lord Jesus Christ, His virgin birth, and His vicarious death." },
              { title: "SPIRITUAL RENEWAL", desc: "We believe that for the salvation of lost and sinful people, regeneration by the Holy Spirit is essential." },
              { title: "DIVINE HEALING", desc: "We believe that the redemptive work of Christ provides healing for the whole human person." },
              { title: "DOMINION MANDATE", desc: "We believe in the power and authority of the believer to govern and occupy the earth for the Kingdom." }
            ].map((belief, idx) => (
              <div key={idx} className="bg-black p-12 group hover:bg-primary transition-all duration-700">
                <h4 className="text-xs font-black italic mb-6 text-primary group-hover:text-black uppercase tracking-widest">{belief.title}</h4>
                <p className="text-xs text-muted-foreground group-hover:text-black/80 leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
