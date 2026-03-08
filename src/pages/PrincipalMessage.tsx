import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Quote } from "lucide-react";

const PrincipalMessage = () => (
  <Layout>
    <PageHero title="Principal's Message" subtitle="A word from our leadership" breadcrumb="Principal's Message" />
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <div className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-12">
            <Quote className="w-12 h-12 text-secondary/40 mb-6" />
            <div className="prose max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg italic">
                "Dear Parents and Students,
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                It gives me immense pleasure to welcome you to St. Joseph's International School, Dholpur. Education is the most powerful weapon which you can use to change the world. At our school, we believe in providing an education that goes beyond textbooks.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our aim is to develop well-rounded individuals who are not only academically proficient but also possess strong moral values, leadership qualities, and a sense of social responsibility. We focus on creating an environment where every child feels valued, supported, and inspired to reach their full potential.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With our dedicated team of educators, modern facilities, and a curriculum designed to meet global standards, we prepare our students to face the challenges of tomorrow with confidence and competence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I invite you to be a part of our growing family and together, let us shape a brighter future for our children."
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-heading font-bold text-primary text-lg">The Principal</p>
                <p className="text-sm text-muted-foreground">St. Joseph's International School, Dholpur</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default PrincipalMessage;