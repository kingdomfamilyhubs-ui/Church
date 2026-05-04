
"use client";

import { useState, useEffect } from "react";
import { useFirestore, useDoc } from "@/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Palette, Image as ImageIcon, Save, Info } from "lucide-react";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";

export default function AdminBrandingPage() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    logoUrl: "",
    heroUrl: "",
    ministryName: "Growing In Faith Global Church",
    mandate: "Transforming non extinct into existence"
  });

  const brandingRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, "settings", "branding");
  }, [firestore]);

  const { data: brandingData, loading: dataLoading } = useDoc(brandingRef);

  useEffect(() => {
    if (brandingData) {
      setFormData({
        logoUrl: brandingData.logoUrl || "",
        heroUrl: brandingData.heroUrl || "",
        ministryName: brandingData.ministryName || "Growing In Faith Global Church",
        mandate: brandingData.mandate || "Transforming non extinct into existence"
      });
    }
  }, [brandingData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firestore || !brandingRef) return;

    setLoading(true);

    setDoc(brandingRef, {
      ...formData,
      updatedAt: serverTimestamp()
    }, { merge: true })
    .then(() => {
      toast({ title: "IDENTITY UPDATED", description: "The ministry branding has been successfully updated across all platforms." });
      setLoading(false);
    })
    .catch(async () => {
      errorEmitter.emit('permission-error', new FirestorePermissionError({ path: brandingRef.path, operation: 'write', requestResourceData: formData }));
      setLoading(false);
    });
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-6 rounded-md">
            SITE IDENTITY
          </div>
          <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-4 text-foreground">BRANDING & MEDIA</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic font-medium">Control the visual mandate and prophetic representation of the church.</p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <Card className="bg-card border-white/5 shadow-2xl rounded-xl">
            <CardHeader className="bg-secondary/5 border-b border-white/5 p-8">
              <CardTitle className="text-[11px] font-black italic uppercase tracking-[0.2em] text-primary flex items-center gap-3">
                <Palette className="h-4 w-4" /> VISUAL ASSETS
              </CardTitle>
              <CardDescription className="text-[9px] uppercase font-bold text-white/40 tracking-widest mt-2">
                Use high-quality hosted URLs for your images.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Label className="text-[9px] font-black uppercase tracking-widest text-primary">MINISTRY LOGO URL</Label>
                    </div>
                    <Input 
                      value={formData.logoUrl} 
                      onChange={(e) => setFormData({...formData, logoUrl: e.target.value})} 
                      placeholder="HTTPS://..." 
                      className="h-11 bg-secondary/5 border-white/10 text-[10px] font-bold text-white" 
                    />
                    <div className="p-4 bg-black/40 rounded-lg border border-white/5 flex items-center gap-4">
                      <div className="h-12 w-12 rounded border border-white/10 overflow-hidden bg-secondary/10 flex items-center justify-center">
                        {formData.logoUrl ? (
                          <img src={formData.logoUrl} alt="Preview" className="h-full w-full object-contain" />
                        ) : (
                          <ImageIcon className="h-5 w-5 text-white/20" />
                        )}
                      </div>
                      <p className="text-[8px] text-white/40 uppercase italic">Current Logo Preview</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">HERO LANDING PHOTO URL</Label>
                    <Input 
                      value={formData.heroUrl} 
                      onChange={(e) => setFormData({...formData, heroUrl: e.target.value})} 
                      placeholder="HTTPS://..." 
                      className="h-11 bg-secondary/5 border-white/10 text-[10px] font-bold text-white" 
                    />
                    <div className="p-4 bg-black/40 rounded-lg border border-white/5 flex items-center gap-4">
                      <div className="h-12 w-20 rounded border border-white/10 overflow-hidden bg-secondary/10 flex items-center justify-center">
                        {formData.heroUrl ? (
                          <img src={formData.heroUrl} alt="Preview" className="h-full w-full object-cover" />
                        ) : (
                          <ImageIcon className="h-5 w-5 text-white/20" />
                        )}
                      </div>
                      <p className="text-[8px] text-white/40 uppercase italic">Hero Photo Preview</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-6 border-t border-white/5">
                   <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">MINISTRY NAME</Label>
                    <Input 
                      value={formData.ministryName} 
                      onChange={(e) => setFormData({...formData, ministryName: e.target.value})} 
                      className="h-11 bg-secondary/5 border-white/10 text-xs font-black uppercase text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">MANDATE / SLOGAN</Label>
                    <Input 
                      value={formData.mandate} 
                      onChange={(e) => setFormData({...formData, mandate: e.target.value})} 
                      className="h-11 bg-secondary/5 border-white/10 text-xs font-bold italic text-white" 
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full h-14 bg-primary text-black text-[10px] font-black uppercase tracking-[0.4em] rounded-md shadow-2xl hover:opacity-90" disabled={loading || dataLoading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Save className="h-4 w-4 mr-2" /> COMMIT CHANGES</>}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="bg-primary/5 border border-dashed border-primary/20 rounded-xl p-8 flex gap-6 items-start">
            <Info className="h-6 w-6 text-primary shrink-0" />
            <div className="space-y-2">
              <h4 className="text-[10px] font-black uppercase text-white tracking-widest">HOW TO UPLOAD IMAGES</h4>
              <p className="text-[9px] text-white/60 leading-relaxed italic">
                To upload your official logo or photos, we recommend using <strong>Firebase Storage</strong> in your console or a professional hosting service. Once uploaded, copy the "Download URL" and paste it into the fields above. This ensures your images load instantly across all global Hubs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
