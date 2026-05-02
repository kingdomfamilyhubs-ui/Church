"use client";

import Image from "next/image";
import { useCollection, useFirestore } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Clock, ArrowRight, Loader2, Sparkles } from "lucide-react";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";

export default function EventsPage() {
  const firestore = useFirestore();
  
  const eventsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "events"), orderBy("createdAt", "desc"));
  }, [firestore]);

  const { data: events, loading } = useCollection(eventsQuery);

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="bg-card py-24 px-6 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black italic uppercase text-primary whitespace-nowrap">
            GATHERING
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/10 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-8 rounded-md">
            KINGDOM GATHERINGS
          </div>
          <h1 className="text-3xl md:text-5xl mb-6 font-black italic tracking-tighter uppercase text-white leading-none">UPCOMING EVENTS</h1>
          <p className="text-[11px] md:text-xs text-white/60 max-w-xl mx-auto leading-relaxed italic font-medium uppercase tracking-widest">
            Stay connected with our global community. Discover the prophetic table prepared for you.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
              <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Retrieving ministry records...</p>
            </div>
          ) : events && events.length > 0 ? (
            <div className="grid grid-cols-1 gap-12">
              {events.map((event: any) => (
                <Card key={event.id} className="bg-card border border-white/5 shadow-2xl overflow-hidden hover:border-primary/20 transition-all duration-700 rounded-xl group">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="relative h-64 lg:h-auto lg:col-span-2 overflow-hidden">
                      <Image 
                        src={event.imageUrl || "https://picsum.photos/seed/church-event/1200/800"} 
                        alt={event.title} 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                        data-ai-hint="religious gathering"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-card/60 to-transparent" />
                    </div>
                    <CardContent className="p-10 md:p-14 lg:col-span-3 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-6">
                        <Sparkles className="h-3 w-3 text-primary" />
                        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-primary">Prophetic Appointment</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black italic mb-8 text-white uppercase leading-none tracking-tighter">{event.title}</h2>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-black uppercase text-[8px] tracking-[0.15em] text-white/70">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-[8px] font-black uppercase tracking-[0.15em] text-white/70">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-[8px] font-black uppercase tracking-[0.15em] text-white/70">{event.location}</span>
                        </div>
                      </div>

                      <p className="text-[12px] text-white/60 leading-relaxed italic mb-12 font-medium">
                        {event.description}
                      </p>

                      <Button className="bg-primary text-primary-foreground w-fit px-10 rounded-md h-12 flex items-center gap-4 group/btn uppercase text-[10px] font-black tracking-widest shadow-xl active:scale-95 transition-all">
                        REGISTER NOW <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 border border-dashed border-border/20 rounded-2xl bg-secondary/5">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-6 opacity-20" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground italic">No upcoming gatherings recorded.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
