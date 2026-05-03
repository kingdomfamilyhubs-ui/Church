
"use client";

import Image from "next/image";
import { useFirestore, useCollection } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Play, ShoppingBag, Loader2, Star } from "lucide-react";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";
import Link from "next/link";

export default function ResourcesLibraryPage() {
  const firestore = useFirestore();
  
  const resourcesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "resources"), orderBy("createdAt", "desc"));
  }, [firestore]);

  const { data: resources, loading } = useCollection(resourcesQuery);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section - Advanced Professional */}
      <section className="bg-card py-24 px-6 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black italic uppercase text-primary whitespace-nowrap">
            KNOWLEDGE
          </div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 border border-primary/20 bg-primary/10 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-8 rounded-md">
            KINGDOM ARCHIVES
          </div>
          <h1 className="text-3xl md:text-5xl mb-6 font-black italic tracking-tighter uppercase text-white leading-none">DIGITAL LIBRARY</h1>
          <p className="text-[11px] md:text-xs text-white/60 max-w-2xl mx-auto leading-relaxed italic font-medium uppercase tracking-widest">
            Equipping the unique prophetic generation with revelation, wisdom, and the digital bread needed to govern and colonize the earth.
          </p>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
              <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Opening the kingdom archives...</p>
            </div>
          ) : resources && resources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {resources.map((res: any) => (
                <div key={res.id} className="group flex flex-col bg-card border border-white/5 rounded-xl overflow-hidden shadow-2xl hover:border-primary/20 transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                    <Image 
                      src={res.imageUrl || "https://picsum.photos/seed/resource/800/600"} 
                      alt={res.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      data-ai-hint="religious book"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-[8px] font-black px-3 py-1 uppercase tracking-widest rounded-sm shadow-lg">
                        {res.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <h3 className="text-lg font-black italic text-white uppercase leading-tight tracking-tight">{res.title}</h3>
                    </div>
                    <p className="text-[11px] text-white/60 leading-relaxed italic font-medium mb-8 flex-grow">
                      {res.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="outline" className="h-11 border-white/10 text-white hover:bg-white/5 uppercase text-[9px] font-black tracking-widest rounded-md">
                        VIEW DETAILS
                      </Button>
                      <Button className="h-11 bg-primary text-primary-foreground hover:opacity-90 uppercase text-[9px] font-black tracking-widest rounded-md shadow-xl">
                        ACCESS NOW
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-secondary/5 border border-dashed border-white/5 rounded-2xl">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-6 opacity-20" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground italic">The library is currently being curated for the generation.</p>
            </div>
          )}
        </div>
      </section>

      {/* Store CTA */}
      <section className="py-24 bg-primary text-primary-foreground border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black italic uppercase text-black whitespace-nowrap">
            DOMINATE
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <ShoppingBag className="h-12 w-12 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">THE GIF GLOBAL STORE</h2>
          <p className="text-sm font-bold uppercase tracking-[0.1em] leading-relaxed max-w-2xl mx-auto italic">
            Acquire the tools for dominion. Browse our exclusive collection of books, media, and kingdom products designed for excellence.
          </p>
          <div className="pt-6">
            <Button className="bg-black text-white rounded-md h-14 px-12 font-black uppercase tracking-[0.4em] text-[10px] hover:opacity-90 transition-all shadow-2xl">
              VISIT ONLINE STORE
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
