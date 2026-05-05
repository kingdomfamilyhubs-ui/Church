
"use client";

import { useState, useEffect, useRef } from "react";
import { useFirestore, useDoc } from "@/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Palette, Image as ImageIcon, Save, Info, ShieldCheck, Upload } from "lucide-react";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";

export default function AdminBrandingPage() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [loading, setLoading] = useState(false);
  const logoInputRef = useRef<HTMLInputElement>(null);
  const heroInputRef = useRef<HTMLInputElement>(null);

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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: "logoUrl" | "heroUrl") => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 800000) {
        toast({
          variant: "destructive",
          title: "FILE TOO LARGE",
          description: "Please use an image smaller than 800KB for direct upload."
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, [field]: reader.result as string }));
        toast({ title: "PHOTO PREPARED", description: "Image processed from local storage." });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firestore || !brandingRef) return;

    setLoading(true);

    setDoc(brandingRef, {
      ...formData,
      updatedAt: serverTimestamp()
    }, { merge: true })
    .then(() => {
      toast({ 
        title: "IDENTITY COMMITTED", 
        description: "Global branding has been successfully saved." 
      });
      setLoading(false);
    })
    .catch(async () => {
      errorEmitter.emit('permission-error', new FirestorePermissionError({ 
        path: brandingRef.path, 
        operation: 'write', 
        requestResourceData: formData 
      }));
      setLoading(false);
    });
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-6 rounded-md">
            GLOBAL IDENTITY
          </div>
          <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter mb-4 text-foreground">SITE IDENTITY</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic font-medium">Command the visual mandate of the church.</p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <Card className="bg-card border-white/5 shadow-2xl rounded-xl overflow-hidden">
            <CardHeader className="bg-secondary/5 border-b border-white/5 p-8">
              <CardTitle className="text-[11px] font-black italic uppercase tracking-[0.2em] text-primary flex items-center gap-3">
                <Palette className="h-4 w-4" /> VISUAL ASSETS
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">MINISTRY LOGO</Label>
                    <div className="flex gap-2">
                      <Input 
                        value={formData.logoUrl} 
                        onChange={(e) => setFormData({...formData, logoUrl: e.target.value})} 
                        placeholder="URL..." 
                        className="bg-secondary/5 border-white/10 text-[10px] font-bold text-white flex-grow" 
                      />
                      <input type="file" accept="image/*" className="hidden" ref={logoInputRef} onChange={(e) => handleFileUpload(e, "logoUrl")} />
                      <Button type="button" variant="outline" className="border-white/10 bg-secondary/10 hover:bg-primary hover:text-black transition-all" onClick={() => logoInputRef.current?.click()}>
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">HERO LANDING PHOTO</Label>
                    <div className="flex gap-2">
                      <Input 
                        value={formData.heroUrl} 
                        onChange={(e) => setFormData({...formData, heroUrl: e.target.value})} 
                        placeholder="URL..." 
                        className="bg-secondary/5 border-white/10 text-[10px] font-bold text-white flex-grow" 
                      />
                      <input type="file" accept="image/*" className="hidden" ref={heroInputRef} onChange={(e) => handleFileUpload(e, "heroUrl")} />
                      <Button type="button" variant="outline" className="border-white/10 bg-secondary/10 hover:bg-primary hover:text-black transition-all" onClick={() => heroInputRef.current?.click()}>
                        <Upload className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-6 border-t border-white/5">
                   <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">OFFICIAL MINISTRY NAME</Label>
                    <Input value={formData.ministryName} onChange={(e) => setFormData({...formData, ministryName: e.target.value})} className="bg-secondary/5 border-white/10 text-xs font-black uppercase text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[9px] font-black uppercase tracking-widest text-primary">PROPHETIC MANDATE</Label>
                    <Input value={formData.mandate} onChange={(e) => setFormData({...formData, mandate: e.target.value})} className="bg-secondary/5 border-white/10 text-xs font-bold italic text-white" />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-primary text-black text-[10px] font-black uppercase tracking-[0.4em] rounded-md shadow-2xl hover:opacity-90" disabled={loading || dataLoading}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Save className="h-4 w-4 mr-2" /> COMMIT CHANGES</>}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
