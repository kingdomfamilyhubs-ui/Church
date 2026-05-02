"use client";

import { useState } from "react";
import { useFirestore } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Loader2, LayoutDashboard } from "lucide-react";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";

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
        title: "EVENT PUBLISHED",
        description: "The event has been successfully added to the ministry archive.",
      });
      setFormData({
        title: "",
        date: "",
        time: "",
        location: "",
        description: "",
        imageUrl: ""
      });
      setLoading(false);
    })
    .catch(async (error) => {
      const permissionError = new FirestorePermissionError({
        path: eventsRef.path,
        operation: 'create',
        requestResourceData: formData,
      });
      errorEmitter.emit('permission-error', permissionError);
      setLoading(false);
    });
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-6 rounded-md">
            MINISTRY ADMINISTRATION
          </div>
          <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-4 text-foreground">EVENT MANAGEMENT</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic font-medium">Equip the unique prophetic generation with timely information.</p>
        </div>

        <Card className="bg-card border-white/5 shadow-2xl overflow-hidden rounded-xl">
          <CardHeader className="bg-secondary/5 border-b border-white/5 p-8">
            <CardTitle className="text-[11px] font-black italic uppercase tracking-[0.2em] text-primary flex items-center gap-3">
              <Plus className="h-4 w-4" /> CREATE NEW KINGDOM EVENT
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-3">
                <Label className="text-[9px] font-black uppercase tracking-widest text-primary">EVENT TITLE</Label>
                <Input 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="E.G., PROPHETIC SUMMIT 2024" 
                  className="h-12 bg-secondary/5 border-white/10 rounded-md text-xs font-bold uppercase tracking-widest text-white placeholder:text-white/20" 
                  required 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">DATE</Label>
                  <Input 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    placeholder="E.G., MARCH 15-17, 2024" 
                    className="h-12 bg-secondary/5 border-white/10 rounded-md text-xs font-bold uppercase tracking-widest text-white placeholder:text-white/20" 
                    required 
                  />
                </div>
                <div className="space-y-3">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">TIME</Label>
                  <Input 
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    placeholder="E.G., 6:00 PM GMT" 
                    className="h-12 bg-secondary/5 border-white/10 rounded-md text-xs font-bold uppercase tracking-widest text-white placeholder:text-white/20" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-[9px] font-black uppercase tracking-widest text-primary">LOCATION</Label>
                <Input 
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="E.G., MAIN SANCTUARY / GLOBAL HUB" 
                  className="h-12 bg-secondary/5 border-white/10 rounded-md text-xs font-bold uppercase tracking-widest text-white placeholder:text-white/20" 
                  required 
                />
              </div>

              <div className="space-y-3">
                <Label className="text-[9px] font-black uppercase tracking-widest text-primary">IMAGE URL (OPTIONAL)</Label>
                <Input 
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                  placeholder="HTTPS://IMAGES.UNSPLASH.COM/..." 
                  className="h-12 bg-secondary/5 border-white/10 rounded-md text-xs font-bold tracking-widest text-white placeholder:text-white/20" 
                />
              </div>

              <div className="space-y-3">
                <Label className="text-[9px] font-black uppercase tracking-widest text-primary">DESCRIPTION</Label>
                <Textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="PROVIDE DETAILED INFORMATION ABOUT THIS GATHERING..." 
                  className="min-h-[160px] bg-secondary/5 border-white/10 rounded-md text-xs font-medium italic text-white/80 resize-none placeholder:text-white/20 leading-relaxed" 
                  required 
                />
              </div>

              <Button 
                type="submit"
                className="w-full h-14 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.4em] rounded-md hover:opacity-90 transition-all shadow-xl active:scale-95"
                disabled={loading}
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "PUBLISH KINGDOM EVENT"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
