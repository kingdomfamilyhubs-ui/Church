
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
    location: "Lusaka Hub (Headquarters)",
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
        description: "The service has been added to the calendar.",
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
      .then(() => toast({ title: "PROGRAM REMOVED", description: "Entry deleted." }))
      .catch(async () => errorEmitter.emit('permission-error', new FirestorePermissionError({ path: `events/${id}`, operation: 'delete' })));
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-4 text-foreground">PROGRAM MANAGEMENT</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic font-medium">Coordinate the gatherings of the ministry.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-card border-white/5 shadow-2xl rounded-xl h-fit">
            <CardHeader className="bg-secondary/5 border-b border-white/5 p-8">
              <CardTitle className="text-[11px] font-black italic uppercase tracking-[0.2em] text-primary flex items-center gap-3">
                <Plus className="h-4 w-4" /> ADD NEW PROGRAM
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">TITLE</Label>
                  <Input value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">DATE</Label>
                    <Input value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} className="bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" required />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">TIME</Label>
                    <Input value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} className="bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">LOCATION</Label>
                  <Input value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" required />
                </div>
                <Button type="submit" className="w-full bg-primary text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-md shadow-xl" disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "PUBLISH PROGRAM"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-sm font-black italic uppercase tracking-widest text-primary">ACTIVE LIST</h2>
            {listLoading ? <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" /> : (
              <div className="space-y-4">
                {events?.map((event: any) => (
                  <Card key={event.id} className="bg-card border-white/5 rounded-xl shadow-xl">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Calendar className="h-4 w-4 text-primary" />
                        <div>
                          <h4 className="text-[10px] font-black uppercase text-white">{event.title}</h4>
                          <p className="text-[7px] text-white/40 uppercase">{event.date} • {event.time}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(event.id)} className="text-white/20 hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
