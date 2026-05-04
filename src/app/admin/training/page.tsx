
"use client";

import { useState } from "react";
import { useFirestore, useCollection } from "@/firebase";
import { collection, addDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Loader2, Trash2, GraduationCap } from "lucide-react";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";

export default function AdminTrainingPage() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    pathType: "local",
    stepNumber: "",
    description: "",
    content: "",
    scripture: ""
  });

  const modulesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "training_modules"), orderBy("createdAt", "desc"));
  }, [firestore]);

  const { data: modules, loading: listLoading } = useCollection(modulesQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firestore) return;

    setLoading(true);
    const modulesRef = collection(firestore, "training_modules");

    addDoc(modulesRef, {
      ...formData,
      createdAt: serverTimestamp()
    })
    .then(() => {
      toast({ title: "MODULE ADDED", description: "The training module has been successfully published." });
      setFormData({ title: "", pathType: "local", stepNumber: "", description: "", content: "", scripture: "" });
      setLoading(false);
    })
    .catch(async () => {
      errorEmitter.emit('permission-error', new FirestorePermissionError({ path: modulesRef.path, operation: 'create', requestResourceData: formData }));
      setLoading(false);
    });
  };

  const handleDelete = (id: string) => {
    if (!firestore) return;
    deleteDoc(doc(firestore, "training_modules", id))
      .then(() => toast({ title: "MODULE REMOVED", description: "The module has been deleted from the portal." }))
      .catch(async () => errorEmitter.emit('permission-error', new FirestorePermissionError({ path: `training_modules/${id}`, operation: 'delete' })));
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-6 rounded-md">
            ACADEMIC OVERSIGHT
          </div>
          <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-4 text-foreground">TRAINING CENTER MANAGEMENT</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic font-medium">Equip visitors for Growing In Faith Global Training Center.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="bg-card border-white/5 shadow-2xl rounded-xl h-fit">
            <CardHeader className="bg-secondary/5 border-b border-white/5 p-8">
              <CardTitle className="text-[11px] font-black italic uppercase tracking-[0.2em] text-primary flex items-center gap-3">
                <Plus className="h-4 w-4" /> CREATE NEW MODULE
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">VISITOR PATH</Label>
                    <Select value={formData.pathType} onValueChange={(v) => setFormData({...formData, pathType: v})}>
                      <SelectTrigger className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-white/10">
                        <SelectItem value="local" className="text-[10px] font-bold uppercase">LOCAL VISITOR</SelectItem>
                        <SelectItem value="international" className="text-[10px] font-bold uppercase">INTERNATIONAL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">STEP NUMBER</Label>
                    <Input value={formData.stepNumber} onChange={(e) => setFormData({...formData, stepNumber: e.target.value})} placeholder="E.G., 01" className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">MODULE TITLE</Label>
                  <Input value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} placeholder="E.G., VISION ORIENTATION" className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">BRIEF DESCRIPTION</Label>
                  <Input value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="SUMMARY FOR THE HUB..." className="h-11 bg-secondary/5 border-white/10 text-xs text-white" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">TEACHING CONTENT</Label>
                  <Textarea value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})} placeholder="DETAILED PROPHETIC TEACHING..." className="min-h-[160px] bg-secondary/5 border-white/10 text-xs italic text-white/80" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">FOUNDATIONAL SCRIPTURE</Label>
                  <Input value={formData.scripture} onChange={(e) => setFormData({...formData, scripture: e.target.value})} placeholder="E.G., ROMANS 4:17" className="h-11 bg-secondary/5 border-white/10 text-xs italic text-white" />
                </div>
                <Button type="submit" className="w-full h-12 bg-primary text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-md hover:opacity-90 shadow-xl border-none" disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "PUBLISH MODULE"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* List */}
          <div className="space-y-6">
            <h2 className="text-sm font-black italic uppercase tracking-widest text-primary">EXISTING MODULES</h2>
            {listLoading ? (
              <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
            ) : (
              <div className="space-y-4">
                {modules?.map((mod: any) => (
                  <Card key={mod.id} className="bg-card border-white/5 overflow-hidden group hover:border-primary/20 transition-all rounded-xl shadow-xl">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <GraduationCap className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[7px] font-black bg-primary/20 text-primary px-2 py-0.5 rounded uppercase">{mod.pathType}</span>
                            <span className="text-[7px] font-black text-white/40 uppercase">STEP {mod.stepNumber}</span>
                          </div>
                          <h4 className="text-[10px] font-black uppercase text-white mt-1">{mod.title}</h4>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(mod.id)} className="text-white/20 hover:text-destructive hover:bg-destructive/10">
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
