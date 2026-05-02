
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, Heart, Target } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function AboutPage() {
  const visionImage = PlaceHolderImages.find(img => img.id === "about-vision")?.imageUrl;

  const beliefs = [
    { title: "The Holy Bible", description: "We believe the Bible is the inspired and only infallible and authoritative Word of God." },
    { title: "The Trinity", description: "There is one God, eternally existent in three persons: God the Father, God the Son, and God the Holy Spirit." },
    { title: "Salvation", description: "We believe that for the salvation of lost and sinful people, regeneration by the Holy Spirit is absolutely essential." },
    { title: "Baptism", description: "We believe in water baptism by immersion in the Name of our Lord Jesus Christ." },
    { title: "Divine Healing", description: "We believe that the redemptive work of Christ on the cross provides healing for the human body." },
    { title: "Resurrection", description: "We believe in the resurrection of both the saved and the lost; they that are saved unto the resurrection of life and they that are lost unto the resurrection of damnation." }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-secondary py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl mb-6">Who We Are</h1>
          <p className="text-xl text-muted-foreground">A global family united by faith, driven by purpose, and anchored in the Word of God.</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src={visionImage || "https://picsum.photos/seed/about/800/800"} 
                alt="Our Vision" 
                fill 
                className="object-cover"
                data-ai-hint="church community"
              />
            </div>
            <div>
              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="h-6 w-6 text-accent" />
                    <h2 className="text-3xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To raise a global community of believers who are spiritually mature, impact-driven, and living evidence of God's power and love in every sphere of life.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="h-6 w-6 text-accent" />
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To preach the gospel of Jesus Christ, making disciples of all nations through sound biblical teaching, passionate worship, and authentic community engagement.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-6 w-6 text-accent" />
                    <h2 className="text-3xl font-bold">Our Core Values</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {["Faith", "Integrity", "Excellence", "Compassion", "Servant Leadership", "Community"].map(val => (
                      <div key={val} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="py-24 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">What We Believe</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our foundation is built on the timeless truths of the Bible and the central message of Christ.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((belief, idx) => (
              <Card key={idx} className="bg-card border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-primary">{belief.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{belief.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
