import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Target, Users, Zap, Star } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function AboutPage() {
  const visionImage = PlaceHolderImages.find(img => img.id === "about-vision")?.imageUrl;

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-zinc-950 py-32 px-4 text-center border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1 bg-primary text-black text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            Our Identity
          </div>
          <h1 className="text-6xl md:text-9xl mb-8 font-black italic tracking-tighter uppercase">WHO WE ARE</h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto uppercase tracking-widest leading-relaxed">
            A global family united by prophetic revelation, driven by divine purpose, and anchored in the supernatural power of God.
          </p>
        </div>
      </section>

      {/* Vision & Mission Overhaul */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-20">
              <div className="relative group">
                <div className="absolute -left-6 top-0 w-1 h-full bg-primary" />
                <h2 className="text-4xl md:text-6xl font-black italic mb-6">OUR VISION</h2>
                <p className="text-lg text-muted-foreground leading-relaxed uppercase tracking-wider font-light">
                  To raise a global community of believers who are spiritually mature, impact-driven, and living evidence of God's power and love in every sphere of life.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -left-6 top-0 w-1 h-full bg-primary" />
                <h2 className="text-4xl md:text-6xl font-black italic mb-6">OUR MISSION</h2>
                <p className="text-lg text-muted-foreground leading-relaxed uppercase tracking-wider font-light">
                  To preach the gospel of Jesus Christ, making disciples of all nations through sound biblical teaching, passionate worship, and authentic community engagement.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-zinc-900 border border-white/10 p-2 grayscale hover:grayscale-0 transition-all duration-1000">
              <Image 
                src={visionImage || "https://picsum.photos/seed/about-vision/800/1000"} 
                alt="Community" 
                fill 
                className="object-cover"
                data-ai-hint="spiritual community"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black italic mb-6 leading-none">PROPHETIC <br/> LEADERSHIP</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <h3 className="text-3xl font-black italic text-primary">A VOICE TO THE NATIONS</h3>
              <p className="text-lg text-muted-foreground leading-relaxed uppercase tracking-widest font-light">
                Our ministry is built on the foundation of accurate prophecy and apostolic authority. We believe in the leadership that follows the Spirit, providing a clear path for millions to find their divine identity.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {["Infallible Word of God", "The Holy Trinity", "Supernatural Healing", "Prophetic Revelation", "Kingdom Expansion"].map(item => (
                  <div key={item} className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-white">
                    <Star className="h-4 w-4 text-primary fill-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 relative aspect-square md:aspect-[4/5] overflow-hidden border border-white/10">
               <Image 
                src="https://picsum.photos/seed/leader-vision/800/1000" 
                alt="Leadership Vision" 
                fill 
                className="object-cover"
                data-ai-hint="pastor teaching"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Grid */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              { title: "The Bible", desc: "The inspired and only infallible Word of God." },
              { title: "The Trinity", desc: "One God, eternally existent in three persons." },
              { title: "Salvation", desc: "Regeneration by the Holy Spirit is absolutely essential." },
              { title: "Healing", desc: "Redemptive work provides healing for the human body." },
              { title: "Resurrection", desc: "The resurrection of both the saved and the lost." },
              { title: "Authority", desc: "Believers are called to walk in divine power and dominion." }
            ].map((belief, idx) => (
              <div key={idx} className="bg-zinc-950 p-12 border border-white/5 group hover:bg-primary transition-all duration-500">
                <h4 className="text-2xl font-black italic mb-4 text-primary group-hover:text-black">{belief.title}</h4>
                <p className="text-xs uppercase tracking-widest leading-loose text-muted-foreground group-hover:text-black/80">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
