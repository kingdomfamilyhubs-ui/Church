
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Globe, MapPin, CheckCircle2, Star, ShieldCheck, ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";

export default function MandatoryTrainingPage() {
  const { toast } = useToast();
  const trainingImage = PlaceHolderImages.find(img => img.id === "training-hero")?.imageUrl;

  const handleBeginTraining = () => {
    toast({
      title: "MODULES ACTIVATED",
      description: "Redirecting you to the first phase of the Kingdom Orientation modules.",
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="bg-card py-24 px-6 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black italic uppercase text-primary whitespace-nowrap">
            PREPARATION
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/10 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-8 rounded-md">
            KINGDOM ONBOARDING
          </div>
          <h1 className="text-3xl md:text-5xl mb-6 font-black italic tracking-tighter uppercase text-white leading-none">MANDATORY VISITOR TRAINING</h1>
          <p className="text-[11px] md:text-xs text-white/60 max-w-2xl mx-auto leading-relaxed italic font-medium uppercase tracking-widest">
            Equipping both local and international visitors with the spiritual alignment and operational protocols required for a transformative experience at Growing In Faith Global Church.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-black italic uppercase tracking-tighter text-foreground">WHY TRAINING IS REQUIRED</h2>
                <p className="text-xs text-muted-foreground leading-relaxed italic font-medium uppercase tracking-wider">
                  To maintain the spiritual purity and operational excellence of our global hub, all visitors must undergo this orientation. We believe in being "saved, equipped, and deployed."
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: "SPIRITUAL ALIGNMENT", desc: "Understanding the prophetic mandate of GIF Global Church.", icon: Star },
                  { title: "PROTOCOL & ORDER", desc: "Respecting the divine structures established within our community.", icon: ShieldCheck },
                  { title: "MISSION FOCUS", desc: "Aligning with the assignment to dominate and colonize the earth.", icon: BookOpen }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 p-6 bg-secondary/5 rounded-xl border border-white/5 hover:border-primary/20 transition-all">
                    <div className="bg-primary/20 p-3 h-fit rounded-lg border border-primary/20">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-foreground uppercase mb-1 tracking-widest">{item.title}</h4>
                      <p className="text-[10px] text-muted-foreground font-medium italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border/10">
              <Image 
                src={trainingImage || "https://picsum.photos/seed/training-gif/1200/800"} 
                alt="Kingdom Training" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                data-ai-hint="classroom excellence"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="text-[8px] font-black uppercase tracking-[0.4em] text-primary">Est. 2024</p>
                <h3 className="text-xl font-black italic text-white uppercase">GIF TRAINING CENTRE</h3>
              </div>
            </div>
          </div>

          {/* Visitor Paths */}
          <Tabs defaultValue="local" className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-xl font-black italic uppercase tracking-tighter mb-8 text-foreground">SELECT YOUR VISITOR PATH</h2>
              <TabsList className="bg-secondary/10 border border-border/10 h-14 p-1 rounded-xl">
                <TabsTrigger value="local" className="px-10 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-[9px] font-black uppercase tracking-widest transition-all">
                  <MapPin className="h-4 w-4 mr-2" /> LOCAL VISITOR
                </TabsTrigger>
                <TabsTrigger value="international" className="px-10 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-[9px] font-black uppercase tracking-widest transition-all">
                  <Globe className="h-4 w-4 mr-2" /> INTERNATIONAL VISITOR
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="local" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { step: "01", title: "VISION ORIENTATION", desc: "A 1-hour session on the Romans 4:17 mandate and our local community focus." },
                  { step: "02", title: "SERVICE PROTOCOL", desc: "Learning the flow of prophetic services and sanctuary etiquette." },
                  { step: "03", title: "BRANCH ACTIVATION", desc: "Connecting with your local branch leaders for ongoing discipleship." }
                ].map((item, idx) => (
                  <Card key={idx} className="bg-card border-white/5 rounded-2xl overflow-hidden group hover:border-primary/40 transition-all shadow-xl">
                    <CardHeader className="bg-secondary/5 p-8 border-b border-white/5">
                      <span className="text-primary font-black italic text-3xl opacity-20">{item.step}</span>
                      <CardTitle className="text-md font-black italic uppercase text-white tracking-tight">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <p className="text-[11px] text-white/60 italic leading-relaxed font-medium mb-6">{item.desc}</p>
                      <div className="flex items-center gap-2 text-[8px] font-black text-primary uppercase tracking-widest">
                        <CheckCircle2 className="h-3 w-3" /> REQUIRED FOR ENTRY
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="international" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { step: "01", title: "GLOBAL MANDATE", desc: "Deep dive into our international mission to colonize the earth with Kingdom culture." },
                  { step: "02", title: "VISA & ACCOMMODATION", desc: "Detailed brief on logistical protocols for our international visitors' hub." },
                  { step: "03", title: "PROPHETIC DEPLOYMENT", desc: "Training on how to carry the GIF Global mantle back to your home nation." }
                ].map((item, idx) => (
                  <Card key={idx} className="bg-card border-white/5 rounded-2xl overflow-hidden group hover:border-primary/40 transition-all shadow-xl">
                    <CardHeader className="bg-secondary/5 p-8 border-b border-white/5">
                      <span className="text-primary font-black italic text-3xl opacity-20">{item.step}</span>
                      <CardTitle className="text-md font-black italic uppercase text-white tracking-tight">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <p className="text-[11px] text-white/60 italic leading-relaxed font-medium mb-6">{item.desc}</p>
                      <div className="flex items-center gap-2 text-[8px] font-black text-primary uppercase tracking-widest">
                        <CheckCircle2 className="h-3 w-3" /> PRE-FLIGHT REQUIREMENT
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA */}
          <div className="mt-24 text-center bg-card p-12 rounded-2xl shadow-2xl relative overflow-hidden group border border-white/5">
             <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black italic uppercase text-primary whitespace-nowrap">
                PREPARE
              </div>
            </div>
            <h2 className="text-2xl font-black italic text-white uppercase tracking-tight mb-4 relative z-10">READY TO START YOUR TRAINING?</h2>
            <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-10 max-w-lg mx-auto italic relative z-10">
              Select your path above and complete the modules to receive your visitor authorization for Growing In Faith Global Church.
            </p>
            <Button 
              onClick={handleBeginTraining}
              className="h-12 px-12 bg-primary text-primary-foreground hover:opacity-90 rounded-md font-black uppercase tracking-[0.3em] text-[10px] relative z-10 transition-all active:scale-95 shadow-xl flex items-center gap-3 mx-auto"
            >
              BEGIN TRAINING MODULES <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
