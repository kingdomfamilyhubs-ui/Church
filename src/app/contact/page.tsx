
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
        title: "Message Sent!",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you have a question, need prayer, or want to share a testimony, we are here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <Card className="bg-card border-none shadow-xl">
              <CardContent className="p-8 space-y-8">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-muted-foreground">123 Faith Lane, Global City, GC 12345</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-accent/10 p-3 rounded-xl h-fit">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl h-fit">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                    <p className="text-muted-foreground">info@gifglobalchurch.org</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <ul className="space-y-3 opacity-90">
                  <li className="flex justify-between"><span>Mon - Thu:</span> <span>9:00 AM - 5:00 PM</span></li>
                  <li className="flex justify-between"><span>Friday:</span> <span>9:00 AM - 1:00 PM</span></li>
                  <li className="flex justify-between"><span>Sat - Sun:</span> <span>Closed (Services only)</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-none shadow-2xl">
              <CardHeader className="p-8">
                <Tabs defaultValue="inquiry" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 h-14 bg-secondary p-1 rounded-xl">
                    <TabsTrigger value="inquiry" className="rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
                      <MessageSquare className="h-4 w-4 mr-2" /> General Inquiry
                    </TabsTrigger>
                    <TabsTrigger value="prayer" className="rounded-lg data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                      <Heart className="h-4 w-4 mr-2" /> Prayer Request
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="inquiry" className="mt-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="John Doe" className="h-12 bg-muted border-none rounded-lg" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="john@example.com" className="h-12 bg-muted border-none rounded-lg" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" placeholder="What is this about?" className="h-12 bg-muted border-none rounded-lg" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Write your message here..." className="min-h-[150px] bg-muted border-none rounded-lg" required />
                      </div>
                      <Button className="w-full h-14 bg-primary text-white text-lg rounded-xl flex items-center gap-2" disabled={loading}>
                        {loading ? "Sending..." : <>Send Message <Send className="h-5 w-5" /></>}
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="prayer" className="mt-8">
                    <CardDescription className="mb-6 text-lg">
                      Our prayer team is ready to stand with you in faith. All requests are kept confidential.
                    </CardDescription>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="p-name">Name (Optional)</Label>
                          <Input id="p-name" placeholder="Leave blank for anonymous" className="h-12 bg-muted border-none rounded-lg" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="p-phone">Phone Number (Optional)</Label>
                          <Input id="p-phone" placeholder="For prayer followup" className="h-12 bg-muted border-none rounded-lg" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="request">Your Prayer Request</Label>
                        <Textarea id="request" placeholder="How can we pray for you today?" className="min-h-[200px] bg-muted border-none rounded-lg" required />
                      </div>
                      <Button className="w-full h-14 bg-accent text-accent-foreground text-lg rounded-xl flex items-center gap-2" disabled={loading}>
                        {loading ? "Sending..." : <>Submit Prayer Request <Heart className="h-5 w-5" /></>}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
