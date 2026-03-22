import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Quote } from "lucide-react";

const PrincipalMessage = () => (
  <Layout>
    <PageHero 
      title="Principal's Message" 
      subtitle="A word from our leadership" 
      breadcrumb="Principal's Message" 
    />

  <section className="section-padding">
  <div className="container mx-auto max-w-4xl">
    <AnimatedSection>
      <div className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-12">
        
        <Quote className="w-12 h-12 text-secondary/40 mb-6" />

        <div className="prose max-w-none">
          
          <p className="text-muted-foreground leading-relaxed mb-4 text-lg font-semibold">
            Principal’s Message
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            At our school, we believe that education is the foundation of a bright and successful future. 
            Our mission is to nurture young minds by providing quality education in a safe, disciplined, 
            and inspiring environment. We strive to develop not only academic excellence but also strong 
            character, confidence, creativity, and leadership among our students.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Our dedicated and experienced teachers work with commitment and passion to guide every child 
            towards knowledge and personal growth. Along with academics, we encourage students to participate 
            in sports, music, and co-curricular activities so that they grow into well-rounded individuals 
            ready to face the challenges of the modern world.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            We believe that education is a partnership between the school and parents. With strong support 
            from parents and the hard work of our students, we aim to build a generation that is responsible, 
            confident, and capable of making a positive contribution to society.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Let us work together to inspire our children to dream big, work hard, and achieve excellence.
          </p>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="font-heading font-bold text-primary text-lg">
              The Principal
            </p>
            <p className="text-sm text-muted-foreground">
              St. Joseph's International School, Dholpur
            </p>
          </div>

        </div>
      </div>
    </AnimatedSection>
  </div>
</section>
  </Layout>
);

export default PrincipalMessage;