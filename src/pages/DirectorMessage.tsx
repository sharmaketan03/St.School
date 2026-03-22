import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { Quote, Star, Heart, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const DirectorMessage = () => (
  <Layout>
    <PageHero
      title="Director's Message"
      subtitle="Words of wisdom from our Director"
      breadcrumb="Director's Message"
    />

    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <div className="bg-card rounded-2xl shadow-lg border border-border p-6 sm:p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-bl-full" />

            <div className="relative z-10">
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-secondary/40 mb-6" />

              <div className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4 text-base sm:text-lg italic">
                  "Dear Parents, Students, Staff Members, and Well-Wishers,
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  With immense pride and great pleasure, I welcome you to our school’s website. Whether you are a parent, student, staff member, or anyone seeking deeper insights into our institution, I invite you to explore our “online school” to understand the environment we provide for holistic learning and growth.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  Since our inception, our institution has consistently moved forward with the mission of spreading the light of education and paving the path of academic excellence for every learner. Our continuous journey reflects our commitment to creating opportunities, challenging minds, encouraging innovation, and sustaining excitement in learning.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  Our objective is to be recognized as a torchbearer of progressive education—an institution that empowers students to shape not only their own futures but also contribute meaningfully to the world. We strive to provide an environment that nurtures values, discipline, and confidence, helping students grow into responsible global citizens.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  We remain dedicated to ensuring brighter and more secure prospects for our children. The values and environment we offer are designed to support them through their formative years and beyond, enabling them to achieve excellence and reach greater heights.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  I extend my sincere gratitude to our Principal, dedicated teachers, and supportive staff members whose commitment and hard work make our achievements possible. Beyond academics, they instill values of discipline, zeal, and pride in every student.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base italic">
                  Once again, I warmly welcome you and sincerely hope that our website inspires you to take a meaningful step toward making a positive difference in your life."
                </p>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="font-heading font-bold text-primary text-base sm:text-lg">
                    The Director
                  </p>
                  <p className="text-sm text-muted-foreground">
                    St. Joseph's International School, Dholpur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Director's Vision */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mt-10">
          {[
            {
              icon: Star,
              title: "Excellence",
              desc: "Striving for the highest standards in education and student development",
            },
            {
              icon: Heart,
              title: "Values",
              desc: "Building strong character through faith, discipline, and compassion",
            },
            {
              icon: BookOpen,
              title: "Innovation",
              desc: "Embracing modern teaching methods while preserving traditional values",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={0.2 + i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl border border-border p-4 sm:p-6 text-center card-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-sm sm:text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default DirectorMessage;