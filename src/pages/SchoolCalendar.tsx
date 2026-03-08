import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Calendar } from "lucide-react";

const months = [
  {
    month: "April 2026",
    events: [
      { date: "1", event: "New Session Begins" },
      { date: "5", event: "Orientation for New Students" },
      { date: "14", event: "Baisakhi Celebration" },
    ],
  },
  {
    month: "May 2026",
    events: [
      { date: "1", event: "Labour Day (Holiday)" },
      { date: "10", event: "Summer Camp Begins" },
      { date: "20", event: "Summer Vacation Starts" },
    ],
  },
  {
    month: "July 2026",
    events: [
      { date: "1", event: "School Reopens" },
      { date: "15", event: "Inter-House Competition" },
    ],
  },
  {
    month: "August 2026",
    events: [
      { date: "15", event: "Independence Day" },
      { date: "20", event: "Raksha Bandhan (Holiday)" },
      { date: "25", event: "Science Exhibition" },
    ],
  },
  {
    month: "October 2026",
    events: [
      { date: "2", event: "Gandhi Jayanti" },
      { date: "15-25", event: "Dussehra / Autumn Break" },
    ],
  },
  {
    month: "December 2026",
    events: [
      { date: "15", event: "Annual Day Celebration" },
      { date: "25", event: "Christmas Celebration" },
      { date: "26-31", event: "Winter Vacation" },
    ],
  },
];

const SchoolCalendar = () => (
  <Layout>
    <PageHero title="School Calendar" subtitle="Academic year 2026-27 schedule" breadcrumb="Calendar" />
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="grid sm:grid-cols-2 gap-6">
          {months.map((m, i) => (
            <AnimatedSection key={m.month} delay={i * 0.08}>
              <div className="bg-card rounded-xl border border-border overflow-hidden card-hover h-full">
                <div className="bg-primary p-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <h3 className="font-heading font-bold text-primary-foreground">{m.month}</h3>
                </div>
                <div className="p-4 space-y-3">
                  {m.events.map((e) => (
                    <div key={e.event} className="flex items-start gap-3">
                      <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded shrink-0 min-w-[40px] text-center">{e.date}</span>
                      <span className="text-sm text-foreground">{e.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default SchoolCalendar;