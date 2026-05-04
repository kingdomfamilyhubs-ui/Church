
"use client";

import { useState } from "react";
import { useFirestore, useCollection } from "@/firebase";
import { collection, addDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Loader2, Trash2, MapPin, Shield } from "lucide-react";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";

export default function AdminBranchesPage() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "+260770933607",
    email: "growinginfaithglobalchurch@gmail.com",
    isHeadquarters: false,
    pastor: ""
  });

  const branchesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "branches"), orderBy("createdAt", "desc"));
  }, [firestore]);

  const { data: branches, loading: listLoading } = useCollection(branchesQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firestore) return;

    setLoading(true);
    const branchesRef = collection(firestore, "branches");

    addDoc(branchesRef, {
      ...formData,
      createdAt: serverTimestamp()
    })
    .then(() => {
      toast({ title: "BRANCH ADDED", description: "The location has been successfully registered." });
      setFormData({ name: "", address: "", phone: "+260770933607", email: "growinginfaithglobalchurch@gmail.com", isHeadquarters: false, pastor: "" });
      setLoading(false);
    })
    .catch(async () => {
      errorEmitter.emit('permission-error', new FirestorePermissionError({ path: branchesRef.path, operation: 'create', requestResourceData: formData }));
      setLoading(false);
    });
  };

  const handleDelete = (id: string) => {
    if (!firestore) return;
    deleteDoc(doc(firestore, "branches", id))
      .then(() => toast({ title: "BRANCH REMOVED", description: "The location has been deleted." }))
      .catch(async () => errorEmitter.emit('permission-error', new FirestorePermissionError({ path: `branches/${id}`, operation: 'delete' })));
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-6 rounded-md">
            GLOBAL OPERATIONS
          </div>
          <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-4 text-foreground">BRANCH MANAGEMENT</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic font-medium">Coordinate the global hub locations and contact information.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="bg-card border-white/5 shadow-2xl rounded-xl h-fit">
            <CardHeader className="bg-secondary/5 border-b border-white/5 p-8">
              <CardTitle className="text-[11px] font-black italic uppercase tracking-[0.2em] text-primary flex items-center gap-3">
                <Plus className="h-4 w-4" /> REGISTER NEW LOCATION
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-secondary/5 rounded-lg border border-white/5">
                  <div className="space-y-0.5">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">HEADQUARTERS</Label>
                    <p className="text-[8px] text-white/40 italic">Set this as the main ministry hub</p>
                  </div>
                  <Switch 
                    checked={formData.isHeadquarters}
                    onCheckedChange={(checked) => setFormData({...formData, isHeadquarters: checked})}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">BRANCH NAME</Label>
                  <Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="E.G., FAITH HQ / GLOBAL HUB" className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">PHYSICAL ADDRESS</Label>
                  <Input value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} placeholder="E.G., 123 KINGDOM WAY..." className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">PHONE NUMBER</Label>
                    <Input value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+260..." className="h-11 bg-secondary/5 border-white/10 text-xs font-bold text-white" required />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">LEAD PASTOR</Label>
                    <Input value={formData.pastor} onChange={(e) => setFormData({...formData, pastor: e.target.value})} placeholder="NAME" className="h-11 bg-secondary/5 border-white/10 text-xs font-bold uppercase text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">EMAIL ADDRESS</Label>
                  <Input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="EMAIL@GIFGLOBAL.COM" className="h-11 bg-secondary/5 border-white/10 text-xs text-white" />
                </div>
                <Button type="submit" className="w-full h-12 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.3em] rounded-md" disabled={loading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "PUBLISH BRANCH"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* List */}
          <div className="space-y-6">
            <h2 className="text-sm font-black italic uppercase tracking-widest text-primary">ACTIVE LOCATIONS</h2>
            {listLoading ? (
              <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
            ) : (
              <div className="space-y-4">
                {branches?.map((branch: any) => (
                  <Card key={branch.id} className="bg-card border-white/5 overflow-hidden group hover:border-primary/20 transition-all rounded-xl">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-[10px] font-black uppercase text-white">{branch.name}</h4>
                            {branch.isHeadquarters && (
                              <span className="flex items-center gap-1 bg-primary/20 text-primary text-[6px] font-black px-1.5 py-0.5 rounded uppercase">
                                <Shield className="h-2 w-2" /> HQ
                              </span>
                            )}
                          </div>
                          <p className="text-[8px] text-muted-foreground uppercase font-bold">{branch.address}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(branch.id)} className="text-white/20 hover:text-destructive hover:bg-destructive/10">
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
