"use client";

import { useState } from "react";
import { useFirestore, useCollection } from "@/firebase";
import { collection, addDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Loader2, Calendar, Trash2, MapPin, Clock } from "lucide-react";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";

export default function AdminEventsPage() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    imageUrl: ""
  });

  const eventsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "events"), orderBy("createdAt", "desc"));
  }, [firestore]);

  const { data: events, loading: listLoading } = useCollection(eventsQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firestore) return;

    setLoading(true);
    const eventsRef = collection(firestore, "events");

    addDoc(eventsRef, {
      ...formData,
      createdAt: serverTimestamp()
    })
    .then(() => {
      toast({
        title: "PROGRAM PUBLISHED",
        description: "The service/event has been successfully added to the prophetic calendar.",
      });
      setFormData({
        title: "",
        date: "",
        time: "",
        location: "Lusaka Hub (Headquarters)",
        description: "",
        imageUrl: ""
      });
      setLoading(false);
    })
    .catch(async () => {
      errorEmitter.emit('permission-error', new FirestorePermissionError({ 
        path: eventsRef.path, 
        operation: 'create', 
        requestResourceData: formData 
      }));
      setLoading(false);
    });
  };

  const handleDelete = (id: string) => {
    if (!firestore) return;
    deleteDoc(doc(firestore, "events", id))
      .then(() => toast({ title: "PROGRAM REMOVED", description: "The entry has been cleared from the calendar." }))
      .catch(async () => errorEmitter.emit('permission-error', new FirestorePermissionError({ 
        path: `events/${id}`, 
        operation: 'delete' 
      })));
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-6 rounded-md">
            PROPHETIC CALENDAR
          </div>
          <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-4 text-foreground">PROGRAMS & SERVICES</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic font-medium">Coordinate the weekly gatherings and special summits of the ministry.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Create Form */}
          <Card className="bg-card border-white/5 shadow-2xl rounded-xl h-fit">
            <CardHeader className="bg-secondary/5 border-b border-white/5 p-8">
              <CardTitle className="text-[11px] font-black italic uppercase tracking-[0.2em] text-primary flex items-center gap-3">
                <Plus className="h-4 w-4" /> ADD NEW PROGRAM
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">PROGRAM TITLE</Label>
                  <Input 
                    value={formData.title} 
                    onChange={(e) => setFormData({...formData, title: e.target.value})} 
                    placeholder="E.G., SUNDAY DOMINION SERVICE" 
                    className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white placeholder:text-white/20" 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">DATE / FREQUENCY</Label>
                    <Input 
                      value={formData.date} 
                      onChange={(e) => setFormData({...formData, date: e.target.value})} 
                      placeholder="E.G., EVERY SUNDAY" 
                      className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">TIME</Label>
                    <Input 
                      value={formData.time} 
                      onChange={(e) => setFormData({...formData, time: e.target.value})} 
                      placeholder="E.G., 09:00 AM CAT" 
                      className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">LOCATION / HUB</Label>
                  <Input 
                    value={formData.location} 
                    onChange={(e) => setFormData({...formData, location: e.target.value})} 
                    placeholder="E.G., MAIN SANCTUARY, LUSAKA HUB" 
                    className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">IMAGE URL (OPTIONAL)</Label>
                  <Input 
                    value={formData.imageUrl} 
                    onChange={(e) => setFormData({...formData, imageUrl: e.target.value})} 
                    placeholder="HTTPS://..." 
                    className="h-11 bg-secondary/5 border-white/10 text-xs text-white" 
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">DESCRIPTION</Label>
                  <Textarea 
                    value={formData.description} 
                    onChange={(e) => setFormData({...formData, description: e.target.value})} 
                    placeholder="BRIEF OVERVIEW OF THE SERVICE..." 
                    className="min-h-[100px] bg-secondary/5 border-white/10 text-xs italic text-white/80" 
                    required 
                  />
                </div>

                <Button type="submit" className="w-full h-12 bg-primary text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-md shadow-xl hover:opacity-90 transition-all" disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "PUBLISH PROGRAM"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Active List */}
          <div className="space-y-6">
            <h2 className="text-sm font-black italic uppercase tracking-widest text-primary">CURRENT CALENDAR</h2>
            {listLoading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="space-y-4">
                {events?.map((event: any) => (
                  <Card key={event.id} className="bg-card border-white/5 overflow-hidden group hover:border-primary/20 transition-all rounded-xl shadow-xl">
                    <CardContent className="p-5 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-2.5 rounded-lg">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black uppercase text-white">{event.title}</h4>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="flex items-center gap-1 text-[7px] font-black text-primary uppercase">
                              <Clock className="h-2 w-2" /> {event.time}
                            </span>
                            <span className="flex items-center gap-1 text-[7px] font-bold text-white/40 uppercase italic">
                              {event.date}
                            </span>
                          </div>
                          <p className="text-[7px] text-white/30 uppercase tracking-widest mt-1 flex items-center gap-1">
                            <MapPin className="h-2 w-2" /> {event.location}
                          </p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(event.id)} className="text-white/20 hover:text-destructive hover:bg-destructive/10">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
                {(!events || events.length === 0) && (
                  <div className="text-center py-20 border border-dashed border-white/5 rounded-xl">
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/20 italic">No programs found in the archive.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
