"use client";

import { useState } from "react";
import { getScriptureInsight, type ScriptureInsightOutput } from "@/ai/flows/scripture-insight-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BookOpen, ScrollText, Cross, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ScriptureInsightPage() {
  const [verse, setVerse] = useState("");
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState<ScriptureInsightOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verse.trim()) return;

    setLoading(true);
    setError(null);
    setInsight(null);

    try {
      const result = await getScriptureInsight({ verse });
      setInsight(result);
    } catch (err) {
      setError("Failed to fetch insight. Please try a valid verse reference (e.g., 'John 3:16').");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-primary/20 p-4 rounded-full w-fit mx-auto mb-8 border border-primary/20">
            <BookOpen className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl mb-6 font-black italic uppercase tracking-tighter">SCRIPTURE INSIGHT</h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto italic font-medium leading-relaxed uppercase tracking-widest">
            Deepen your understanding of God's Word with AI-powered historical, theological, and contextual analysis.
          </p>
        </div>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-20 max-w-3xl mx-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={verse}
              onChange={(e) => setVerse(e.target.value)}
              placeholder="e.g., Romans 8:28, Genesis 1:1"
              className="h-12 pl-12 bg-card text-white border-white/10 rounded-md text-xs uppercase font-bold tracking-widest focus:ring-primary"
              disabled={loading}
            />
          </div>
          <Button 
            type="submit" 
            disabled={loading || !verse.trim()} 
            className="h-12 px-10 rounded-md bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.3em] min-w-[180px] shadow-lg hover:opacity-90 transition-all"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "GET INSIGHT"}
          </Button>
        </form>

        {error && (
          <Alert variant="destructive" className="mb-8 border-destructive/20 bg-destructive/10">
            <AlertTitle className="text-[10px] font-black uppercase tracking-widest mb-1">ERROR DETECTED</AlertTitle>
            <AlertDescription className="text-[11px] font-medium italic">{error}</AlertDescription>
          </Alert>
        )}

        {insight ? (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-0.5 flex-grow bg-primary/20" />
              <h2 className="text-xl font-black italic uppercase tracking-tight whitespace-nowrap">
                REVELATION FOR <span className="text-primary underline underline-offset-8">{verse}</span>
              </h2>
              <div className="h-0.5 flex-grow bg-primary/20" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "HISTORICAL", icon: ScrollText, content: insight.historicalBackground, color: "text-primary" },
                { title: "THEOLOGICAL", icon: Cross, content: insight.theologicalContext, color: "text-primary" },
                { title: "CONTEXTUAL", icon: BookOpen, content: insight.contextualMeaning, color: "text-primary" }
              ].map((card, idx) => (
                <Card key={idx} className="bg-card text-card-foreground border-none shadow-2xl rounded-xl group hover:border-primary/20 border-transparent border transition-all duration-500">
                  <CardHeader className="p-8 pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <card.icon className={`h-4 w-4 ${card.color}`} />
                      <h3 className={`text-[10px] font-black uppercase tracking-widest ${card.color}`}>{card.title} BACKGROUND</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <p className="text-[11px] leading-relaxed text-card-foreground/70 italic font-medium group-hover:text-card-foreground transition-colors">
                      {card.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : !loading && (
          <div className="text-center py-24 bg-secondary/10 rounded-2xl border border-dashed border-border/20 max-w-2xl mx-auto">
            <Search className="h-10 w-10 text-muted-foreground mx-auto mb-6 opacity-20" />
            <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Enter a verse reference above to begin your study.</p>
          </div>
        )}
      </div>
    </div>
  );
}
