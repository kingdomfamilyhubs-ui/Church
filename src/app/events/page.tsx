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
      <section className="bg-card py-24 px-6 text-center border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10">
            Kingdom Gatherings
          </div>
          <h1 className="text-4xl md:text-6xl mb-8 font-black italic tracking-tighter uppercase text-card-foreground leading-none">UPCOMING EVENTS</h1>
          <p className="text-sm md:text-base text-card-foreground/80 max-w-2xl mx-auto leading-relaxed italic">
            Stay connected with our community. There is always a place for you at our table.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : events && events.length > 0 ? (
            events.map((event: any) => (
              <Card key={event.id} className="bg-card border border-border shadow-2xl overflow-hidden hover:border-primary transition-all duration-500 rounded-xl group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <Image 
                      src={event.imageUrl || "https://picsum.photos/seed/church-event/800/600"} 
                      alt={event.title} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                  <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-black italic mb-6 text-card-foreground uppercase leading-none tracking-tight">{event.title}</h2>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4 text-primary">
                        <Calendar className="h-5 w-5" />
                        <span className="font-bold uppercase text-xs tracking-widest">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-4 text-card-foreground/60">
                        <Clock className="h-5 w-5" />
                        <span className="text-xs font-bold uppercase tracking-widest">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-4 text-card-foreground/60">
                        <MapPin className="h-5 w-5" />
                        <span className="text-xs font-bold uppercase tracking-widest">{event.location}</span>
                      </div>
                    </div>
                    <p className="text-xs text-card-foreground/80 leading-relaxed italic mb-10">
                      {event.description}
                    </p>
                    <Button className="bg-primary text-primary-foreground w-fit px-10 rounded-md h-12 flex items-center gap-3 group/btn uppercase text-[10px] font-black tracking-widest">
                      Register Now <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-20 border border-dashed border-border rounded-xl">
              <p className="text-muted-foreground uppercase text-[10px] font-black tracking-widest">No upcoming events at this time.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}