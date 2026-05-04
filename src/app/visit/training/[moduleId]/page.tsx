
"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useFirestore, useDoc } from "@/firebase";
import { doc } from "firebase/firestore";
import { trainingAssistant } from "@/ai/flows/training-assistant-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Send, Sparkles, CheckCircle2, Loader2, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMemoFirebase } from "@/firebase/use-memo-firebase";

export default function PropheticClassroom() {
  const { moduleId } = useParams();
  const router = useRouter();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [question, setQuestion] = useState("");
  const [chat, setChat] = useState<{ q: string; a: string; s?: string }[]>([]);
  const [aiLoading, setAiLoading] = useState(false);

  const moduleRef = useMemoFirebase(() => {
    if (!firestore || !moduleId) return null;
    return doc(firestore, "training_modules", moduleId as string);
  }, [firestore, moduleId]);

  const { data: module, loading } = useDoc(moduleRef);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setAiLoading(true);
    try {
      const result = await trainingAssistant({ question, context: module?.title });
      setChat([...chat, { q: question, a: result.answer, s: result.scriptureReference }]);
      setQuestion("");
    } catch (err) {
      toast({ variant: "destructive", title: "CONNECTION INTERRUPTED", description: "Failed to reach the prophetic assistant." });
    } finally {
      setAiLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center space-y-4">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Opening the kingdom archives...</p>
      </div>
    );
  }

  if (!module) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-6">
        <BookOpen className="h-12 w-12 text-muted-foreground/20 mb-6" />
        <h1 className="text-xl font-black italic uppercase text-white mb-4">MODULE NOT FOUND</h1>
        <p className="text-xs text-white/40 mb-8">The requested revelation is not available in the current archive.</p>
        <Button onClick={() => router.push("/visit/training")} className="bg-primary text-black font-black uppercase text-[9px] tracking-widest px-8 h-12 rounded-md">
          RETURN TO PORTAL
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Lesson Content */}
        <div className="lg:col-span-2 space-y-10">
          <Button variant="ghost" onClick={() => router.back()} className="text-[9px] font-black uppercase tracking-widest text-primary gap-2 p-0 hover:bg-transparent">
            <ArrowLeft className="h-3 w-3" /> BACK TO PORTAL
          </Button>

          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <h1 className="text-3xl font-black italic uppercase tracking-tighter text-white">{module.title}</h1>
              <span className="text-[8px] font-black uppercase text-primary tracking-widest">ORIENTATION PHASE • STEP {module.stepNumber}</span>
            </div>
            <Progress value={60} className="h-2 bg-white/5" />
          </div>

          <Card className="bg-card border-white/5 shadow-2xl rounded-2xl overflow-hidden">
            <CardHeader className="bg-secondary/5 p-10 border-b border-white/5">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-primary">APOSTOLIC TEACHING</h3>
              </div>
            </CardHeader>
            <CardContent className="p-10 space-y-8">
              <p className="text-sm text-white/80 leading-relaxed italic font-medium whitespace-pre-wrap">
                {module.content}
              </p>
              {module.scripture && (
                <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl">
                  <p className="text-[9px] font-black uppercase tracking-widest text-primary mb-2">FOUNDATIONAL SCRIPTURE</p>
                  <p className="text-xs font-bold text-white italic">"{module.scripture}"</p>
                </div>
              )}
              <Button onClick={() => toast({ title: "MODULE COMPLETE", description: "Revelation received. Proceed with divine focus." })} className="w-full h-14 bg-primary text-black font-black uppercase tracking-[0.4em] text-[10px] rounded-md shadow-xl hover:opacity-90">
                COMPLETE & CONTINUE <CheckCircle2 className="h-4 w-4 ml-3" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* AI Assistant Sidebar */}
        <div className="space-y-8">
          <h2 className="text-sm font-black italic uppercase tracking-widest text-primary flex items-center gap-3">
            <Sparkles className="h-4 w-4" /> REVELATION ASSISTANT
          </h2>
          
          <Card className="bg-card border-white/5 h-[600px] flex flex-col rounded-2xl shadow-2xl overflow-hidden">
            <CardContent className="p-6 flex-grow overflow-y-auto space-y-6 scrollbar-hide">
              {chat.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30">
                  <Sparkles className="h-10 w-10 text-primary" />
                  <p className="text-[9px] font-black uppercase tracking-widest">Ask a question to receive prophetic clarity on this module.</p>
                </div>
              ) : (
                chat.map((item, idx) => (
                  <div key={idx} className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                    <div className="flex justify-end">
                      <div className="bg-secondary/10 p-3 rounded-lg max-w-[80%] border border-white/5">
                        <p className="text-[10px] text-white/60 italic font-medium">{item.q}</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-primary/5 p-4 rounded-lg max-w-[90%] border border-primary/10">
                        <p className="text-[10px] text-white leading-relaxed font-bold">{item.a}</p>
                        {item.s && (
                          <p className="text-[8px] text-primary font-black uppercase mt-3 tracking-widest">— {item.s}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
            <div className="p-6 border-t border-white/5 bg-secondary/5">
              <form onSubmit={handleAskAI} className="relative">
                <Input 
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="ASK THE SPIRIT..."
                  className="h-12 bg-card border-white/10 text-[10px] font-bold uppercase tracking-widest pr-12 rounded-md"
                  disabled={aiLoading}
                />
                <button type="submit" disabled={aiLoading} className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors">
                  {aiLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
