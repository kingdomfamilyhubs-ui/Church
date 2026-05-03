
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, CreditCard, Smartphone, Banknote, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export default function GivePage() {
  const { toast } = useToast();
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("partnership");
  const [isRecurring, setIsRecurring] = useState(false);

  const amounts = ["50", "100", "500", "1000"];

  const handleGive = () => {
    toast({
      title: "GIVING INITIATED",
      description: `Thank you for your seed of ${amount || '0'}. Redirecting to secure portal...`,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-primary/20 p-4 rounded-full w-fit mx-auto mb-8 border border-primary/20">
            <Heart className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl mb-6 font-black italic uppercase tracking-tighter text-foreground">GENEROSITY & STEWARDSHIP</h1>
          <p className="text-[11px] md:text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed italic font-medium uppercase tracking-widest">
            Your giving enables us to impact lives, support the needy, and spread the Gospel of Jesus Christ to the ends of the earth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Giving Form */}
          <Card className="lg:col-span-2 bg-card text-card-foreground border-none shadow-2xl rounded-xl overflow-hidden">
            <CardHeader className="p-8 md:p-10 border-b border-white/5 bg-secondary/5">
              <CardTitle className="text-lg font-black italic uppercase tracking-tight text-white">SECURE ONLINE GIVING</CardTitle>
              <CardDescription className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Invest into the unique prophetic generation</CardDescription>
            </CardHeader>
            <CardContent className="p-8 md:p-10 space-y-10">
              {/* Category Selection */}
              <div className="space-y-3">
                <Label className="text-[9px] font-black uppercase tracking-widest text-primary">SELECT GIVING CATEGORY</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="h-12 bg-secondary/5 border-white/10 rounded-md text-xs font-bold uppercase text-white">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-white/10">
                    <SelectItem value="partnership" className="text-[10px] font-bold uppercase">General Partnership</SelectItem>
                    <SelectItem value="good-hope" className="text-[10px] font-bold uppercase">Good Hope Vow</SelectItem>
                    <SelectItem value="d-realms" className="text-[10px] font-bold uppercase">D-Realms Training Centre</SelectItem>
                    <SelectItem value="first-fruit" className="text-[10px] font-bold uppercase">First Fruit</SelectItem>
                    <SelectItem value="salary-vow" className="text-[10px] font-bold uppercase">Salary Vow</SelectItem>
                    <SelectItem value="property-vow" className="text-[10px] font-bold uppercase">USA Property Vow</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Amount Selection */}
              <div className="space-y-4">
                <Label className="text-[9px] font-black uppercase tracking-widest text-primary">SELECT OR ENTER AMOUNT</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {amounts.map((amt) => (
                    <Button
                      key={amt}
                      variant="outline"
                      onClick={() => setAmount(amt)}
                      className={cn(
                        "h-12 border-white/10 text-[11px] font-black uppercase transition-all rounded-md",
                        amount === amt ? "bg-primary text-primary-foreground border-primary" : "bg-transparent text-white hover:bg-white/5"
                      )}
                    >
                      ${amt}
                    </Button>
                  ))}
                </div>
                <div className="relative pt-2">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 font-black">$</span>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="ENTER CUSTOM AMOUNT"
                    className="h-12 pl-8 bg-secondary/5 border-white/10 rounded-md text-xs font-bold uppercase text-white placeholder:text-white/20"
                  />
                </div>
              </div>

              {/* Frequency Toggle */}
              <div className="flex gap-4 p-1 bg-secondary/10 rounded-lg max-w-sm mx-auto">
                <Button 
                  onClick={() => setIsRecurring(false)}
                  className={cn(
                    "flex-1 h-10 rounded-md text-[9px] font-black uppercase tracking-widest transition-all",
                    !isRecurring ? "bg-white text-black" : "bg-transparent text-white/40"
                  )}
                >
                  ONE-TIME
                </Button>
                <Button 
                  onClick={() => setIsRecurring(true)}
                  className={cn(
                    "flex-1 h-10 rounded-md text-[9px] font-black uppercase tracking-widest transition-all",
                    isRecurring ? "bg-white text-black" : "bg-transparent text-white/40"
                  )}
                >
                  RECURRING
                </Button>
              </div>

              <Button 
                onClick={handleGive}
                className="w-full h-14 bg-primary text-primary-foreground rounded-md text-[10px] font-black uppercase tracking-[0.4em] hover:opacity-90 transition-all shadow-2xl"
              >
                PROCEED TO GIVE ${amount || '0'}
              </Button>
            </CardContent>
          </Card>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <Card className="bg-secondary/10 border border-white/5 shadow-xl rounded-xl">
              <CardContent className="p-8 space-y-8">
                <h3 className="text-sm font-black italic uppercase tracking-widest text-primary">OTHER WAYS TO GIVE</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-white">
                    <Banknote className="h-4 w-4 text-primary" /> BANK TRANSFER
                  </div>
                  <p className="text-[10px] text-muted-foreground font-bold leading-relaxed uppercase pl-7">
                    GIF GLOBAL CHURCH<br/>
                    ACCT: 1234567890<br/>
                    BANK: FIRST FAITH BANK
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-white">
                    <Smartphone className="h-4 w-4 text-primary" /> MOBILE MONEY
                  </div>
                  <p className="text-[10px] text-muted-foreground font-bold leading-relaxed uppercase pl-7">
                    NUMBER: +260770933607<br/>
                    NAME: GROWING IN FAITH
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-card p-8 rounded-xl border border-primary/20 space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-[10px] font-black uppercase tracking-widest">SECURE PORTAL</span>
              </div>
              <p className="text-[10px] text-white/60 italic font-medium leading-relaxed">
                All donations are tax-deductible. You will receive an annual contribution statement for your records automatically via email.
              </p>
              <ul className="space-y-3">
                {["SSL Encrypted", "No hidden fees", "Cancel anytime"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-white/40">
                    <CheckCircle2 className="h-3 w-3 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
