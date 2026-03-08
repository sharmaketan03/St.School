import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle } from "lucide-react";

const curriculumData = [
  {
    level: "Pre-Primary",
    classes: "Nursery, LKG, UKG",
    subjects: ["English", "Hindi", "Mathematics", "EVS", "Art & Craft", "Music & Dance", "Physical Education"],
    approach: "Activity-based learning with play-way methodology focusing on foundational skills.",
  },
  {
    level: "Primary",
    classes: "Classes I – V",
    subjects: ["English", "Hindi", "Mathematics", "EVS / Science", "Social Studies", "Computer", "Art", "Music", "Physical Education"],
    approach: "Experiential learning with emphasis on reading, writing, and analytical skills.",
  },
  {
    level: "Middle School",
    classes: "Classes VI – VIII",
    subjects: ["English", "Hindi", "Sanskrit", "Mathematics", "Science", "Social Science", "Computer Science", "Art", "Physical Education"],
    approach: "Inquiry-based learning with project work and practical assessments.",
  },
  {
    level: "Secondary",
    classes: "Classes IX – X",
    subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "IT / Computer"],
    approach: "Board exam preparation with conceptual understanding and application-based learning.",
  },
];

const Curriculum = () => (
  <Layout>
    <PageHero title="Curriculum" subtitle="CBSE-aligned comprehensive curriculum" breadcrumb="Curriculum" />
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8">
          {curriculumData.map((c, i) => (
            <AnimatedSection key={c.level} delay={i * 0.1}>
              <div className="bg-card rounded-2xl border border-border overflow-hidden card-hover">
                <div className="bg-primary p-4 px-6">
                  <h3 className="font-heading font-bold text-xl text-primary-foreground">{c.level}</h3>
                  <p className="text-primary-foreground/70 text-sm">{c.classes}</p>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 italic">{c.approach}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {c.subjects.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-secondary shrink-0" /> {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Curriculum;