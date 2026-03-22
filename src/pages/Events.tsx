import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar, MapPin } from "lucide-react";

const events = [
  { title: "Annual Sports Day", date: "March 15, 2026", location: "School Grounds", desc: "A grand celebration of athletic talent and sportsmanship featuring track events, team sports, and prize distribution.", color: "bg-primary" },
  { title: "Science Exhibition", date: "April 5, 2026", location: "Science Labs", desc: "Students present creative science projects and simple experiments to understand basic scientific concepts.", color: "bg-secondary" },
  { title: "Annual Day Celebration", date: "December 20, 2025", location: "School Auditorium", desc: "A spectacular evening of cultural performances, awards, and celebrations of student achievements.", color: "bg-primary" },
  { title: "Republic Day Celebration", date: "January 26, 2026", location: "School Campus", desc: "Patriotic celebrations with flag hoisting, parade, cultural programs, and speeches.", color: "bg-secondary" },
  { title: "Inter-School Debate", date: "February 15, 2026", location: "Conference Hall", desc: "Students from across the region compete in intellectual discourse on current topics.", color: "bg-primary" },
  { title: "Art & Craft Fair", date: "May 10, 2026", location: "School Gallery", desc: "Exhibition of student artwork including paintings, sculptures, and craft projects.", color: "bg-secondary" },
];

const Events = () => (
  <Layout>
    <PageHero title="Events" subtitle="Upcoming and recent school events" breadcrumb="Events" />
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          {events.map((e, i) => (
            <AnimatedSection key={e.title} delay={i * 0.1}>
              <div className="bg-card rounded-xl border border-border overflow-hidden card-hover flex flex-col md:flex-row">
                <div className={`${e.color} p-6 md:w-48 flex flex-col items-center justify-center text-center shrink-0`}>
                  <Calendar className="w-6 h-6 text-primary-foreground mb-2" />
                  <p className="text-primary-foreground font-heading font-bold text-sm">{e.date}</p>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{e.title}</h3>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <MapPin className="w-3 h-3" /> {e.location}
                  </p>
                  <p className="text-sm text-muted-foreground">{e.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Events;