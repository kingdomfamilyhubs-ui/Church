
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, CreditCard, Smartphone, Banknote, ShieldCheck, CheckCircle2, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const GIVING_CATEGORIES = [
  { id: "partnership", label: "GENERAL PARTNERSHIP" },
  { id: "good-hope", label: "GOOD HOPE VOW" },
  { id: "gif-training", label: "GROWING IN FAITH GLOBAL TRAINING CENTER" },
  { id: "first-fruit", label: "FIRST FRUIT" },
  { id: "salary-vow", label: "SALARY VOW" },
  { id: "property-vow", label: "USA PROPERTY VOW" },
];

const CURRENCIES = [
  { id: "ZMW", label: "ZAMBIAN KWACHA (ZMW/ZMK)", symbol: "K" },
  { id: "USD", label: "US DOLLAR ($)", symbol: "$" },
  { id: "GBP", label: "BRITISH POUND (£)", symbol: "£" },
  { id: "EUR", label: "EURO (€)", symbol: "€" },
  { id: "ZAR", label: "SOUTH AFRICAN RAND (R)", symbol: "R" },
];

const BANK_DETAILS = {
  accountName: "GIF GLOBAL CHURCH",
  accountNumber: "1234567890",
  bankName: "FIRST FAITH BANK",
};

const MOBILE_MONEY_DETAILS = {
  number: "+260770933607",
  name: "GROWING IN FAITH",
};

const PRESET_AMOUNTS = ["50", "100", "500", "1000"];

export default function GivePage() {
  const { toast } = useToast();
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("partnership");
  const [currency, setCurrency] = useState<string>("ZMW");
  const [isRecurring, setIsRecurring] = useState(false);

  const selectedCurrency = CURRENCIES.find(c => c.id === currency) || CURRENCIES[0];

  const handleGive = () => {
    toast({
      title: "GIVING INITIATED",
      description: `Thank you for your seed of ${selectedCurrency.symbol}${amount || '0'}. Redirecting to secure portal...`,
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
          <Card className="lg:col-span-2 bg-card text-card-foreground border-none shadow-2xl rounded-xl overflow-hidden">
            <CardHeader className="p-8 md:p-10 border-b border-white/5 bg-secondary/5">
              <CardTitle className="text-lg font-black italic uppercase tracking-tight text-white">SECURE ONLINE GIVING</CardTitle>
              <CardDescription className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Invest into the unique prophetic generation</CardDescription>
            </CardHeader>
            <CardContent className="p-8 md:p-10 space-y-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">SELECT GIVING CATEGORY</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="bg-secondary/5 border-white/10 rounded-md text-xs font-bold uppercase text-white">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-white/10">
                      {GIVING_CATEGORIES.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id} className="text-[10px] font-bold uppercase">
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label className="text-[9px] font-black uppercase tracking-widest text-primary">SELECT CURRENCY</Label>
                  <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger className="bg-secondary/5 border-white/10 rounded-md text-xs font-bold uppercase text-white">
                      <div className="flex items-center gap-2">
                        <Globe className="h-3 w-3 text-primary" />
                        <SelectValue placeholder="Select Currency" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-card border-white/10">
                      {CURRENCIES.map((curr) => (
                        <SelectItem key={curr.id} value={curr.id} className="text-[10px] font-bold uppercase">
                          {curr.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-[9px] font-black uppercase tracking-widest text-primary">SELECT OR ENTER AMOUNT ({currency})</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {PRESET_AMOUNTS.map((amt) => (
                    <Button
                      key={amt}
                      variant="outline"
                      onClick={() => setAmount(amt)}
                      className={cn(
                        "border-white/10 text-[11px] font-black uppercase transition-all rounded-md",
                        amount === amt ? "bg-primary text-black border-primary" : "bg-transparent text-white hover:bg-white/5"
                      )}
                    >
                      {selectedCurrency.symbol}{amt}
                    </Button>
                  ))}
                </div>
                <div className="relative pt-2">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 font-black">{selectedCurrency.symbol}</span>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="ENTER CUSTOM AMOUNT"
                    className="pl-10 bg-secondary/5 border-white/10 rounded-md text-xs font-bold uppercase text-white placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="flex gap-4 p-1 bg-secondary/10 rounded-lg max-w-sm mx-auto">
                <Button 
                  onClick={() => setIsRecurring(false)}
                  variant="ghost"
                  className={cn(
                    "flex-1 rounded-md text-[9px] font-black uppercase tracking-widest transition-all",
                    !isRecurring ? "bg-white text-black" : "bg-transparent text-white/40"
                  )}
                >
                  ONE-TIME
                </Button>
                <Button 
                  onClick={() => setIsRecurring(true)}
                  variant="ghost"
                  className={cn(
                    "flex-1 rounded-md text-[9px] font-black uppercase tracking-widest transition-all",
                    isRecurring ? "bg-white text-black" : "bg-transparent text-white/40"
                  )}
                >
                  RECURRING
                </Button>
              </div>

              <Button 
                onClick={handleGive}
                className="w-full bg-primary text-black rounded-md text-[10px] font-black uppercase tracking-[0.4em] hover:opacity-90 transition-all shadow-2xl"
              >
                PROCEED TO GIVE {selectedCurrency.symbol}{amount || '0'}
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-secondary/10 border border-white/5 shadow-xl rounded-xl">
              <CardContent className="p-8 space-y-8">
                <h3 className="text-sm font-black italic uppercase tracking-widest text-primary">OTHER WAYS TO GIVE</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-white">
                    <Banknote className="h-4 w-4 text-primary" /> BANK TRANSFER
                  </div>
                  <p className="text-[10px] text-muted-foreground font-bold leading-relaxed uppercase pl-7">
                    {BANK_DETAILS.accountName}<br/>
                    ACCT: {BANK_DETAILS.accountNumber}<br/>
                    BANK: {BANK_DETAILS.bankName}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-white">
                    <Smartphone className="h-4 w-4 text-primary" /> MOBILE MONEY
                  </div>
                  <p className="text-[10px] text-muted-foreground font-bold leading-relaxed uppercase pl-7">
                    NUMBER: {MOBILE_MONEY_DETAILS.number}<br/>
                    NAME: {MOBILE_MONEY_DETAILS.name}
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
