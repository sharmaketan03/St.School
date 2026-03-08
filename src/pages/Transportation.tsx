import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Bus, Shield, MapPin, Clock } from "lucide-react";

const routes = [
  { area: "Dholpur City", stops: "Main Market, Railway Station, Bus Stand", time: "7:00 AM" },
  { area: "Bari", stops: "Bari Town, Highway Junction", time: "6:45 AM" },
  { area: "Rajakhera", stops: "Rajakhera Main Road, Crossing", time: "6:30 AM" },
  { area: "Sarmathura", stops: "Sarmathura Center, NH-44", time: "6:40 AM" },
  { area: "Saipau", stops: "Saipau Main Road", time: "6:50 AM" },
];

const Transportation = () => (
  <Layout>
    <PageHero title="Transportation" subtitle="Safe and reliable transport for every student" breadcrumb="Transportation" />
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Bus, title: "15+ Buses", desc: "Modern fleet" },
            { icon: Shield, title: "GPS Tracked", desc: "Real-time monitoring" },
            { icon: MapPin, title: "20+ Routes", desc: "Wide coverage" },
            { icon: Clock, title: "On Time", desc: "Punctual service" },
          ].map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="bg-primary rounded-xl p-6 text-center text-primary-foreground card-hover">
                <f.icon className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <h3 className="font-heading font-bold">{f.title}</h3>
                <p className="text-xs text-primary-foreground/70">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <h2 className="section-title text-center">Route Details</h2>
          <div className="gold-underline" />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="bg-card rounded-2xl border border-border overflow-hidden mt-8">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 font-heading">Area</th>
                  <th className="text-left p-4 font-heading hidden sm:table-cell">Major Stops</th>
                  <th className="text-left p-4 font-heading">Pickup Time</th>
                </tr>
              </thead>
              <tbody>
                {routes.map((r, i) => (
                  <tr key={r.area} className={`border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                    <td className="p-4 font-semibold text-foreground">{r.area}</td>
                    <td className="p-4 text-sm text-muted-foreground hidden sm:table-cell">{r.stops}</td>
                    <td className="p-4 text-sm text-secondary font-semibold">{r.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Transportation;