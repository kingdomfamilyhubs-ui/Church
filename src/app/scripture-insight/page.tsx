
"use client";

import { useState } from "react";
import { getScriptureInsight, type ScriptureInsightOutput } from "@/ai/flows/scripture-insight-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="bg-primary/20 p-3 rounded-full w-fit mx-auto mb-6">
            <BookOpen className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">AI Scripture Insight</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deepen your understanding of God's Word with AI-powered historical, theological, and contextual analysis.
          </p>
        </div>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              value={verse}
              onChange={(e) => setVerse(e.target.value)}
              placeholder="Enter a verse (e.g., Romans 8:28, Genesis 1:1)"
              className="h-14 pl-12 bg-card border-border rounded-xl text-lg focus:ring-accent"
              disabled={loading}
            />
          </div>
          <Button 
            type="submit" 
            disabled={loading || !verse.trim()} 
            className="h-14 px-8 rounded-xl bg-primary text-white text-lg min-w-[150px]"
          >
            {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : "Get Insight"}
          </Button>
        </form>

        {error && (
          <Alert variant="destructive" className="mb-8">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {insight ? (
          <div className="grid gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              Insights for <span className="text-accent underline decoration-primary underline-offset-4">{verse}</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-card border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <ScrollText className="h-5 w-5" /> Historical
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {insight.historicalBackground}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-accent">
                    <Cross className="h-5 w-5" /> Theological
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {insight.theologicalContext}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <BookOpen className="h-5 w-5" /> Contextual
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {insight.contextualMeaning}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : !loading && (
          <div className="text-center py-20 bg-muted/30 rounded-[2rem] border border-dashed border-border">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
            <p className="text-muted-foreground">Enter a verse reference above to begin your study.</p>
          </div>
        )}
      </div>
    </div>
  );
}
