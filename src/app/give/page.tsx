import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, CreditCard, Smartphone, Banknote, ShieldCheck } from "lucide-react";

export default function GivePage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-primary/20 p-4 rounded-full w-fit mx-auto mb-8">
          <Heart className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-5xl mb-6 font-black italic uppercase tracking-tighter">GENEROSITY & STEWARDSHIP</h1>
        <p className="text-xs md:text-sm text-muted-foreground mb-12 max-w-2xl mx-auto italic font-medium leading-relaxed">
          Your giving enables us to impact lives, support the needy, and spread the Gospel of Jesus Christ to the ends of the earth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card text-card-foreground border-none shadow-2xl hover:scale-[1.02] transition-transform rounded-xl overflow-hidden">
            <CardHeader className="text-center p-8">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-sm font-black italic uppercase tracking-widest text-primary">ONE-TIME GIFT</CardTitle>
              <CardDescription className="text-[10px] uppercase font-bold text-card-foreground/60">Support a specific project or give as you are led.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <Button className="w-full h-12 bg-primary text-primary-foreground rounded-md text-[10px] font-black uppercase tracking-[0.3em] hover:opacity-90 transition-all shadow-lg">GIVE ONCE</Button>
            </CardContent>
          </Card>

          <Card className="bg-card text-card-foreground border-none shadow-2xl hover:scale-[1.02] transition-transform rounded-xl overflow-hidden">
            <CardHeader className="text-center p-8">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-sm font-black italic uppercase tracking-widest text-primary">RECURRING GIVING</CardTitle>
              <CardDescription className="text-[10px] uppercase font-bold text-card-foreground/60">Automate your tithes and offerings regularly.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <Button variant="outline" className="w-full h-12 border-primary text-primary hover:bg-primary/10 rounded-md text-[10px] font-black uppercase tracking-[0.3em] transition-all">SETUP RECURRING</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12 mb-16 border border-border">
          <h2 className="text-xl font-black italic mb-10 flex items-center justify-center gap-3 uppercase tracking-tight">
            <Banknote className="h-5 w-5 text-primary" /> OTHER WAYS TO GIVE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="space-y-3">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-widest">BANK TRANSFER</h4>
              <p className="text-[11px] text-muted-foreground font-bold leading-relaxed">GIF GLOBAL CHURCH<br/>ACCT: 1234567890<br/>BANK: FIRST FAITH BANK</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-widest">BY CHECK</h4>
              <p className="text-[11px] text-muted-foreground font-bold leading-relaxed">PAYABLE TO: GROWING IN FAITH<br/>123 FAITH LANE,<br/>GLOBAL CITY, GC 12345</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-widest">TEXT TO GIVE</h4>
              <p className="text-[11px] text-muted-foreground font-bold leading-relaxed">TEXT "GIVE" TO 555-123<br/>FOLLOW THE LINK SENT TO YOUR PHONE.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-3 bg-card px-5 py-2.5 rounded-full border border-primary/20 shadow-xl">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-[9px] font-black uppercase tracking-widest text-white">SECURE & ENCRYPTED TRANSACTIONS</span>
          </div>
          <p className="text-[10px] max-w-md italic font-medium uppercase tracking-tight opacity-60">
            All donations are tax-deductible. You will receive an annual contribution statement for your records.
          </p>
        </div>
      </div>
    </div>
  );
}
