import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import schoolBuilding from "@/assets/school-building.png";
import { Building2, FlaskConical, BookOpen, Monitor, Dumbbell, Music } from "lucide-react";

const facilities = [
  { icon: Building2, title: "Smart Classrooms", desc: "Air-conditioned classrooms equipped with interactive smart boards and multimedia projectors for engaging learning experiences." },
  { icon: FlaskConical, title: "Science Laboratories", desc: "Well-equipped Physics, Chemistry, and Biology labs for hands-on experimentation and practical learning." },
  { icon: Monitor, title: "Computer Lab", desc: "Modern computer lab with high-speed internet and latest hardware for digital literacy education." },
  { icon: BookOpen, title: "Library", desc: "Extensive library with thousands of books, journals, and digital resources for research and reading." },
  { icon: Dumbbell, title: "Sports Complex", desc: "Multi-sport complex with cricket ground, basketball court, football field, and indoor games facility." },
  { icon: Music, title: "Auditorium", desc: "State-of-the-art auditorium for cultural events, seminars, and large-scale school functions." },
];

const Infrastructure = () => (
  <Layout>
    <PageHero title="Infrastructure" subtitle="World-class facilities for holistic learning" breadcrumb="Infrastructure" />
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="rounded-2xl overflow-hidden mb-16 shadow-xl">
            <img src={schoolBuilding} alt="School Building" className="w-full h-64 md:h-96 object-cover" />
          </div>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.08}>
              <div className="bg-card rounded-xl border border-border p-6 card-hover h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Infrastructure;