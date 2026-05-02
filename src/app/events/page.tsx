"use client";

import Image from "next/image";
import { useCollection, useFirestore } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";

export default function EventsPage() {
  const firestore = useFirestore();
  
  const eventsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "events"), orderBy("date", "asc"));
  }, [firestore]);

  const { data: events, loading } = useCollection(eventsQuery);

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="bg-card py-20 px-6 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] font-black italic uppercase text-primary whitespace-nowrap">
            GATHERING
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/5 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-8">
            KINGDOM GATHERINGS
          </div>
          <h1 className="text-3xl md:text-5xl mb-6 font-black italic tracking-tighter uppercase text-card-foreground leading-none">UPCOMING EVENTS</h1>
          <p className="text-[11px] md:text-xs text-card-foreground/80 max-w-xl mx-auto leading-relaxed italic font-medium">
            Stay connected with our global community. There is always a place for you at our prophetic table.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : events && events.length > 0 ? (
            events.map((event: any) => (
              <Card key={event.id} className="bg-card border border-white/5 shadow-xl overflow-hidden hover:border-primary transition-all duration-500 rounded-xl group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-56 lg:h-auto overflow-hidden">
                    <Image 
                      src={event.imageUrl || "https://picsum.photos/seed/church-event/800/600"} 
                      alt={event.title} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-card/40 to-transparent" />
                  </div>
                  <CardContent className="p-8 md:p-10 flex flex-col justify-center">
                    <h2 className="text-2xl font-black italic mb-6 text-card-foreground uppercase leading-none tracking-tight">{event.title}</h2>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-primary">
                        <Calendar className="h-4 w-4" />
                        <span className="font-black uppercase text-[8px] tracking-[0.15em]">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-card-foreground/60">
                        <Clock className="h-4 w-4" />
                        <span className="text-[8px] font-black uppercase tracking-[0.15em]">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-card-foreground/60">
                        <MapPin className="h-4 w-4" />
                        <span className="text-[8px] font-black uppercase tracking-[0.15em]">{event.location}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-card-foreground/70 leading-relaxed italic mb-10 font-medium">
                      {event.description}
                    </p>
                    <Button className="bg-primary text-primary-foreground w-fit px-8 rounded-md h-11 flex items-center gap-3 group/btn uppercase text-[9px] font-black tracking-widest shadow-lg">
                      REGISTER NOW <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-24 border border-dashed border-border/20 rounded-xl bg-secondary/5">
              <p className="text-muted-foreground uppercase text-[8px] font-black tracking-[0.3em]">No upcoming events at this time.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
