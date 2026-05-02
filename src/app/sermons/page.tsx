
"use client";

import { useState } from "react";
import Image from "next/image";
import { useFirestore, useCollection } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Play, Search, Clock, Calendar, Share2, Download, Loader2 } from "lucide-react";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";

export default function SermonsPage() {
  const firestore = useFirestore();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSermon, setActiveSermon] = useState<any>(null);

  const sermonsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "sermons"), orderBy("createdAt", "desc"));
  }, [firestore]);

  const { data: sermons, loading } = useCollection(sermonsQuery);

  const currentSermon = activeSermon || (sermons && sermons.length > 0 ? sermons[0] : null);

  const filteredSermons = sermons?.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.speaker.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20 pt-20">
      {loading ? (
        <div className="h-screen flex flex-col items-center justify-center space-y-4">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Accessing media revelation...</p>
        </div>
      ) : currentSermon ? (
        <>
          <section className="bg-card text-card-foreground pt-12 pb-24 px-6 border-b border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black italic uppercase text-primary whitespace-nowrap">
                REVELATION
              </div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                <div className="lg:col-span-2">
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-black group border border-white/10">
                    <Image 
                      src={currentSermon.thumbnail || "https://picsum.photos/seed/sermon/1200/800"} 
                      alt={currentSermon.title} 
                      fill 
                      className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="h-20 w-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95">
                        <Play className="h-8 w-8 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <Badge className="bg-primary/20 text-primary border-primary/20 text-[9px] font-black tracking-widest px-3 py-1 uppercase rounded-sm">
                    {currentSermon.category}
                  </Badge>
                  <h1 className="text-3xl md:text-4xl font-black italic mb-6 leading-[1.1] uppercase tracking-tighter">{currentSermon.title}</h1>
                  <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary italic">{currentSermon.speaker}</p>
                    <div className="flex gap-6 text-[8px] font-black uppercase tracking-widest text-card-foreground/50">
                      <div className="flex items-center gap-2"><Calendar className="h-3 w-3" /> {currentSermon.date}</div>
                      {currentSermon.duration && <div className="flex items-center gap-2"><Clock className="h-3 w-3" /> {currentSermon.duration}</div>}
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button className="bg-primary text-primary-foreground flex-1 h-12 rounded-md font-black uppercase tracking-[0.2em] text-[10px] shadow-lg hover:opacity-90">
                      PLAY NOW
                    </Button>
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-md border-white/10 text-white hover:bg-white/10"><Share2 className="h-4 w-4" /></Button>
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-md border-white/10 text-white hover:bg-white/10"><Download className="h-4 w-4" /></Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-border pb-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-black italic uppercase tracking-tighter">MEDIA ARCHIVE</h2>
                  <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.3em]">EQUIPPING THE UNIQUE PROPHETIC GENERATION</p>
                </div>
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="SEARCH BY TITLE..." 
                    className="pl-10 h-11 bg-secondary/5 border-border rounded-md text-[9px] font-black tracking-widest uppercase"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {filteredSermons?.map(sermon => (
                  <div 
                    key={sermon.id} 
                    className="group cursor-pointer space-y-4"
                    onClick={() => {
                      setActiveSermon(sermon);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-xl border border-border transition-all duration-500 hover:border-primary/50">
                      <Image 
                        src={sermon.thumbnail || "https://picsum.photos/seed/sermon/800/600"} 
                        alt={sermon.title} 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      {sermon.duration && (
                        <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-[8px] font-black text-white tracking-widest backdrop-blur-sm">
                          {sermon.duration}
                        </div>
                      )}
                    </div>
                    <div className="space-y-1 px-1">
                      <h3 className="font-black italic text-xs mb-1 group-hover:text-primary transition-colors uppercase leading-tight line-clamp-1 tracking-tight">{sermon.title}</h3>
                      <p className="text-[9px] font-black text-primary uppercase tracking-widest opacity-80">{sermon.speaker}</p>
                      <p className="text-[8px] font-black text-muted-foreground/60 uppercase tracking-widest">{sermon.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="text-center py-48">
          <Play className="h-12 w-12 text-muted-foreground/20 mx-auto mb-6" />
          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground italic">No media revelation has been archived yet.</p>
        </div>
      )}
    </div>
  );
}
