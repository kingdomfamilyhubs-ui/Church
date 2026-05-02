"use client";

import { useState } from "react";
import { useFirestore } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Loader2 } from "lucide-react";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firestore) return;

    setLoading(true);
    try {
      await addDoc(collection(firestore, "events"), {
        ...formData,
        createdAt: new Date()
      });
      toast({
        title: "EVENT ADDED",
        description: "The event has been successfully published to the website.",
      });
      setFormData({
        title: "",
        date: "",
        time: "",
        location: "",
        description: "",
        imageUrl: ""
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "ERROR",
        description: "Failed to add event. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-4">EVENT MANAGEMENT</h1>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Publish new ministry events here.</p>
        </div>

        <Card className="bg-card border-border shadow-2xl">
          <CardHeader className="border-b border-border/10 p-10">
            <CardTitle className="text-sm font-black italic uppercase tracking-widest text-primary flex items-center gap-3">
              <Plus className="h-5 w-5" /> CREATE NEW EVENT
            </CardTitle>
          </CardHeader>
          <CardContent className="p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase tracking-widest text-primary">EVENT TITLE</Label>
                <Input 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  placeholder="e.g., Youth Summit 2024" 
                  className="h-12 bg-secondary/10 border-border rounded-md text-sm" 
                  required 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-primary">DATE</Label>
                  <Input 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    placeholder="e.g., March 15-17, 2024" 
                    className="h-12 bg-secondary/10 border-border rounded-md text-sm" 
                    required 
                  />
                </div>
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-primary">TIME</Label>
                  <Input 
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    placeholder="e.g., 6:00 PM" 
                    className="h-12 bg-secondary/10 border-border rounded-md text-sm" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase tracking-widest text-primary">LOCATION</Label>
                <Input 
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  placeholder="e.g., Main Sanctuary" 
                  className="h-12 bg-secondary/10 border-border rounded-md text-sm" 
                  required 
                />
              </div>

              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase tracking-widest text-primary">IMAGE URL (OPTIONAL)</Label>
                <Input 
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                  placeholder="https://images.unsplash.com/..." 
                  className="h-12 bg-secondary/10 border-border rounded-md text-sm" 
                />
              </div>

              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase tracking-widest text-primary">DESCRIPTION</Label>
                <Textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Provide details about the event..." 
                  className="min-h-[150px] bg-secondary/10 border-border rounded-md text-sm resize-none" 
                  required 
                />
              </div>

              <Button 
                type="submit"
                className="w-full h-14 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.3em] rounded-md hover:opacity-90 transition-all"
                disabled={loading}
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "PUBLISH EVENT"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}