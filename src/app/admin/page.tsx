
"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Play, BookOpen, Settings, ArrowRight } from "lucide-react";

export default function AdminDashboard() {
  const sections = [
    {
      title: "EVENT MANAGEMENT",
      description: "Post new gatherings and manage the prophetic calendar.",
      href: "/admin/events",
      icon: Calendar,
      color: "text-primary"
    },
    {
      title: "SERMON ARCHIVE",
      description: "Upload messages and manage media revelation.",
      href: "/admin/sermons",
      icon: Play,
      color: "text-primary"
    },
    {
      title: "RESOURCE LIBRARY",
      description: "Manage books, digital downloads, and store items.",
      href: "/admin/resources",
      icon: BookOpen,
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[8px] font-black uppercase tracking-[0.4em] mb-6 rounded-md">
            KINGDOM ADMINISTRATION
          </div>
          <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 text-foreground">COMMAND CENTER</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest italic font-medium">Equipping the unique prophetic generation through digital excellence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <Link key={section.title} href={section.href}>
              <Card className="bg-card border-white/5 hover:border-primary/40 transition-all duration-500 group cursor-pointer h-full rounded-xl overflow-hidden shadow-2xl">
                <CardHeader className="p-8">
                  <div className={`p-4 bg-secondary/10 w-fit rounded-lg mb-6 group-hover:scale-110 transition-transform`}>
                    <section.icon className={`h-6 w-6 ${section.color}`} />
                  </div>
                  <CardTitle className="text-lg font-black italic uppercase tracking-tight text-white">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0 space-y-6">
                  <p className="text-[11px] text-white/60 leading-relaxed italic font-medium">
                    {section.description}
                  </p>
                  <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-widest text-primary">
                    MANAGE SECTION <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
