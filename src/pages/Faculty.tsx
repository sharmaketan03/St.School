import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap } from "lucide-react";

const facultyData = [
  { name: "Dr. Rajesh Kumar", subject: "Mathematics", exp: "20+ years" },
  { name: "Mrs. Sunita Sharma", subject: "English Literature", exp: "15+ years" },
  { name: "Mr. Anil Verma", subject: "Physics", exp: "18+ years" },
  { name: "Mrs. Priya Singh", subject: "Chemistry", exp: "12+ years" },
  { name: "Mr. Deepak Gupta", subject: "Computer Science", exp: "10+ years" },
  { name: "Mrs. Kavita Jain", subject: "Biology", exp: "14+ years" },
  { name: "Mr. Ramesh Yadav", subject: "Hindi", exp: "16+ years" },
  { name: "Mrs. Anjali Tiwari", subject: "Social Studies", exp: "11+ years" },
];

const Faculty = () => (
  <Layout>
    <PageHero title="Our Faculty" subtitle="Meet our dedicated team of educators" breadcrumb="Faculty" />
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="section-title">Experienced & Passionate Educators</h2>
            <div className="gold-underline" />
            <p className="section-subtitle">Our faculty members are highly qualified professionals dedicated to nurturing every student's potential.</p>
          </div>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyData.map((f, i) => (
            <AnimatedSection key={f.name} delay={i * 0.08}>
              <div className="bg-card rounded-xl border border-border p-6 text-center card-hover">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{f.name}</h3>
                <p className="text-secondary text-sm font-semibold mt-1">{f.subject}</p>
                <p className="text-xs text-muted-foreground mt-1">{f.exp} experience</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Faculty;