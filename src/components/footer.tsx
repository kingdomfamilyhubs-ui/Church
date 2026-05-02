
import Link from "next/link";
import { Cross, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Cross className="h-6 w-6 text-primary" />
              <span className="text-lg font-headline font-bold">Growing In Faith</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering individuals to grow deeper in their faith and live out their divine purpose in a global community.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-accent transition-colors">Our Beliefs</Link></li>
              <li><Link href="/sermons" className="hover:text-accent transition-colors">Watch Online</Link></li>
              <li><Link href="/events" className="hover:text-accent transition-colors">Upcoming Events</Link></li>
              <li><Link href="/give" className="hover:text-accent transition-colors">Support Our Ministry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> 123 Faith Lane, Global City</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> (555) 123-4567</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> info@gifglobalchurch.org</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Youtube className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Growing In Faith Global Church. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
