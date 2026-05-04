
"use client";

import Image from "next/image";
import Link from "next/link";
import { useFirestore, useCollection } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Globe, MapPin, Star, ShieldCheck, Loader2 } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";

export default function MandatoryTrainingPage() {
  const firestore = useFirestore();
  const trainingImage = PlaceHolderImages.find(img => img.id === "training-hero")?.imageUrl;

  const modulesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "training_modules"), orderBy("stepNumber", "asc"));
  }, [firestore]);

  const { data: modules, loading } = useCollection(modulesQuery);

  const localModules = modules?.filter(m => m.pathType === "local");
  const intlModules = modules?.filter(m => m.pathType === "international");

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

          {loading ? (
            <div className="text-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto mb-4" />
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Accessing the prophetic curriculum...</p>
            </div>
          ) : (
            <Tabs defaultValue="local" className="w-full">
              <div className="text-center mb-12">
                <h2 className="text-xl font-black italic uppercase tracking-tighter mb-8 text-foreground">SELECT YOUR VISITOR PATH</h2>
                <TabsList className="bg-secondary/10 border border-border/10 h-14 p-1 rounded-xl">
                  <TabsTrigger value="local" className="px-10 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black text-[9px] font-black uppercase tracking-widest transition-all">
                    <MapPin className="h-4 w-4 mr-2" /> LOCAL VISITOR
                  </TabsTrigger>
                  <TabsTrigger value="international" className="px-10 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-black text-[9px] font-black uppercase tracking-widest transition-all">
                    <Globe className="h-4 w-4 mr-2" /> INTERNATIONAL VISITOR
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="local" className="mt-0">
                {localModules && localModules.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {localModules.map((item, idx) => (
                      <Card key={idx} className="bg-card border-white/5 rounded-2xl overflow-hidden group hover:border-primary/40 transition-all shadow-xl">
                        <CardHeader className="bg-secondary/5 p-8 border-b border-white/5">
                          <span className="text-primary font-black italic text-3xl opacity-20">{item.stepNumber}</span>
                          <CardTitle className="text-md font-black italic uppercase text-white tracking-tight">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                          <p className="text-[11px] text-white/60 italic leading-relaxed font-medium mb-8 line-clamp-3">{item.description}</p>
                          <Button asChild className="w-full h-11 bg-primary text-black font-black uppercase tracking-widest text-[9px] rounded-md hover:opacity-90">
                            <Link href={`/visit/training/${item.id}`}>BEGIN MODULE</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-secondary/5 rounded-xl border border-dashed border-white/5">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic">Local curriculum is currently being prepared.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="international" className="mt-0">
                {intlModules && intlModules.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {intlModules.map((item, idx) => (
                      <Card key={idx} className="bg-card border-white/5 rounded-2xl overflow-hidden group hover:border-primary/40 transition-all shadow-xl">
                        <CardHeader className="bg-secondary/5 p-8 border-b border-white/5">
                          <span className="text-primary font-black italic text-3xl opacity-20">{item.stepNumber}</span>
                          <CardTitle className="text-md font-black italic uppercase text-white tracking-tight">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                          <p className="text-[11px] text-white/60 italic leading-relaxed font-medium mb-8 line-clamp-3">{item.description}</p>
                          <Button asChild className="w-full h-11 bg-primary text-black font-black uppercase tracking-widest text-[9px] rounded-md hover:opacity-90">
                            <Link href={`/visit/training/${item.id}`}>BEGIN MODULE</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-secondary/5 rounded-xl border border-dashed border-white/5">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic">International curriculum is currently being prepared.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          )}
        </div>
      </section>
    </div>
  );
}
