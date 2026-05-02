import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, Calendar, Heart, Search } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function Home() {
  const heroImage = PlaceHolderImages?.find(img => img.id === "hero-church");
  const aiToolImage = PlaceHolderImages?.find(img => img.id === "ai-scripture");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-church-hero bg-no-repeat z-0" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Growing In Faith, <span className="text-accent italic">Globally.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Welcome to a community where spiritual depth meets global vision. Discover your purpose through the word of God.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button asChild size="lg" className="bg-primary text-white h-14 px-8 text-lg rounded-full shadow-lg hover:shadow-primary/20">
              <Link href="/about">New Here? Start Here</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-accent text-accent hover:bg-accent/10">
              <Link href="/sermons" className="flex items-center gap-2">
                <Play className="h-5 w-5" /> Watch Latest Service
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Blocks */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-none shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="pt-8 text-center">
                <div className="bg-primary/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Latest Sermons</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <p className="text-muted-foreground mb-6">
                  Missed our Sunday service? Catch up on the latest spiritual insights and revelations.
                </p>
                <Button asChild variant="link" className="text-accent group">
                  <Link href="/sermons" className="flex items-center gap-2">
                    Browse Library <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="pt-8 text-center">
                <div className="bg-accent/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <p className="text-muted-foreground mb-6">
                  Join our community events, workshops, and gatherings designed for spiritual growth.
                </p>
                <Button asChild variant="link" className="text-accent group">
                  <Link href="/events" className="flex items-center gap-2">
                    View Calendar <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="pt-8 text-center">
                <div className="bg-primary/20 p-4 rounded-2xl w-fit mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Online Giving</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <p className="text-muted-foreground mb-6">
                  Support our mission to reach the world with the message of faith and love.
                </p>
                <Button asChild variant="link" className="text-accent group">
                  <Link href="/give" className="flex items-center gap-2">
                    Give Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Scripture Feature Highlight */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-8 md:p-16 rounded-[2.5rem] shadow-2xl overflow-hidden relative border border-border">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <Search className="h-3 w-3" /> New: AI Scripture Insight
                </div>
                <h2 className="text-3xl md:text-5xl mb-6">Deepen Your Study with <span className="text-accent">AI-Powered</span> Backgrounds</h2>
                <h3 className="text-xl mb-4 font-normal text-muted-foreground">Historical, Theological & Contextual Insights</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Get instant historical, theological, and contextual background for any Bible verse. Perfect for personal study or preparing for sermons.
                </p>
                <Button asChild size="lg" className="bg-primary text-white rounded-full">
                  <Link href="/scripture-insight">Try the Insight Tool</Link>
                </Button>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-muted">
                <Image 
                  src={aiToolImage?.imageUrl || "https://picsum.photos/seed/ai-scripture/800/600"}
                  alt="AI Scripture Tool"
                  fill
                  className="object-cover"
                  data-ai-hint="bible study"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                  <div className="bg-background/90 backdrop-blur p-4 rounded-xl border border-border shadow-lg w-full max-w-xs">
                    <p className="text-xs font-bold text-accent mb-2">Insight Example:</p>
                    <p className="text-sm italic">"John 3:16 - Explaining the Greek concept of 'Agapé' and the historical Nicodemus context..."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Service CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Join Us This Sunday</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="flex flex-col items-center">
              <span className="text-accent font-bold text-lg">In Person</span>
              <span className="text-2xl">9:00 AM & 11:30 AM</span>
              <span className="text-muted-foreground">123 Faith Lane, Global City</span>
            </div>
            <div className="h-12 w-px bg-border hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-accent font-bold text-lg">Online</span>
              <span className="text-2xl">10:00 AM</span>
              <span className="text-muted-foreground">Streaming on YouTube & Facebook</span>
            </div>
          </div>
          <Button asChild className="mt-12 bg-primary hover:bg-primary/90 rounded-full h-14 px-10">
            <Link href="/contact">Plan Your Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
