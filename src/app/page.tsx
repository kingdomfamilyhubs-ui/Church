import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, ShieldCheck, Zap, Calendar, Clock, MapPin } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages?.find(img => img.id === "hero-landing")?.imageUrl;

  return (
    <div className="flex flex-col bg-background overflow-x-hidden">
      {/* Cinematic Hero Section - Refined Professional Scale */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage || "https://picsum.photos/seed/gif-landing/1920/1080"}
            alt="Prophetic Landing"
            fill
            className="object-cover brightness-[0.4]"
            priority
            data-ai-hint="modern church"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/40 bg-primary/10 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-8 backdrop-blur-sm rounded-md">
            PROPHETIC GLOBAL MANDATE
          </div>
          
          <h1 className="text-3xl md:text-5xl mb-6 font-black tracking-tighter uppercase italic leading-[1.1] text-white">
            TRANSFORMING <br/> 
            <span className="text-primary">NON EXTINCT</span> <br/> 
            INTO EXISTENCE
          </h1>
          
          <p className="text-xs md:text-sm text-white/90 mb-10 max-w-xl mx-auto italic font-medium leading-relaxed">
            Welcome to Growing In Faith Global Church, a unique prophetic generation raised to dominate, govern and colonize the earth with kingdom principles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-primary text-black font-black h-11 px-8 rounded-md uppercase text-[9px] tracking-[0.2em] transition-all border-none shadow-xl">
              <Link href="/about">DISCOVER OUR VISION</Link>
            </Button>
            <Button asChild className="bg-white text-black hover:bg-white/90 font-black h-11 px-8 rounded-md uppercase text-[9px] tracking-[0.2em] transition-all border-none shadow-xl">
              <Link href="/join" className="flex items-center gap-2">
                JOIN YOUR TRIBE <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Strategic Value Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6 group">
              <div className="bg-card p-4 w-fit rounded-lg border border-border group-hover:border-primary transition-all duration-500 shadow-sm">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black italic uppercase text-foreground leading-none mb-3 tracking-tight">PROPHETIC IDENTITY</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  Discover who and what you are in Christ Jesus through deep scriptural revelation and supernatural spiritual growth.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 group">
              <div className="bg-card p-4 w-fit rounded-lg border border-border group-hover:border-primary transition-all duration-500 shadow-sm">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black italic uppercase text-foreground leading-none mb-3 tracking-tight">KINGDOM GOVERNANCE</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  We equip you with the principles and lifestyle needed to dominate and colonize the earth with authentic kingdom culture.
                </p>
              </div>
            </div>

            <div className="space-y-6 group">
              <div className="bg-card p-4 w-fit rounded-lg border border-border group-hover:border-primary transition-all duration-500 shadow-sm">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-black italic uppercase text-foreground leading-none mb-3 tracking-tight">DIVINE PURPOSE</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                  Our core mission is to save, equip and deploy you into your God-ordained purpose on this earth for global impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Schedule - High Impact */}
      <section className="py-24 bg-secondary/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-4 rounded-md">
              Apostolic Gatherings
            </div>
            <h2 className="text-3xl font-black italic uppercase text-foreground tracking-tighter mb-4">WEEKLY PROGRAMS</h2>
            <div className="w-16 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "DOMINION SERVICE", day: "SUNDAY", time: "09:00 AM CAT", location: "Main Sanctuary" },
              { title: "PROPHETIC SCHOOL", day: "WEDNESDAY", time: "05:00 PM CAT", location: "Global Hub" },
              { title: "MID-WEEK MANNA", day: "FRIDAY", time: "05:00 PM CAT", location: "Digital Portal" },
              { title: "YOUTH IMPACT", day: "SATURDAY", time: "02:00 PM CAT", location: "Hub Lounge" }
            ].map((service, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-primary transition-all group rounded-xl shadow-xl overflow-hidden">
                <CardContent className="p-8 space-y-6 text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-primary tracking-widest mb-1">{service.day}</h4>
                    <h3 className="text-lg font-black italic uppercase text-white leading-none mb-3">{service.title}</h3>
                    <div className="space-y-2 pt-2 border-t border-white/5">
                       <p className="text-[8px] font-black text-white/50 flex items-center justify-center gap-2 uppercase tracking-widest">
                        <Clock className="h-3 w-3 text-primary" /> {service.time}
                      </p>
                      <p className="text-[8px] font-black text-white/50 flex items-center justify-center gap-2 uppercase tracking-widest">
                        <MapPin className="h-3 w-3 text-primary" /> {service.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black italic uppercase text-primary whitespace-nowrap">
            DOMINATE
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
          <div className="w-12 h-0.5 bg-primary mx-auto mb-8" />
          <h2 className="text-2xl md:text-3xl font-black italic text-card-foreground uppercase leading-[1.1] mb-8 tracking-tighter">
            READY TO FULFILL <br/> YOUR ASSIGNMENT?
          </h2>
          <p className="text-[10px] md:text-xs text-card-foreground/70 mb-10 max-w-lg mx-auto italic font-medium leading-relaxed">
            Join a global community of believers dedicated to kingdom leadership, core values, and supernatural excellence in every sphere of life.
          </p>
          <Button asChild className="bg-primary text-black font-black h-12 px-10 rounded-md uppercase text-[9px] tracking-[0.3em] transition-all hover:opacity-90 active:scale-95 shadow-lg">
            <Link href="/contact">LOCATE A BRANCH NEAR YOU</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
