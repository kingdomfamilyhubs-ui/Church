"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Play, Search, Clock, Calendar, Share2, Download } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

const SERMONS = [
  {
    id: 1,
    title: "The Power of Radical Faith",
    speaker: "Senior Pastor John Doe",
    date: "Feb 18, 2024",
    duration: "45:20",
    category: "Faith",
    thumbnail: PlaceHolderImages?.find(i => i.id === "sermon-1")?.imageUrl || "https://picsum.photos/seed/sermon1/600/400"
  },
  {
    id: 2,
    title: "Walking in Divine Purpose",
    speaker: "Assoc. Pastor Jane Smith",
    date: "Feb 11, 2024",
    duration: "38:15",
    category: "Purpose",
    thumbnail: PlaceHolderImages?.find(i => i.id === "sermon-2")?.imageUrl || "https://picsum.photos/seed/sermon2/600/400"
  },
  {
    id: 3,
    title: "Healing for the Broken Hearted",
    speaker: "Pastor Michael Brown",
    date: "Feb 04, 2024",
    duration: "52:10",
    category: "Healing",
    thumbnail: PlaceHolderImages?.find(i => i.id === "sermon-3")?.imageUrl || "https://picsum.photos/seed/sermon3/600/400"
  },
  {
    id: 4,
    title: "Financial Stewardship in 2024",
    speaker: "Elder Sarah Wilson",
    date: "Jan 28, 2024",
    duration: "41:30",
    category: "Stewardship",
    thumbnail: PlaceHolderImages?.find(i => i.id === "sermon-4")?.imageUrl || "https://picsum.photos/seed/sermon4/600/400"
  }
];

export default function SermonsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSermon, setActiveSermon] = useState(SERMONS[0]);

  const filteredSermons = SERMONS.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.speaker.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      <section className="bg-secondary/50 pt-10 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black group border-4 border-muted">
                <Image 
                  src={activeSermon.thumbnail} 
                  alt={activeSermon.title} 
                  fill 
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint="video player"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="h-24 w-24 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <Play className="h-10 w-10 ml-2" />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Badge className="bg-accent text-accent-foreground mb-4">{activeSermon.category}</Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{activeSermon.title}</h1>
              <div className="space-y-4 mb-8">
                <p className="text-lg text-primary font-medium">{activeSermon.speaker}</p>
                <div className="flex gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {activeSermon.date}</div>
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> {activeSermon.duration}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-primary text-white flex-1 h-12 rounded-xl">Play Now</Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl border-border"><Share2 className="h-5 w-5" /></Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl border-border"><Download className="h-5 w-5" /></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <h2 className="text-3xl font-bold">Sermon Library</h2>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search by title or speaker..." 
                className="pl-10 h-12 bg-card rounded-xl border-border"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredSermons.map(sermon => (
              <div 
                key={sermon.id} 
                className="group cursor-pointer"
                onClick={() => {
                  setActiveSermon(sermon);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 shadow-lg">
                  <Image 
                    src={sermon.thumbnail} 
                    alt={sermon.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-[10px] text-white backdrop-blur">
                    {sermon.duration}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors line-clamp-1">{sermon.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{sermon.speaker}</p>
                <p className="text-xs text-muted-foreground/60">{sermon.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
