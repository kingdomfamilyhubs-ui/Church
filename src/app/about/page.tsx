import Image from "next/image";
import { Star } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function AboutPage() {
  const visionImage = PlaceHolderImages.find(img => img.id === "about-vision")?.imageUrl;

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <section className="bg-zinc-950 py-20 px-4 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 bg-primary text-black text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Our Identity
          </div>
          <h1 className="text-3xl md:text-5xl mb-6 font-black italic tracking-tighter uppercase text-white leading-none">WHO WE ARE</h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto uppercase tracking-[0.2em] leading-relaxed">
            A global family united by faith, driven by divine purpose, and anchored in the supernatural power of God.
          </p>
        </div>
      </section>

      {/* Core Identity Sections */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="relative group">
                <div className="absolute -left-4 top-0 w-1 h-full bg-primary" />
                <h2 className="text-xl font-black italic mb-4 text-white uppercase">OUR VISION</h2>
                <p className="text-sm md:text-lg text-primary leading-relaxed font-bold italic">
                  "Transforming non extinct into existence" <br/>
                  <span className="text-xs text-muted-foreground not-italic tracking-widest">— Romans 4:17</span>
                </p>
              </div>

              <div className="relative group">
                <div className="absolute -left-4 top-0 w-1 h-full bg-primary" />
                <h2 className="text-xl font-black italic mb-4 text-white uppercase">OUR MISSION</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  To save, equip and deploy people into their God ordained purpose here on earth.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute -left-4 top-0 w-1 h-full bg-primary" />
                <h2 className="text-xl font-black italic mb-4 text-white uppercase">OUR PURPOSE</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  To help Christians or believers to discover who and what they are in Christ Jesus, and to help people to discover their God's ordained purpose on earth.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute -left-4 top-0 w-1 h-full bg-primary" />
                <h2 className="text-xl font-black italic mb-4 text-white uppercase">OUR ASSIGNMENT</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  To raise a unique prophetic generation of disciples who will dominate, govern and colonize the earth with the kingdom principles, leadership, lifestyle, values and culture.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-zinc-900 border border-white/10 p-1 grayscale hover:grayscale-0 transition-all duration-1000">
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
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black italic mb-4 leading-none text-white uppercase">PROPHETIC LEADERSHIP</h2>
            <div className="w-12 h-0.5 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <h3 className="text-sm font-black italic text-primary uppercase">A VOICE TO THE NATIONS</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Our ministry is built on the foundation of accurate prophecy and apostolic authority. We believe in the leadership that follows the Spirit, providing a clear path for millions to find their divine identity.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {["Infallible Word of God", "The Holy Trinity", "Supernatural Healing", "Prophetic Revelation", "Kingdom Expansion"].map(item => (
                  <div key={item} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    <Star className="h-3 w-3 text-primary fill-primary" />
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
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {[
              { title: "THE BIBLE", desc: "The inspired and only infallible Word of God." },
              { title: "THE TRINITY", desc: "One God, eternally existent in three persons." },
              { title: "SALVATION", desc: "Regeneration by the Holy Spirit is absolutely essential." },
              { title: "HEALING", desc: "Redemptive work provides healing for the human body." },
              { title: "RESURRECTION", desc: "The resurrection of both the saved and the lost." },
              { title: "AUTHORITY", desc: "Believers are called to walk in divine power and dominion." }
            ].map((belief, idx) => (
              <div key={idx} className="bg-black p-10 group hover:bg-primary transition-all duration-500">
                <h4 className="text-xs font-black italic mb-4 text-primary group-hover:text-black uppercase">{belief.title}</h4>
                <p className="text-xs text-muted-foreground group-hover:text-black/80 leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
