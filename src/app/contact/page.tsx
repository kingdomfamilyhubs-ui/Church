
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, MapPin, Send, MessageSquare, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

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
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl mb-6 font-black tracking-tighter italic uppercase text-foreground">CONTACT US</h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
            Whether you have a question, need prayer, or want to share a testimony, we are here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <Card className="bg-card text-card-foreground border-none shadow-2xl">
              <CardContent className="p-10 space-y-10">
                <div className="flex gap-6 items-start">
                  <div className="bg-primary p-3 rounded-md shrink-0">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-black italic text-xs uppercase tracking-widest mb-2 text-primary">OUR LOCATION</h3>
                    <p className="text-sm text-card-foreground/80 leading-relaxed">Faith HQ, Global City Hub</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-primary p-3 rounded-md shrink-0">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-black italic text-xs uppercase tracking-widest mb-2 text-primary">CALL US</h3>
                    <p className="text-sm text-card-foreground/80 leading-relaxed">+1 (800) FAITH-NOW</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-primary p-3 rounded-md shrink-0">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-black italic text-xs uppercase tracking-widest mb-2 text-primary">EMAIL US</h3>
                    <p className="text-sm text-card-foreground/80 leading-relaxed">growinginfaithglobalchurch@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-none shadow-xl">
              <CardContent className="p-10">
                <h3 className="text-lg font-black italic uppercase tracking-tighter mb-6">OFFICE HOURS</h3>
                <ul className="space-y-4 text-xs font-bold tracking-widest uppercase opacity-90">
                  <li className="flex justify-between border-b border-primary-foreground/20 pb-2"><span>MON - THU:</span> <span>9:00 AM - 5:00 PM</span></li>
                  <li className="flex justify-between border-b border-primary-foreground/20 pb-2"><span>FRIDAY:</span> <span>9:00 AM - 1:00 PM</span></li>
                  <li className="flex justify-between"><span>SAT - SUN:</span> <span>CLOSED</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <Card className="bg-card text-card-foreground border-none shadow-2xl overflow-hidden">
              <CardHeader className="p-0">
                <Tabs defaultValue="inquiry" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 h-16 bg-muted rounded-none">
                    <TabsTrigger value="inquiry" className="rounded-none data-[state=active]:bg-card data-[state=active]:text-primary text-[10px] font-black uppercase tracking-widest">
                      <MessageSquare className="h-4 w-4 mr-2" /> GENERAL INQUIRY
                    </TabsTrigger>
                    <TabsTrigger value="prayer" className="rounded-none data-[state=active]:bg-card data-[state=active]:text-primary text-[10px] font-black uppercase tracking-widest">
                      <Heart className="h-4 w-4 mr-2" /> PRAYER REQUEST
                    </TabsTrigger>
                  </TabsList>

                  <div className="p-10">
                    <TabsContent value="inquiry" className="mt-0">
                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-primary">FULL NAME</Label>
                            <Input id="name" placeholder="Enter your name" className="h-12 bg-secondary/10 border-border rounded-md text-sm" required />
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-primary">EMAIL ADDRESS</Label>
                            <Input id="email" type="email" placeholder="Enter your email" className="h-12 bg-secondary/10 border-border rounded-md text-sm" required />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="subject" className="text-[10px] font-black uppercase tracking-widest text-primary">SUBJECT</Label>
                          <Input id="subject" placeholder="What is this about?" className="h-12 bg-secondary/10 border-border rounded-md text-sm" required />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-primary">MESSAGE</Label>
                          <Textarea id="message" placeholder="Write your message here..." className="min-h-[180px] bg-secondary/10 border-border rounded-md text-sm resize-none" required />
                        </div>
                        <Button className="w-full h-14 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.3em] rounded-md hover:opacity-90 transition-all flex items-center justify-center gap-3" disabled={loading}>
                          {loading ? "SENDING..." : <>SEND MESSAGE <Send className="h-4 w-4" /></>}
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="prayer" className="mt-0">
                      <div className="mb-8">
                        <h4 className="text-xl font-black italic uppercase tracking-tighter mb-2">DIVINE INTERCESSION</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed italic">Our prayer team is ready to stand with you in faith. All requests are kept strictly confidential.</p>
                      </div>
                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <Label htmlFor="p-name" className="text-[10px] font-black uppercase tracking-widest text-primary">NAME (OPTIONAL)</Label>
                            <Input id="p-name" placeholder="Leave blank for anonymous" className="h-12 bg-secondary/10 border-border rounded-md text-sm" />
                          </div>
                          <div className="space-y-3">
                            <Label htmlFor="p-phone" className="text-[10px] font-black uppercase tracking-widest text-primary">PHONE NUMBER</Label>
                            <Input id="p-phone" placeholder="For prayer followup" className="h-12 bg-secondary/10 border-border rounded-md text-sm" />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="request" className="text-[10px] font-black uppercase tracking-widest text-primary">YOUR PRAYER REQUEST</Label>
                          <Textarea id="request" placeholder="How can we pray for you today?" className="min-h-[220px] bg-secondary/10 border-border rounded-md text-sm resize-none" required />
                        </div>
                        <Button className="w-full h-14 bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.3em] rounded-md hover:opacity-90 transition-all flex items-center justify-center gap-3" disabled={loading}>
                          {loading ? "SENDING..." : <>SUBMIT PRAYER REQUEST <Heart className="h-4 w-4" /></>}
                        </Button>
                      </form>
                    </TabsContent>
                  </div>
                </Tabs>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
