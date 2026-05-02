import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function AboutPage() {
  const visionImage = PlaceHolderImages.find(img => img.id === "about-vision")?.imageUrl;

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header - Advanced Professional */}
      <section className="bg-card py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] font-black italic uppercase text-primary whitespace-nowrap">
            IDENTITY
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1 border border-primary/20 bg-primary/5 text-primary text-[9px] font-black uppercase tracking-[0.4em] mb-8">
            Our Divine Mandate
          </div>
          <h1 className="text-3xl md:text-4xl mb-6 font-black italic tracking-tighter uppercase text-card-foreground leading-none">WHO WE ARE</h1>
          <p className="text-[11px] md:text-xs text-card-foreground/80 max-w-2xl mx-auto leading-relaxed italic">
            A global family united by faith, driven by divine purpose, and anchored in the supernatural power of God.
          </p>
        </div>
      </section>

      {/* Core Identity Pillars - Grid Layout */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-1 gap-12">
              <div className="relative group p-6 border-l-2 border-primary/20 hover:border-primary transition-colors bg-secondary/10 rounded-r-xl">
                <h2 className="text-lg font-black italic mb-3 text-foreground uppercase tracking-tight">OUR VISION</h2>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Transforming non extinct into existence, Romans 4:17. We call forth the realities of the Kingdom into the visible realm.
                </p>
              </div>

              <div className="relative group p-6 border-l-2 border-primary/20 hover:border-primary transition-colors bg-secondary/10 rounded-r-xl">
                <h2 className="text-lg font-black italic mb-3 text-foreground uppercase tracking-tight">OUR MISSION</h2>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Our mission is to save, equip and deploy people into their God ordained purpose here on earth.
                </p>
              </div>

              <div className="relative group p-6 border-l-2 border-primary/20 hover:border-primary transition-colors bg-secondary/10 rounded-r-xl">
                <h2 className="text-lg font-black italic mb-3 text-foreground uppercase tracking-tight">OUR PURPOSE</h2>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  To help believers discover their identity in Christ Jesus and activate their God-ordained assignment for global impact.
                </p>
              </div>

              <div className="relative group p-6 border-l-2 border-primary/20 hover:border-primary transition-colors bg-secondary/10 rounded-r-xl">
                <h2 className="text-lg font-black italic mb-3 text-foreground uppercase tracking-tight">OUR ASSIGNMENT</h2>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  To raise a unique prophetic generation of disciples who will dominate, govern and colonize the earth with kingdom culture.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 border border-border/50 rounded-xl" />
              <div className="relative aspect-[4/5] bg-card overflow-hidden transition-all duration-1000 rounded-lg shadow-2xl">
                <Image 
                  src={visionImage || "https://picsum.photos/seed/about-vision/800/1000"} 
                  alt="Global Community" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="spiritual community"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kingdom Principles - Dark Cards */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black italic mb-4 text-card-foreground uppercase leading-none">KINGDOM PRINCIPLES</h2>
            <div className="w-12 h-0.5 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "THE HOLY SCRIPTURES", desc: "We believe the Bible is the inspired, only infallible, and authoritative Word of God." },
              { title: "THE ETERNAL GODHEAD", desc: "We believe there is one God, eternally existent in three persons: Father, Son, and Holy Spirit." },
              { title: "THE REDEMPTIVE WORK", desc: "We believe in the deity of our Lord Jesus Christ, His virgin birth, and His vicarious death." },
              { title: "SPIRITUAL RENEWAL", desc: "We believe that for the salvation of lost and sinful people, regeneration by the Holy Spirit is essential." },
              { title: "DIVINE HEALING", desc: "We believe that the redemptive work of Christ provides healing for the whole human person." },
              { title: "DOMINION MANDATE", desc: "We believe in the power and authority of the believer to govern and occupy the earth for the Kingdom." }
            ].map((belief, idx) => (
              <div key={idx} className="bg-secondary/5 p-8 border border-border/10 hover:border-primary transition-all duration-500 rounded-lg group">
                <h4 className="text-[10px] font-black italic mb-3 text-primary uppercase tracking-widest">{belief.title}</h4>
                <p className="text-[11px] text-card-foreground/70 group-hover:text-card-foreground leading-relaxed transition-colors font-medium">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
