
"use client";

import { useState } from "react";
import { useFirestore, useCollection } from "@/firebase";
import { collection, addDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Loader2, Trash2, Play } from "lucide-react";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";

export default function AdminSermonsPage() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    speaker: "",
    date: "",
    duration: "",
    category: "",
    thumbnail: "",
    videoUrl: ""
  });

  const sermonsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "sermons"), orderBy("createdAt", "desc"));
  }, [firestore]);

  const { data: sermons, loading: listLoading } = useCollection(sermonsQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firestore) return;

    setLoading(true);
    const sermonsRef = collection(firestore, "sermons");

    addDoc(sermonsRef, {
      ...formData,
      createdAt: serverTimestamp()
    })
    .then(() => {
      toast({ title: "SERMON ARCHIVED", description: "The message has been successfully added to the archive." });
      setFormData({ title: "", speaker: "", date: "", duration: "", category: "", thumbnail: "", videoUrl: "" });
      setLoading(false);
    })
    .catch(async () => {
      errorEmitter.emit('permission-error', new FirestorePermissionError({ path: sermonsRef.path, operation: 'create', requestResourceData: formData }));
      setLoading(false);
    });
  };

  const handleDelete = (id: string) => {
    if (!firestore) return;
    deleteDoc(doc(firestore, "sermons", id))
      .then(() => toast({ title: "SERMON REMOVED", description: "The record has been cleared from the archive." }))
      .catch(async () => errorEmitter.emit('permission-error', new FirestorePermissionError({ path: `sermons/${id}`, operation: 'delete' })));
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-4 text-foreground">SERMON MANAGEMENT</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic font-medium">Curate the digital bread for the prophetic generation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="bg-card border-white/5 shadow-2xl rounded-xl h-fit">
            <CardHeader className="bg-secondary/5 border-b border-white/5 p-8">
              <CardTitle className="text-[11px] font-black italic uppercase tracking-[0.2em] text-primary flex items-center gap-3">
                <Plus className="h-4 w-4" /> UPLOAD NEW MESSAGE
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">TITLE</Label>
                  <Input value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} placeholder="E.G., THE REALM OF POSSIBILITIES" className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">SPEAKER</Label>
                    <Input value={formData.speaker} onChange={(e) => setFormData({...formData, speaker: e.target.value})} placeholder="PASTOR NAME" className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" required />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">CATEGORY</Label>
                    <Input value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} placeholder="FAITH, HEALING..." className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">DATE</Label>
                    <Input value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} placeholder="FEB 24, 2024" className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" required />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">DURATION</Label>
                    <Input value={formData.duration} onChange={(e) => setFormData({...formData, duration: e.target.value})} placeholder="45:00" className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">THUMBNAIL URL</Label>
                  <Input value={formData.thumbnail} onChange={(e) => setFormData({...formData, thumbnail: e.target.value})} placeholder="HTTPS://..." className="h-11 bg-secondary/5 border-white/10 text-xs text-white" />
                </div>
                <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.3em] rounded-md" disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "ARCHIVE MESSAGE"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* List */}
          <div className="space-y-6">
            <h2 className="text-sm font-black italic uppercase tracking-widest text-primary">RECENT UPLOADS</h2>
            {listLoading ? (
              <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
            ) : (
              <div className="space-y-4">
                {sermons?.map((sermon: any) => (
                  <Card key={sermon.id} className="bg-card border-white/5 overflow-hidden group hover:border-primary/20 transition-all rounded-xl">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Play className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black uppercase text-white">{sermon.title}</h4>
                          <p className="text-[8px] text-muted-foreground uppercase font-bold">{sermon.speaker} • {sermon.date}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(sermon.id)} className="text-white/20 hover:text-destructive hover:bg-destructive/10">
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
