
"use client";

import { useState } from "react";
import { useFirestore, useCollection } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, MapPin, Send, MessageSquare, Heart, Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";

export default function ContactPage() {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [loading, setLoading] = useState(false);

  const branchesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, "branches"), orderBy("isHeadquarters", "desc"));
  }, [firestore]);

  const { data: branches, loading: branchesLoading } = useCollection(branchesQuery);

  const hq = branches?.find(b => b.isHeadquarters);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "MESSAGE SENT",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl mb-6 font-black tracking-tighter italic uppercase text-foreground">CONTACT US</h1>
          <p className="text-[11px] md:text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed italic font-medium uppercase tracking-widest">
            Connect with the unique prophetic generation. Our team is ready to stand with you in faith.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Info Side */}
          <div className="space-y-6">
            <Card className="bg-card text-card-foreground border border-white/5 shadow-xl rounded-xl">
              <CardContent className="p-8 space-y-8">
                <div className="flex gap-5 items-start">
                  <div className="bg-primary/20 p-2.5 rounded-lg shrink-0 border border-primary/20">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-black italic text-[9px] uppercase tracking-widest mb-1.5 text-primary">PRIMARY HUB</h3>
                    <p className="text-[11px] text-card-foreground/70 leading-relaxed font-bold uppercase">{hq?.name || "Lusaka Hub (Headquarters)"}</p>
                    <p className="text-[9px] text-card-foreground/50 leading-relaxed italic uppercase mt-1">
                      {hq?.address || "Chipata Compound at SHOOTING STAR CHRISTIAN SCHOOL, Lusaka, Zambia"}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="bg-primary/20 p-2.5 rounded-lg shrink-0 border border-primary/20">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-black italic text-[9px] uppercase tracking-widest mb-1.5 text-primary">GLOBAL CONTACT</h3>
                    <p className="text-[11px] text-card-foreground/70 leading-relaxed font-bold">{hq?.phone || "+260770933607"}</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="bg-primary/20 p-2.5 rounded-lg shrink-0 border border-primary/20">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-black italic text-[9px] uppercase tracking-widest mb-1.5 text-primary">EMAIL MANDATE</h3>
                    <p className="text-[10px] text-card-foreground/70 leading-relaxed font-bold break-all uppercase">{hq?.email || "growinginfaithglobalchurch@gmail.com"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-none shadow-xl rounded-xl">
              <CardContent className="p-8">
                <h3 className="text-md font-black italic uppercase tracking-tighter mb-6">OFFICE HOURS</h3>
                <ul className="space-y-4 text-[9px] font-black tracking-widest uppercase opacity-90">
                  <li className="flex justify-between border-b border-primary-foreground/20 pb-2"><span>MON - THU</span> <span>9 AM - 5 PM</span></li>
                  <li className="flex justify-between border-b border-primary-foreground/20 pb-2"><span>FRIDAY</span> <span>9 AM - 1 PM</span></li>
                  <li className="flex justify-between"><span>SAT - SUN</span> <span>CLOSED</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <Card className="bg-card text-card-foreground border border-white/5 shadow-2xl overflow-hidden rounded-xl">
              <CardHeader className="p-0">
                <Tabs defaultValue="inquiry" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 h-14 bg-secondary/10 rounded-none border-b border-white/5">
                    <TabsTrigger value="inquiry" className="rounded-none data-[state=active]:bg-card data-[state=active]:text-primary text-[9px] font-black uppercase tracking-widest transition-all">
                      <MessageSquare className="h-3 w-3 mr-2" /> GENERAL INQUIRY
                    </TabsTrigger>
                    <TabsTrigger value="prayer" className="rounded-none data-[state=active]:bg-card data-[state=active]:text-primary text-[9px] font-black uppercase tracking-widest transition-all">
                      <Heart className="h-3 w-3 mr-2" /> PRAYER REQUEST
                    </TabsTrigger>
                  </TabsList>

                  <div className="p-8 md:p-10">
                    <TabsContent value="inquiry" className="mt-0">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-[9px] font-black uppercase tracking-widest text-primary">FULL NAME</Label>
                            <Input id="name" placeholder="Enter your name" className="h-11 bg-secondary/5 border-white/10 rounded-md text-xs text-white" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-[9px] font-black uppercase tracking-widest text-primary">EMAIL ADDRESS</Label>
                            <Input id="email" type="email" placeholder="Enter your email" className="h-11 bg-secondary/5 border-white/10 rounded-md text-xs text-white" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-[9px] font-black uppercase tracking-widest text-primary">SUBJECT</Label>
                          <Input id="subject" placeholder="What is this about?" className="h-11 bg-secondary/5 border-white/10 rounded-md text-xs text-white" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-[9px] font-black uppercase tracking-widest text-primary">MESSAGE</Label>
                          <Textarea id="message" placeholder="Write your message here..." className="min-h-[140px] bg-secondary/5 border-white/10 rounded-md text-xs text-white resize-none" required />
                        </div>
                        <Button className="w-full h-12 bg-primary text-primary-foreground text-[9px] font-black uppercase tracking-[0.3em] rounded-md hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg" disabled={loading}>
                          {loading ? "SENDING..." : <>SEND MESSAGE <Send className="h-3 w-3" /></>}
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="prayer" className="mt-0">
                      <div className="mb-8">
                        <h4 className="text-lg font-black italic uppercase tracking-tighter mb-2">DIVINE INTERCESSION</h4>
                        <p className="text-[10px] text-muted-foreground leading-relaxed italic font-medium">Our prayer team is ready to stand with you in faith. All requests are kept strictly confidential.</p>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="p-name" className="text-[9px] font-black uppercase tracking-widest text-primary">NAME (OPTIONAL)</Label>
                            <Input id="p-name" placeholder="Leave blank for anonymous" className="h-11 bg-secondary/5 border-white/10 rounded-md text-xs text-white" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="p-phone" className="text-[9px] font-black uppercase tracking-widest text-primary">PHONE NUMBER</Label>
                            <Input id="p-phone" placeholder="For prayer followup" className="h-11 bg-secondary/5 border-white/10 rounded-md text-xs text-white" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="request" className="text-[9px] font-black uppercase tracking-widest text-primary">YOUR PRAYER REQUEST</Label>
                          <Textarea id="request" placeholder="How can we pray for you today?" className="min-h-[180px] bg-secondary/5 border-white/10 rounded-md text-xs text-white resize-none" required />
                        </div>
                        <Button className="w-full h-12 bg-primary text-primary-foreground text-[9px] font-black uppercase tracking-[0.3em] rounded-md hover:opacity-90 transition-all flex items-center justify-center gap-3 shadow-lg" disabled={loading}>
                          {loading ? "SENDING..." : <>SUBMIT PRAYER REQUEST <Heart className="h-3 w-3" /></>}
                        </Button>
                      </form>
                    </TabsContent>
                  </div>
                </Tabs>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Dynamic Branch Directory */}
        <section className="mt-24 pt-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black italic uppercase tracking-tighter mb-4 text-foreground">GLOBAL BRANCHES</h2>
            <div className="w-12 h-0.5 bg-primary mx-auto" />
          </div>

          {branchesLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : branches && branches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {branches.map((branch: any) => (
                <Card key={branch.id} className="bg-secondary/5 border border-white/5 hover:border-primary/20 transition-all rounded-xl group">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="bg-primary/10 p-2.5 rounded-lg border border-primary/20">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      {branch.isHeadquarters && (
                        <span className="bg-primary text-primary-foreground text-[7px] font-black px-2 py-0.5 rounded uppercase tracking-widest shadow-lg">GLOBAL HQ</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-black italic uppercase text-white mb-2 leading-tight">{branch.name}</h3>
                      <p className="text-[10px] text-white/60 italic font-medium leading-relaxed mb-4">{branch.address}</p>
                      
                      <div className="space-y-2 border-t border-white/5 pt-4">
                        <div className="flex items-center gap-3">
                          <Phone className="h-3 w-3 text-primary" />
                          <span className="text-[9px] font-bold text-white/80">{branch.phone}</span>
                        </div>
                        {branch.email && (
                          <div className="flex items-center gap-3">
                            <Mail className="h-3 w-3 text-primary" />
                            <span className="text-[9px] font-bold text-white/80 uppercase">{branch.email}</span>
                          </div>
                        )}
                        {branch.pastor && (
                          <div className="flex items-center gap-3">
                            <Sparkles className="h-3 w-3 text-primary" />
                            <span className="text-[9px] font-black uppercase text-primary/80 italic">{branch.pastor}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-secondary/5 border border-dashed border-white/5 rounded-2xl">
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic">Global expansion in progress. Contact HQ for current locations.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
