
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, CreditCard, Smartphone, Banknote, ShieldCheck } from "lucide-react";

export default function GivePage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-primary/20 p-4 rounded-full w-fit mx-auto mb-8">
          <Heart className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl mb-6">Generosity & Stewardship</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Your giving enables us to impact lives, support the needy, and spread the Gospel of Jesus Christ to the ends of the earth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card border-none shadow-2xl hover:scale-[1.02] transition-transform">
            <CardHeader className="text-center">
              <div className="bg-accent/10 p-3 rounded-full w-fit mx-auto mb-2">
                <CreditCard className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>One-Time Gift</CardTitle>
              <CardDescription>Support a specific project or give as you are led.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full h-12 bg-primary text-white rounded-lg text-lg">Give Once</Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-none shadow-2xl hover:scale-[1.02] transition-transform">
            <CardHeader className="text-center">
              <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-2">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Recurring Giving</CardTitle>
              <CardDescription>Automate your tithes and offerings regularly.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full h-12 border-primary text-primary hover:bg-primary/10 rounded-lg text-lg">Setup Recurring</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
            <Banknote className="h-6 w-6 text-accent" /> Other Ways to Give
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-bold text-accent mb-2">Bank Transfer</h4>
              <p className="text-sm text-muted-foreground">GIF Global Church<br/>Acct: 1234567890<br/>Bank: First Faith Bank</p>
            </div>
            <div>
              <h4 className="font-bold text-accent mb-2">By Check</h4>
              <p className="text-sm text-muted-foreground">Payable to: Growing In Faith<br/>123 Faith Lane,<br/>Global City, GC 12345</p>
            </div>
            <div>
              <h4 className="font-bold text-accent mb-2">Text to Give</h4>
              <p className="text-sm text-muted-foreground">Text "GIVE" to 555-123<br/>Follow the link sent to your phone.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full border border-border">
            <ShieldCheck className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium">Secure & Encrypted Transactions</span>
          </div>
          <p className="text-xs max-w-md">
            All donations are tax-deductible. You will receive an annual contribution statement for your records.
          </p>
        </div>
      </div>
    </div>
  );
}
