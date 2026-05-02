import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export default function EventsPage() {
  const EVENTS = [
    {
      id: 1,
      title: "Youth Summit 2024",
      date: "March 15-17, 2024",
      time: "6:00 PM onwards",
      location: "Main Sanctuary & Hall B",
      description: "A three-day gathering of young believers to ignite passion and purpose in this generation.",
      image: PlaceHolderImages.find(img => img.id === "event-youth")?.imageUrl || "https://picsum.photos/seed/youth/800/500"
    },
    {
      id: 2,
      title: "Global Missions Night",
      date: "March 22, 2024",
      time: "7:30 PM",
      location: "Community Center",
      description: "Join us as we share reports from our mission fields across the globe and pray for the nations.",
      image: PlaceHolderImages.find(img => img.id === "event-missions")?.imageUrl || "https://picsum.photos/seed/missions/800/500"
    },
    {
      id: 3,
      title: "Easter Sunday Celebration",
      date: "March 31, 2024",
      time: "9:00 AM & 11:30 AM",
      location: "Main Campus & Online",
      description: "He is Risen! Celebrate the resurrection power with us in a special worship service.",
      image: PlaceHolderImages.find(img => img.id === "event-easter")?.imageUrl || "https://picsum.photos/seed/easter/800/500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-primary/5 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl mb-6">Upcoming Events</h1>
          <p className="text-xl text-muted-foreground">Stay connected with our community. There is always a place for you at our table.</p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {EVENTS.map(event => (
            <Card key={event.id} className="bg-card border-none shadow-2xl overflow-hidden hover:shadow-primary/10 transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill 
                    className="object-cover"
                    data-ai-hint="church event"
                  />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-accent">
                      <Calendar className="h-5 w-5" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="h-5 w-5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {event.description}
                  </p>
                  <Button className="bg-primary text-white w-fit px-8 rounded-xl h-12 flex items-center gap-2 group">
                    Register Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Weekly Schedule</h2>
            <p className="text-muted-foreground">Join us regularly for growth and fellowship.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">Sundays</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium">Early Service</span>
                  <span className="text-accent">9:00 AM</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium">Worship Service</span>
                  <span className="text-accent">11:30 AM</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">Wednesdays</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium">Bible Study</span>
                  <span className="text-accent">7:00 PM</span>
                </li>
              </ul>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-primary">Saturdays</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-border pb-2">
                  <span className="font-medium">Prayer Meeting</span>
                  <span className="text-accent">6:00 AM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
